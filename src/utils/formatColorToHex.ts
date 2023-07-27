export function formatColorToHex(rgb: string) {
  const rgbValues = rgb.split(',').map((value) => parseInt(value.trim(), 10));
  const hexValues = rgbValues.map((value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  });
  return '#' + hexValues.join('').toUpperCase();
}
