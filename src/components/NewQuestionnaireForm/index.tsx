import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Datepicker } from "../../lib/components/Datepicker";
import { Dropdown } from "../../lib/components/Dropdown";
import { Radio, RadioGroup } from "../../lib/components/Radio";
import { TextArea } from "../../lib/components/TextArea";
import { TextField } from "../../lib/components/TextField";
import { colors } from "../../lib/styles";

export const NewQuestionnaireForm: React.VFC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [startAt, setStartAt] = useState<Date>(new Date());
  const [endAt, setEndAt] = useState<Date>(new Date());

  const onChangeTitle = (s: string) => {
    setTitle(s);
  };

  const onChangeDescription = (s: string) => {
    setDescription(s);
  };

  const onChangeState = (v: string) => {
    setState(v);
  };

  const onChangeStartAt = useCallback((v: Date | null) => {
    if (!v) {
      return;
    }
    setStartAt(v);
    if (dayjs(v) > dayjs(endAt)) {
      setEndAt(v);
    }
  }, [endAt]);
  const onChangeEndAt = (v: Date | null) => {
    if (!v) {
      return;
    }
    setEndAt(v);
  };

  const options = [
    "Option1",
    "Option2",
    "Option3",
    "Option4",
    "Option5",
    "Option6",
    "Option7",
    "Option8",
    "Option9",
    "Option10",
    "Option11",
    "Option12",
    "Option13",
    "Option14",
    "Option15",
  ];

  return (
    <Base>
      <Field>
        <TextField
          id="title"
          label={"Title"}
          name="title"
          value={title}
          autoComplete="off"
          onChange={onChangeTitle}
        />
      </Field>
      <Field>
        <TextArea
          id="description"
          label={"Description"}
          name="description"
          value={description}
          onChange={onChangeDescription}
        />
      </Field>
      <Field>
        <Dropdown
          placeholder={"Dropdown"}
          options={options}
          value={state}
          itemToString={(v) => v}
          onChange={onChangeState}
        />
      </Field>
      <Field>
        <Datepicker
          id="start-at-date-picker"
          name="startAt"
          placeholder={"Date"}
          value={startAt}
          min={"2021/05/15"}
          onChange={onChangeStartAt}
        />
      </Field>
      <Field>
        <Datepicker
          id="end-at-date-picker"
          name="startAt"
          placeholder={"Date"}
          value={endAt}
          min={startAt ? dayjs(startAt).subtract(1, "day").toDate() : dayjs().subtract(1, "day").toDate()}
          onChange={onChangeEndAt}
          disabled
        />
      </Field>
      <Field>
        <RadioGroupOuter>
          <RadioGroup label={"RadioGroup"} name={"radio-group"}>
            <RadioGroupInner>
              {["Option1", "Option2", "Option3", "Option4"].map((v, i) => {
                return (
                  <RadioWrapper key={v}>
                    <Radio value={v} isDisabled={i===3}>
                      <RadioLabel $disabled={i===3}>
                        {v}
                      </RadioLabel>
                    </Radio>
                  </RadioWrapper>
                );
              })}
            </RadioGroupInner>
          </RadioGroup>
        </RadioGroupOuter>
      </Field>
    </Base>
  );
};

const Base = styled.div`
  padding: 0 24px;
`;

const Field = styled.div`
  width: 480px;
  & + & {
    margin-top: 32px;
  }
`;

const RadioGroupOuter = styled.div`
  padding: 0 16px;
`;

const RadioGroupInner = styled.div`
  margin-top: 16px;
`;

const RadioWrapper = styled.div`
  display: inline-block;
  & + & {
    margin-left: 16px;
  }
`;

const RadioLabel = styled.span<{ $disabled?: boolean }>`
  margin-left: 4px;
  color: ${({ $disabled }) => $disabled ? colors.blackAlpha400 : colors.blackAlpha800};
`;
