/**
 * webkit-colors-x11
 * @description Kit for get colors rgb or hex to standard X11.
 *
 * @company Minedelve
 * @package webkit-colors-x11
 * @author Laurent Grimaldi <laurent.grimaldi@minedelve.com>
 * @repository https://github.com/minedelve/webkit-colors-x11
 * @copyright (c) 2023 Minedelve
 */

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
