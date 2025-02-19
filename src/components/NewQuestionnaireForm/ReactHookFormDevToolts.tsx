"use client";
import { DevTool } from "@hookform/devtools";
import type { Control } from "react-hook-form";

import React from "react";
import { IS_SERVER } from "../../common/isServer";
import { CreateQuestionnaireInput } from "../../__generated__/types";

interface Props {
  control: Control<CreateQuestionnaireInput>;
};


export const ReactHookFormDevTools: React.FC<Props> = ({ control }) => {
  if (process.env.NODE_ENV === "production") return null;
  if (IS_SERVER) return null;
  return (
    <>
      <DevTool control={control} placement="top-right" />
    </>
  );
}
