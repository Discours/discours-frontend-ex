import {
  Breakpoint,
  BreakpointRules,
  is as isPure,
  up as upPure,
} from "src/utils/breakpoints";
import { breakpoints } from "./breakpoints.orig";

export const up = upPure(breakpoints);
export const is = isPure(breakpoints);

export { breakpoints, Breakpoint, BreakpointRules };
