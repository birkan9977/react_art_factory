//bootstrap breakpoints
export default function breakPoints(width) {
  const breakpoints = {
    xl: width <= 1200,
    lg: width <= 992,
    md: width <= 768,
    sm: width <= 576,
  };

  return breakpoints;
}
