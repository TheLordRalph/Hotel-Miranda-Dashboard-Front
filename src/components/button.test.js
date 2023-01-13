import React from 'react';
import 'jest-dom/extend-expect';

import { render, cleanup } from 'react-testing-library';
import { Button } from './styled';

afterEach(cleanup)

test('Change color prop', () => {
  render(
    <div>
      <Button />
    </div>
  )

  const buttonClass = Button().type.styledComponentId;
  const documentButton = document.getElementsByClassName(buttonClass);
  const style = window.getComputedStyle(documentButton[0]);

  expect(style.background).toBe('white');
})