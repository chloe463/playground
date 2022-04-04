import { useEffect, useLayoutEffect } from "react";
import { IS_SERVER } from "../../common/isServer";

export const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;
