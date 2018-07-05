// @flow

type HexColor = string;
type RgbColor = number[];

const interpolateColor = (from: HexColor, to: HexColor, progress: number): HexColor => {
  const fromRgb = hexToRgb(from);
  const toRgb = hexToRgb(to);

  const components: RgbColor = [0,1,2].reduce((acc, cur) => (
    [...acc, fromRgb[cur] + Math.floor((toRgb[cur] - fromRgb[cur]) * progress)]
  ), []);

  return rgbToHex(components);
};

const hexToRgb = (code: HexColor): RgbColor => {
  const num = code.replace('#', '');

  const red = parseInt(num.substring(0, 2), 16);
  const green = parseInt(num.substring(2, 4), 16);
  const blue = parseInt(num.substring(4, 6), 16);

  return [red, green, blue];
};

const rgbToHex = (components: RgbColor): HexColor => {
  const num = components
    .map(c => c.toString(16).padStart(2, '0'))
    .join('');

  return `#${num}`;
};

export default interpolateColor;
