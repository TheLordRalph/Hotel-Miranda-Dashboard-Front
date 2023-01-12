import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './styled';

test("a", () => {

    render(
      <Button />
    );

    // expect(style.background).toBe('white')
});