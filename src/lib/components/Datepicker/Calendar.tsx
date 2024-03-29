import { useDialog } from "@react-aria/dialog";
import dayjs from "dayjs";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomarphicLayoutEffect";
import { colors } from "../../styles";
import { getElevation } from "../elevation";

const throttle = (fn: (...args: any[]) => void, interval: number) => {
  let lastTime = Date.now() - interval;
  return () => {
    if (lastTime + interval < Date.now()) {
      lastTime = Date.now();
      fn();
    }
  };
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];

type PickingTarget = "DATE" | "YEAR_MONTH";

const variants: Variants = {
  initial: { opacity: 0, y: -16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.3, 0.3, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.2,
      ease: [0.3, 0.3, 0.3, 1],
    },
  },
};

export type DateString = `${number}/${number}/${number}`;

type CalendarProp = {
  innerValue: Date | null;
  placeholder?: string;
  baseRef: React.MutableRefObject<HTMLDivElement | null>;
  min: dayjs.Dayjs;
  max: dayjs.Dayjs;
  name?: string;
  onSelectDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  onClickCancel: () => void;
  onClickOk: () => void;
};

const isInRange = (min: dayjs.Dayjs, max: dayjs.Dayjs, value: dayjs.Dayjs): boolean => {
  if (min && dayjs(min) > value) {
    return false;
  } else if (max && dayjs(max) < value) {
    return false;
  }
  return true;
};

export const Calendar: React.FC<CalendarProp> = ({
  innerValue,
  name,
  baseRef,
  min,
  max,
  onSelectDate,
  onClickCancel,
  onClickOk,
}) => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const yearGridRef = useRef<HTMLDivElement | null>(null);
  const [displayingDate, setDisplayingDate] = useState(innerValue || new Date());
  const [picking, setPicking] = useState<PickingTarget>("DATE");

  const id = useMemo(() => (name ? `${name}-date-picker` : "date-picker"), [name]);
  const { dialogProps, titleProps } = useDialog(
    {
      role: "dialog",
      "aria-labelledby": id,
    },
    calendarRef
  );

  useIsomorphicLayoutEffect(() => {
    if (baseRef.current && calendarRef.current) {
      const { x, y, height } = baseRef.current.getBoundingClientRect();
      const { height: calendarHeight } = calendarRef.current.getBoundingClientRect();
      const innerHeight = window.innerHeight;
      calendarRef.current.focus();
      calendarRef.current.style.position = "fixed";
      if (y + height + calendarHeight > innerHeight) {
        calendarRef.current.style.transform = `translate(${x}px, ${y - calendarHeight - 16}px)`;
      } else {
        calendarRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
      }
    }
  }, [baseRef, calendarRef]);

  useIsomorphicLayoutEffect(() => {
    if (picking === "YEAR_MONTH" && yearGridRef.current) {
      const selectedYearDOM = Array.from(yearGridRef.current.children).find(
        (v) => (v as HTMLButtonElement).dataset["selected"] === "true"
      );
      if (selectedYearDOM) {
        selectedYearDOM.scrollIntoView({ block: "center" });
      }
    }
  }, [yearGridRef, picking]);

  useEffect(() => {
    baseRef.current?.querySelector("h2")?.focus();
  }, [baseRef]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": {
          onSelectDate?.((current) => {
            const next =
              picking === "DATE"
                ? dayjs(current || new Date()).subtract(7, "days")
                : dayjs(current || new Date()).subtract(4, "years");
            return isInRange(min, max, next) ? next.toDate() : current;
          });
          break;
        }
        case "ArrowDown": {
          onSelectDate?.((current) => {
            const next =
              picking === "DATE"
                ? dayjs(current || new Date()).add(7, "days")
                : dayjs(current || new Date()).add(4, "years");
            return isInRange(min, max, next) ? next.toDate() : current;
          });
          break;
        }
        case "ArrowRight": {
          onSelectDate?.((current) => {
            const next =
              picking === "DATE"
                ? dayjs(current || new Date()).add(1, "day")
                : dayjs(current || new Date()).add(1, "years");
            return isInRange(min, max, next) ? next.toDate() : current;
          });
          break;
        }
        case "ArrowLeft": {
          onSelectDate?.((current) => {
            const next =
              picking === "DATE"
                ? dayjs(current || new Date()).subtract(1, "day")
                : dayjs(current || new Date()).subtract(1, "years");
            return isInRange(min, max, next) ? next.toDate() : current;
          });
          break;
        }
        case "Enter": {
          onClickOk();
          break;
        }
        case "Escape": {
          onClickCancel();
          break;
        }
        default: {
          break;
        }
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [onSelectDate, min, max, onClickOk, onClickCancel, picking]);

  useEffect(() => {
    if (innerValue) {
      setDisplayingDate(innerValue);
    }
  }, [innerValue]);

  useEffect(() => {
    const listener = throttle((_e: Event) => {
      if (baseRef.current && calendarRef.current) {
        const { x, y, height } = baseRef.current?.getBoundingClientRect();
        const { height: calendarHeight } = calendarRef.current.getBoundingClientRect();
        const innerHeight = window.innerHeight;
        if (y + height + calendarHeight > innerHeight) {
          calendarRef.current.style.transform = `translate(${x}px, ${y - calendarHeight - 16}px)`;
        } else {
          calendarRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
        }
      }
    }, 150);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [baseRef, calendarRef]);

  useEffect(() => {
    const baseDom = baseRef.current;
    return () => baseDom?.focus();
  }, [baseRef]);

  const emptyCells = useMemo(() => {
    const firstDay = dayjs(displayingDate).set("date", 1).get("day");
    return Array.from({ length: firstDay }, (_, i) => i);
  }, [displayingDate]);

  const days = useMemo(() => {
    const formattedToday = dayjs().format("YYYY-MM-DD");
    const formattedInnerValue = innerValue ? dayjs(innerValue).format("YYYY-MM-DD") : "";
    const daysInMonth = dayjs(displayingDate).daysInMonth();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
      const fullDate = dayjs(displayingDate).set("date", d).format("YYYY-MM-DD");
      return {
        date: d,
        fullDate,
        isToday: formattedToday === fullDate,
        selected: formattedInnerValue === fullDate,
        disabled: dayjs(fullDate) < min || max < dayjs(fullDate),
      };
    });
  }, [innerValue, displayingDate, min, max]);

  const years = useMemo(() => {
    const thisYear = new Date().getFullYear();
    const selectedYear = innerValue ? innerValue.getFullYear() : 0;
    const minYear = min.year();
    const maxYear = max.year();
    return Array.from({ length: 200 }, (_, i) => i + 1900).map((year) => {
      return {
        year,
        thisYear: thisYear === year,
        selected: selectedYear === year,
        disabled: year < minYear || maxYear < year,
      };
    });
  }, [innerValue, min, max]);

  const nextMonthDates = useMemo(() => {
    const lastDay = dayjs(displayingDate)
      .set("date", 1)
      .add(1, "month")
      .subtract(1, "day")
      .get("day");
    return Array.from({ length: 6 - lastDay }, (_, i) => i + 1);
  }, [displayingDate]);

  const onClickChevronLeft = () => {
    setDisplayingDate((current) => {
      return dayjs(current).subtract(1, "month").toDate();
    });
  };

  const onClickChevronRight = () => {
    setDisplayingDate((current) => {
      return dayjs(current).add(1, "month").toDate();
    });
  };

  const onClickDateCell = (date: number) => {
    const next = dayjs(displayingDate).set("date", date).toDate();
    onSelectDate?.(next);
  };

  const onClickYearCell = (year: number) => {
    const next = dayjs(displayingDate).set("year", year).toDate();
    setDisplayingDate(next);
    setPicking("DATE");
    onSelectDate?.(next);
  };

  return (
    <motion.div variants={variants} initial={"initial"} animate={"animate"} exit={"exit"}>
      <CalendarBase ref={calendarRef} tabIndex={0} {...dialogProps}>
        <Header>
          <HeaderLeft>
            <YearMonth {...titleProps} id={id}>
              {MONTHS[displayingDate.getMonth()]} {displayingDate.getFullYear()}
            </YearMonth>
            <IconButton
              type="button"
              aria-label={
                picking === "DATE" ? "Switch to year picker" : "Switch to month date picker"
              }
              onClick={() =>
                setPicking((current) => (current === "YEAR_MONTH" ? "DATE" : "YEAR_MONTH"))
              }
            >
              <TriangleDown />
            </IconButton>
          </HeaderLeft>
          {picking === "DATE" && (
            <HeaderRight>
              <IconButton
                type="button"
                aria-label={"Show previous month"}
                onClick={() => onClickChevronLeft()}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                type="button"
                aria-label={"Show next month"}
                onClick={() => onClickChevronRight()}
              >
                <ChevronRight />
              </IconButton>
            </HeaderRight>
          )}
        </Header>
        <Body>
          {picking === "DATE" ? (
            <>
              <WeekDays>
                {WEEK_DAYS.map((day, idx) => {
                  return <span key={`${day}--${idx}`}>{day}</span>;
                })}
              </WeekDays>
              <DaysGrid>
                {emptyCells.map((i) => {
                  return <span key={i} />;
                })}
                {days.map(({ date, fullDate, isToday, selected, disabled }) => {
                  return (
                    <DateCell
                      type="button"
                      key={date}
                      $today={isToday}
                      $selected={selected}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClickDateCell(date);
                      }}
                      disabled={disabled}
                      aria-label={fullDate}
                    >
                      {date}
                    </DateCell>
                  );
                })}
                {nextMonthDates.map((d) => {
                  return (
                    <DateCell type="button" key={d} $today={false} $selected={false} disabled>
                      {d}
                    </DateCell>
                  );
                })}
              </DaysGrid>
            </>
          ) : (
            <>
              <YearGrid ref={yearGridRef}>
                {years.map(({ thisYear, year, selected, disabled }) => {
                  return (
                    <YearCell
                      type="button"
                      key={year}
                      $thisYear={thisYear}
                      $selected={selected}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClickYearCell(year);
                      }}
                      data-selected={selected}
                      disabled={disabled}
                      aria-label={`${year}`}
                    >
                      {year}
                    </YearCell>
                  );
                })}
              </YearGrid>
            </>
          )}
        </Body>
        <Footer>
          <CancelButton type="button" onClick={onClickCancel}>
            Cancel
          </CancelButton>
          <SubmitButton type="button" onClick={onClickOk}>
            OK
          </SubmitButton>
        </Footer>
      </CalendarBase>
    </motion.div>
  );
};

const CalendarBase = styled.div`
  display: block;
  width: 256px;
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: ${getElevation(24)};
  &:focus {
    outline: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 12px 24px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const YearMonth = styled.h2`
  display: inline-block;
  color: ${colors.blackAlpha500};
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  margin-right: 4px;
`;

const IconButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  text-align: center;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &:focus {
    background-color: ${colors.blackAlpha100};
  }

  & + & {
    margin-left: 12px;
  }
`;

const TriangleDown = styled.span`
  display: block;
  content: "";
  position: relative;
  width: 8px;
  height: 6px;
  background-color: ${colors.blackAlpha500};
  clip-path: polygon(0 0, 100% 0%, 50% 100%);

  &:hover {
    background-color: ${colors.blackAlpha700};
  }
`;

const ChevronLeft = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${colors.blackAlpha500};
  line-height: 1;
  width: 8px;
  height: 8px;
  border: 1.5px solid currentColor;
  border-left: 0;
  border-bottom: 0;
  box-sizing: border-box;
  transform: translateX(25%) rotate(-135deg);
`;

const ChevronRight = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${colors.blackAlpha500};
  line-height: 1;
  width: 8px;
  height: 8px;
  border: 1.5px solid currentColor;
  border-left: 0;
  border-bottom: 0;
  box-sizing: border-box;
  transform: translateX(-25%) rotate(45deg);
`;

const Body = styled.div``;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  text-align: center;
  margin: 0 16px;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.blackAlpha500};
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-template-rows: repeat(6, 32px);
  place-items: center;
  margin: 8px 16px;
  text-align: center;
`;

const DateCell = styled.button<{ $today: boolean; $selected: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  background-color: ${({ $selected }) => ($selected ? colors.brand : "transparent")};
  display: block;
  margin: 2px;
  padding: 0;
  width: 28px;
  height: 28px;
  border: ${({ $today }) => ($today ? `1px solid ${colors.brand}` : `none`)};
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $selected }) => ($selected ? colors.whiteAlpha800 : colors.blackAlpha500)};
  line-height: 14px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.blackAlpha400};
  }

  &:focus {
    background-color: ${({ $selected }) => ($selected ? colors.brand : colors.blackAlpha100)};
    color: ${({ $selected }) => ($selected ? colors.whiteAlpha800 : colors.blackAlpha700)};
  }

  &:disabled {
    color: ${colors.blackAlpha400};
    cursor: default;
  }
  &:disabled:hover {
    border: none;
  }
`;

const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 56px);
  max-height: calc(280px - 52px);
  overflow-y: auto;
  place-items: center;
  margin: 4px 8px 8px 12px;
  text-align: center;
`;

const YearCell = styled.button<{ $thisYear: boolean; $selected: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  background-color: ${({ $selected }) => ($selected ? colors.brand : "transparent")};
  display: block;
  margin: 2px;
  padding: 0;
  width: 52px;
  height: 28px;
  border: ${({ $thisYear }) => ($thisYear ? `1px solid ${colors.brand}` : `none`)};
  border-radius: 9999vmax;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $selected }) => ($selected ? colors.whiteAlpha800 : colors.blackAlpha500)};
  line-height: 14px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.blackAlpha400};
  }

  &:focus {
    background-color: ${({ $selected }) => ($selected ? colors.brand : colors.blackAlpha100)};
    color: ${({ $selected }) => ($selected ? colors.whiteAlpha800 : colors.blackAlpha700)};
  }

  &:disabled {
    color: ${colors.blackAlpha400};
    cursor: default;
  }
  &:disabled:hover {
    border: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
`;

const BaseButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 24px;
  appearance: none;
  outline: none;
  border: none;

  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 9999vmax;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.3, 0.3, 0.3, 1);
  overflow: hidden;
  background-color: ${colors.white};
  color: ${colors.blackAlpha500};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }

  &:focus {
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }

  &:active {
    &:after {
      background-color: ${colors.blackAlpha100};
    }
  }
`;

const CancelButton = styled(BaseButton)``;

const SubmitButton = styled(BaseButton)``;
