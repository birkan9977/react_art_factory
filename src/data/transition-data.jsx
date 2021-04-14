export default function transitionFixedData(breakPoints) {
  const {
    xl: extraLargeScreen,
    lg: largeScreen,
    md: mediumScreen,
    sm: smallScreen,
  } = breakPoints;

  const transitionData = {
    default: {
      bannerEnd: 400,
      aboutStart: 250,
      about2Start: 900,
      fixedNavBarStart: 400,
    },
    xl: {
      bannerEnd: 500,
      aboutStart: 250,
      about2Start: 1000,
      fixedNavBarStart: 400,
    },
    lg: {
      bannerEnd: 700,
      aboutStart: 250,
      about2Start: 1700,
      fixedNavBarStart: 500,
    },
    md: {
      bannerEnd: 600,
      aboutStart: 200,
      about2Start: 1750,
      fixedNavBarStart: 500,
    },
    sm: {
      bannerEnd: 700,
      aboutStart: 150,
      about2Start: 1800,
      fixedNavBarStart: 500,
    },
  };
  let newTransitionData = transitionData.default;
  switch (true) {
    case smallScreen:
      newTransitionData = transitionData.sm;
      break;
    case mediumScreen:
      newTransitionData = transitionData.md;
      break;
    case largeScreen:
      newTransitionData = transitionData.lg;
      break;
    case extraLargeScreen:
      newTransitionData = transitionData.xl;
      break;
    default:
      newTransitionData = transitionData.default;
  }
  return newTransitionData;
}
