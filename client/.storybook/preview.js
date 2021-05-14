import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/react';

const customViewports = {
  iPhoneSE: {
    name: 'iPhone SE (1st generation)',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
});
