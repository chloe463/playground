import dayjs from "dayjs";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles";

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
  "December"
];

const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
type PickingTarget = "DATE" | "YEAR_MONTH";

type CalendarProp = {
  placeholder?: string;
  baseRef: React.MutableRefObject<HTMLDivElement | null>;
  onSelectDate?: (d: Date) => void;
};

export const Calendar: React.VFC<CalendarProp > = ({
  placeholder,
  baseRef,
  onSelectDate,
}) => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const yearGridRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState(new Date());
  const [picking, setPicking] = useState<PickingTarget>("DATE");

  useLayoutEffect(() => {
    if (baseRef.current && calendarRef.current) {
      const { x, y, height } = baseRef.current.getBoundingClientRect();
      calendarRef.current.style.position = "fixed";
      calendarRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
      window.requestAnimationFrame(() => {
        if (calendarRef.current) {
          calendarRef.current.style.transform = `translate(${x}px, ${y + height - 16}px)`;
        }
        window.requestAnimationFrame(() => {
          if (calendarRef.current) {
            calendarRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
            calendarRef.current.style.transitionProperty = "transform";
            calendarRef.current.style.transitionDuration = "180ms";
          }
        })
      });
    }
  }, [baseRef, calendarRef]);

  useLayoutEffect(() => {
    if (picking === "YEAR_MONTH" && yearGridRef.current) {
      const selectedYearDOM = Array.from(yearGridRef.current.children).find((v) => (v as HTMLButtonElement).dataset["selected"] === "true");
      if (selectedYearDOM) {
        selectedYearDOM.scrollIntoView({ block: "center" });
      }
    }
  }, [yearGridRef, picking]);

  const daysInMonth = useMemo(() => {
    return dayjs(innerValue).daysInMonth();
  }, [innerValue]);

  const emptyCells = useMemo(() => {
    const firstDay = dayjs(innerValue).set("date", 1).get('day');
    return Array.from({ length: firstDay }, (_, i) => i);
  }, [innerValue]);

  const days = useMemo(() => {
    const formattedToday = dayjs().format("YYYY-MM-DD");
    const selectedDate = dayjs(innerValue).format("YYYY-MM-DD");
    return Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
      const fullDate = dayjs(innerValue).set("date", d).format("YYYY-MM-DD");
      return {
        date: d,
        fullDate,
        isToday: formattedToday === fullDate,
        selected: selectedDate === fullDate,
      }
    });
  }, [daysInMonth, innerValue]);

  const years = useMemo(() => {
    const thisYear = new Date().getFullYear(); 
    return Array.from({ length: 200 }, (_, i) => i + 1900).map((year) => {
      return {
        year,
        thisYear: thisYear === year,
        selected: innerValue.getFullYear() === year,
      }
    });
  }, [innerValue]);

  const nextMonthDates = useMemo(() => {
    const lastDay = dayjs(innerValue).set("date", 1).add(1, "month").subtract(1, "day").get("day");
    return Array.from({ length: 6 - lastDay }, (_, i) => i + 1);
  }, [innerValue]);

  const onClickChevronLeft = () => {
    setInnerValue((current) => {
      return dayjs(current).subtract(1, "month").toDate();
    });
  };

  const onClickChevronRight = () => {
    setInnerValue((current) => {
      return dayjs(current).add(1, "month").toDate();
    });
  };

  const onClickDateCell = (d: number) => {
    const next = new Date(innerValue.setDate(d));
    setInnerValue(next);
    onSelectDate?.(next);
  };

  const onClickYearCell = (year: number) => {
    const next = new Date(innerValue.setFullYear(year));
    setInnerValue(next);
    setPicking("DATE");
    onSelectDate?.(next);
  }

  return (
    <CalendarBase ref={calendarRef}>
      <Header>
        <HeaderLeft>
          <YearMonth>
            {MONTHS[innerValue.getMonth()]} {innerValue.getFullYear()}
          </YearMonth>
          <IconButton
            type="button"
            onClick={() => setPicking((current) => current === "YEAR_MONTH" ? "DATE" : "YEAR_MONTH")}
          >
            <TriangleDown />
          </IconButton>
        </HeaderLeft>
        {picking === "DATE" && (
          <HeaderRight>
            <IconButton type="button" onClick={() => onClickChevronLeft()}>
              <ChevronLeft />
            </IconButton>
            <IconButton type="button" onClick={() => onClickChevronRight()}>
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
                return (
                  <span key={`${day}--${idx}`}>
                    {day}
                  </span>
                );
              })}
            </WeekDays>
            <DaysGrid>
              {emptyCells.map((i) => {
                return (
                  <span key={i} />
                );
              })}
              {days.map(({ date, isToday, selected }) => {
                return (
                  <DateCell
                    type="button"
                    key={date}
                    $today={isToday}
                    $selected={selected}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onClickDateCell(date)
                    }}
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
              {years.map(({ thisYear, year, selected }) => {
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
      </Footer>
    </CalendarBase>
  );
};

const CalendarBase = styled.div`
  display: block;
  width: 256px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
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

const YearMonth = styled.p`
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
  color: ${colors.blackAlpha400};
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-template-rows: repeat(6, 32px);
  place-items: center;
  margin: 8px 16px;
  text-align: center;
`;

const DateCell = styled.button<{ $today: boolean, $selected: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  background-color: ${({ $selected }) => $selected ? colors.brand : "transparent" };
  display: block;
  margin: 2px;
  padding: 0;
  width: 28px;
  height: 28px;
  border: ${({ $today }) => $today ? `1px solid ${colors.brand}` : `none`};
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $selected }) => $selected ? colors.whiteAlpha800 : colors.blackAlpha500};
  line-height: 14px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.blackAlpha400};
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

const YearCell = styled.button<{ $thisYear: boolean, $selected: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  background-color: ${({ $selected }) => $selected ? colors.brand : "transparent" };
  display: block;
  margin: 2px;
  padding: 0;
  width: 52px;
  height: 28px;
  border: ${({ $thisYear}) => $thisYear ? `1px solid ${colors.brand}` : `none`};
  border-radius: 9999vmax;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $selected }) => $selected ? colors.whiteAlpha800 : colors.blackAlpha500};
  line-height: 14px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.blackAlpha400};
  }

  &:disabled {
    color: ${colors.blackAlpha400};
    cursor: default;
  }
  &:disabled:hover {
    border: none;
  }
`;


const Footer = styled.footer``;
