/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */

import React from 'react';

export default {
  title: 'Example/AccesibleButton',
};

// eslint-disable-next-line react/button-has-type
export const accessible = () => <button>Accessible button</button>;

export const inaccessible = () => (
  // eslint-disable-next-line react/button-has-type
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);
