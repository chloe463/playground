import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { Checkbox, CheckboxGroup } from "../../lib/components/Checkbox";
import { Datepicker } from "../../lib/components/Datepicker";
import { Dropdown } from "../../lib/components/Dropdown";
import { Radio, RadioGroup } from "../../lib/components/Radio";
import { TextArea } from "../../lib/components/TextArea";
import { TextField } from "../../lib/components/TextField";
import { colors } from "../../lib/styles";

export const NewQuestionnaireForm: React.VFC = () => {
  const { handleSubmit, control, watch, formState } = useForm({
    defaultValues: {
      title: "",
      description: "",
      dropdown: "",
      startAt: new Date(),
      endAt: new Date(),
      "radio-group": "",
      "checkbox-group": [],
    }
  });
  const onSubmit = (data: any) =>{
    console.log({ data, formState: formState.touchedFields });
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
      {process.env.NODE_ENV !== "production" && (
        <DevTool control={control} placement="top-right" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Controller
            name="title"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <TextField
                  id="title"
                  label={"Title"}
                  name="title"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="description"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <TextArea
                  id="description"
                  label={"Description"}
                  name="description"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="dropdown"
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;
              return (
                <Dropdown
                  placeholder={"Dropdown"}
                  options={options}
                  value={value}
                  itemToString={(v) => v}
                  onChange={onChange}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="startAt"
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;
              return (
                <Datepicker
                  id="start-at-date-picker"
                  name="startAt"
                  placeholder={"Date"}
                  value={value}
                  min={"2021/05/15"}
                  onChange={onChange}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="endAt"
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;
              const startAt = watch("startAt");
              return (
                <Datepicker
                  id="end-at-date-picker"
                  name="startAt"
                  placeholder={"Date"}
                  value={value}
                  min={startAt ? dayjs(startAt).subtract(1, "day").toDate() : dayjs().subtract(1, "day").toDate()}
                  onChange={onChange}
                  disabled
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="radio-group"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <RadioGroupOuter>
                  <RadioGroup label={"RadioGroup"} name={"radio-group"} value={value} onChange={onChange}>
                    <RadioGroupInner>
                      {["Option1", "Option2", "Option3", "Option4"].map((v, i) => {
                        return (
                          <RadioWrapper key={v}>
                            <Radio value={v} isDisabled={i===3} onBlur={onBlur}>
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
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="checkbox-group"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <RadioGroupOuter>
                  <CheckboxGroup label={"CheckboxGroup"} value={value} onChange={onChange}>
                    <RadioGroupInner>
                      {["Option1", "Option2", "Option3", "Option4"].map((v, i) => {
                        return (
                          <RadioWrapper key={v}>
                            <Checkbox value={v} isDisabled={i===3} name={v} onBlur={onBlur}>
                              <RadioLabel $disabled={i===3}>
                                {v}
                              </RadioLabel>
                            </Checkbox>
                          </RadioWrapper>
                        );
                      })}
                    </RadioGroupInner>
                  </CheckboxGroup>
                </RadioGroupOuter>
              );
            }}
          />
        </Field>
        <Field>
          <button type="submit">submit</button>
        </Field>
      </form>
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
