const sizes = {
  small: 540,
  medium: 768,
  large: 960,
  xLarge: 1140,
};

export const breakpoints = {
  minMobile: `min-width :${sizes.small}px`,
  miTabletS: `min-width :${sizes.medium}px`,
  minTabletL: `min-width :${sizes.large}px`,
  minPCL: `min-width :${sizes.large}px`,
  minPCXL: `min-width :${sizes.xLarge}px`,
  minTabletXL: `min-width :${sizes.xLarge}px`,
  //
  maxMobile: `max-width :${sizes.small}px`,
  maxabletS: `max-width :${sizes.medium}px`,
  maxTabletL: `max-width :${sizes.large}px`,
  maxPCL: `max-width :${sizes.large}px`,
  maxTabletXL: `max-width :${sizes.xLarge}px`,
};
