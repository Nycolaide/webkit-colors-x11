import { formatColorToHex, formatPropsKey } from './utils';

import colorHtml from './libs/colorHtml';
import colorX11 from './libs/colorX11';

export default function getColor(
  key: string,
  mode: 'rgb' | 'hex' = 'rgb',
  type: 'x11' | 'html' = 'html',
): string | undefined {
  const keyFormat = formatPropsKey(key);
  const colorMap = type === 'x11' ? colorX11 : colorHtml;

  if (colorMap.hasOwnProperty(keyFormat)) {
    const colorValue = colorMap[keyFormat];
    return mode === 'hex' ? formatColorToHex(colorValue) : colorValue;
  }

  return undefined;
}
