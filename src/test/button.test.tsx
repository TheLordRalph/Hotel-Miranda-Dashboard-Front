import React from 'react'

import { render, screen } from '@testing-library/react'
import { Button } from '../components/styled';


test("Test componente Button", () => {
    const color = '#000000';
    render(
      <Button background={color}>
        {"Hola Mundo"}
      </Button>
    );

    expect(screen.getByRole('button')).toHaveStyle("background: #000000")
    expect(screen.getByRole('button')).not.toHaveStyle("background: white")
    expect(screen.getByRole('button')).toHaveTextContent("Hola Mundo")
  });