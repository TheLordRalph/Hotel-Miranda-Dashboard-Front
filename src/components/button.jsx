import React from 'react'
import styled from 'styled-components';

const StyleButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#135846" : "white"};
  color: ${props => props.primary ? "white" : "#135846"};

  font-weight: 500;
  font-size: 16px;
  margin: auto;
  padding: 15px 28px;
  border: 1px solid #135846;
  border-radius: 12px;
`;

export const Button = (prop) => {

    return (
        <StyleButton />
    )
}
