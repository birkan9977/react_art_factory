const handleScroll = (page, breakPoints) => {
  const {
    xl: extraLargeScreen,
    lg: largeScreen,
    md: mediumScreen,
    sm: smallScreen,
  } = breakPoints;

  const scrollFineTuning = {
    about: {
      xlarge: 200,
      large: 150,
      medium: 130,
      small: 100,
      default: 200,
    },
    about2: {
      large: 150,
      medium: 120,
      small: 110,
      default: 180,
    },
    services: {
      default: 80,
    },
    faq: {
      default: 90,
    },
    contact_us: {
      default: 80,
      small: 70,
    },
  };

  function refine(obj, page, size) {
    return obj[page].hasOwnProperty([size])
      ? obj[page][size]
      : obj[page]["default"];
  }

  let fineTunedValue = 0;
  switch (true) {
    case smallScreen:
      fineTunedValue = refine(scrollFineTuning, page, "small");
      break;
    case mediumScreen:
      fineTunedValue = refine(scrollFineTuning, page, "medium");
      break;
    case largeScreen:
      fineTunedValue = refine(scrollFineTuning, page, "large");
      break;
    case extraLargeScreen:
      fineTunedValue = refine(scrollFineTuning, page, "xlarge");
      break;
    default:
      fineTunedValue = scrollFineTuning[page].default;
  }
  return -1 * fineTunedValue;
};

export default handleScroll;
