export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export type BreakpointRules = { [key in Breakpoint]: number };

export const is = (breakpoints: BreakpointRules) => (
  breakpointsToMatch: Breakpoint[],
  width: number,
) => {
  const widths = Object.values(breakpoints).sort((a, b) => a - b);
  for (const breakpoint of breakpointsToMatch) {
    const breakpointMin = breakpoints[breakpoint];
    const breakpointMax = widths.find((v) => v > breakpointMin) || Infinity;

    if (width >= breakpointMin && width < breakpointMax) {
      return true;
    }
  }
  return false;
};

export const up = (breakpoints: BreakpointRules) => (
  breakpoint: Breakpoint,
  width: number,
) => {
  const breakpointMin = breakpoints[breakpoint];

  return width >= breakpointMin;
};
