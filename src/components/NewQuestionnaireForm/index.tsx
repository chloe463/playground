"use client";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { CreateQuestionnaireInput } from "../../__generated__/types";
import { Datepicker, PrimaryButton, TextArea, TextField } from "../../lib";
import { submitAction } from "./submitAction";

export const NewQuestionnaireForm: React.FC = () => {
  const { formState, control, watch } = useForm<CreateQuestionnaireInput>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      startAt: new Date(),
      endAt: new Date(),
    },
  });
  const { isDirty, isValid } = formState;

  return (
    <div className="py-0 px-6">
      <form action={submitAction}>
        <div className="w-[720px]">
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
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
        </div>
        <div className="mt-8 w-[720px]">
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
        </div>
        <div className="mt-8 w-[720px]">
          <Controller
            name="startAt"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <Datepicker
                  id="start-at-date-picker"
                  name="startAt"
                  placeholder={"Date"}
                  value={value}
                  min={"2021/05/15"}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </div>
        <div className="mt-8 w-[720px]">
          <Controller
            name="endAt"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              const startAt = watch("startAt");
              return (
                <Datepicker
                  id="end-at-date-picker"
                  name="endAt"
                  placeholder={"Date"}
                  value={value}
                  min={
                    startAt
                      ? dayjs(startAt).subtract(1, "day").toDate()
                      : dayjs().subtract(1, "day").toDate()
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </div>
        <div className="flex justify-center mt-12">
          <PrimaryButton type="submit" style={{ width: "136px" }} disabled={!isValid || !isDirty}>
            Submit
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};
