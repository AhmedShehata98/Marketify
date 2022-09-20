export const dynamicColor = (color) => {
  const inputColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue(color);
  return CheckColorSystem(inputColor.trim());
};

function CheckColorSystem(color) {
  if (color.toString().startsWith("#") && color.toString().length >= 6) {
    // hex color system
    return getLightnessFromRGB(convertHexToRgb(color));
  } else if (color.toString().startsWith("hsl")) {
    // hsl color system
    return getLightnessFromHSL(color);
  }
}

function convertHexToRgb(hexColor) {
  let RGB = [];
  //
  let r = parseInt(hexColor.substr(1, 2), 16);
  let g = parseInt(hexColor.substr(3, 2), 16);
  let b = parseInt(hexColor.substr(5, 2), 16);
  //
  RGB.push(r, g, b);
  return RGB;
}
function getLightnessFromHSL(hsl) {
  const lightnessAmount = hsl
    .split("hsl(")[1]
    .split(")")[0]
    .split(",")
    [hsl.split("hsl(")[1].split(")")[0].split(",").length - 1].trim();
  if (lightnessAmount >= "60%") {
    //color is lightness
    return "#111111";
  } else {
    //color is darken
    return "#f6f6f6";
  }
}
function getLightnessFromRGB(rgb) {
  let minValue = Math.min(...rgb);
  let maxValue = Math.max(...rgb);
  let avg = +(minValue + maxValue) / 2 / 255;
  let fixedAvg = +avg.toFixed(2);
  //
  if (fixedAvg >= 0.6) return "#000000";
  if (fixedAvg < 0.6) return "#ffffff";
}
