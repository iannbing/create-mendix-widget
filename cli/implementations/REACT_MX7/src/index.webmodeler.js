import React from 'react';

import Counter from './components/Counter';
import styleAsString from './style/style.scss';

/**
 * This file is to define how your widget is shown in
 *  - Studio Pro: Design Mode (Mendix 8) / View Mode (Mendix 7)
 *  - Studio
 *
 * You need to export `preview` as a normal React component.
 * NOTE: it has to be lower-case, named export.
 *
 * It's better that `preview` is only a dumb component,
 * because the whole purpose of this file is to show "HOW IT LOOKS".
 *
 * To inject css for your `preview`, export another named function `getPreviewCss`
 * This function should return compiled css as string.
 * We use `@researchgate/babel-plugin-transform-scss-import-to-string`
 * so we can just import our scss as string.
 */

export const preview = () => <Counter />;

export function getPreviewCss() {
  return styleAsString;
}
