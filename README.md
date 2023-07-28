<p align="center">
  <img src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-X11/x11colors_logo.png" height="128">
  <h1 align="center">WebKit Colors X11</h1>
</p>

<p align="center">
  <a aria-label="Follow Minedelve on Github" href="https://github.com/minedelve" target="_blank">
    <img alt="Minedelve Github" src="https://img.shields.io/badge/Follow%20@Minedelve-black.svg?style=for-the-badge&logo=Github">
  </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/bVWvfuhemP" target="_blank">
    <img alt="Minedelve Discord" src="https://img.shields.io/badge/Join%20the%20community-black.svg?style=for-the-badge&logo=Discord">
  </a>
    <a aria-label="Explore Webkit Colors X11 Package" href="https://www.npmjs.com/package/@minedelve/webkit-colors-x11" target="_blank">
    <img alt="" src="https://img.shields.io/badge/Minedelve-WebkitcolorsX11-black.svg?style=for-the-badge&logo=NPM">
  </a>
</p>

Webkit colors X11 is a package that allows you to retrieve any standard X11 or X11 color adapted to HTML/CSS in RGB or Hexadecimal format. It aims to be simple, fast and supports all JS frameworks as well as Vanilla.

<img width="1012" alt="github-banner" src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-X11/webkit-colors-x11-cover.png">

[![DDL_ALL](https://img.shields.io/npm/dt/@minedelve/webkit-colors-x11.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-x11)&nbsp;
[![DDL_MONTHS](https://img.shields.io/npm/dm/@minedelve/webkit-colors-x11.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-x11)&nbsp;
[![LICENSE](https://img.shields.io/npm/l/@minedelve/webkit-colors-x11.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-x11)&nbsp;
[![VERSION_X11COLOR](https://img.shields.io/npm/v/@minedelve/webkit-colors-x11.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-x11)&nbsp;
[![DISCORD_BADGE](https://img.shields.io/discord/1093887038991896717?color=5865F2&label=Discord&logo=discord&logoColor=white&style=flat-square)](https://discord.gg/bVWvfuhemP)

## Table of Contents

- [Installation](#installation)
- [Use](#use)
- [Core Team](#core-team)
- [License](#license)

## Installation

```
yarn add webkit-colors-x11 -D
```

```
npm install webkit-colors-x11 --save-dev
```

## Use

```js
import getColor from "webkit-colors-x11";

[...]

const color = getColor('red', 'hex', 'x11');
// return color red to x11 on hexadecimal value.

const color = getColor('red');
// return color red to html on rgb.

const color = getColor('red', 'hex');
// return color red to html on hexadecimal.

const color = getColor('red', undefined, 'x11');
// return color red to x11 on rgb.
```

## Core Team

[Laurent Grimaldi](https://github.com/laustrasza)

## License

Licensed under the [MIT license](https://github.com/minedelve/webkit-colors-x11/blob/main/LICENSE.md).

Copyright © 2021-2023 [Minedelve](https://minedelve.com)

## We support these projects

<table>
  <tr>
    <td align="center">
      <a href="https://humanstxt.org/">
        <img src="https://user-images.githubusercontent.com/62988176/209962360-048f7199-49dc-4385-9469-d0af6b4a8ea9.png" height="75">
        <p>Human.txt</p>
      </a>
    </td>
  </tr>
</table>
