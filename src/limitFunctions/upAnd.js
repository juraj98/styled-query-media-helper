export default function upAnd(breakpoints, breakpointName) {
  let foundRuleBreakpoint = false;

  const correctBreakpoints = breakpoints.filter(breakpoint => {
    if (breakpoint.name === breakpointName) foundRuleBreakpoint = true;
    return foundRuleBreakpoint;
  });

  return correctBreakpoints;
}