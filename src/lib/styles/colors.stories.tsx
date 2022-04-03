import React from "react";
import styled from "styled-components";
import { colors } from "./colors";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/colors",
};

export const ColorSamples = () => {
  return (
    <div className="flex flex-col space-y-8">
      {Object.entries(colors).map(([key, color]) => {
        const matched = key.match(/([\d]+)$/);
        const n = Number(matched?.[0]);
        const invertColor = !key.startsWith("white") && Number(n) >= 500;
        return (
          <Card key={key} bg={color} invertColor={invertColor}>
            {key}
          </Card>
        );
      })}
    </div>
  );
};

const Card = styled.div<{ bg: string; invertColor: boolean }>`
  display: grid;
  place-items: center;
  width: 320px;
  height: 64px;
  border-radius: 4px;
  background-color: ${({ bg }) => bg};
  color: ${({ invertColor }) => (invertColor ? colors.white : colors.blackAlpha800)};
`;
