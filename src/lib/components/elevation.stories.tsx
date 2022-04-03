import React from "react";
import styled from "styled-components";
import { getElevation } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/elevation",
};

export const ElevationSamples = () => {
  return (
    <div className="flex flex-col space-y-8">
      {Array.from({ length: 41 }).map((_, i) => {
        return (
          <Card key={i} elevation={i} >
            Elevation {i}
          </Card>
        );
      })}
    </div>
  )
};

const Card = styled.div<{ elevation: number }>`
  display: grid;
  place-items: center;
  width: 320px;
  height: 64px;
  border-radius: 4px;
  box-shadow: ${({ elevation }) => getElevation(elevation)};
`;
