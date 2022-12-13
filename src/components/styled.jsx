import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  color: #262626;
  width: 100%;
  margin: 0;
  margin-bottom: 21px
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #799283;
  width: fit-content;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#135846" : "white"};
  color: ${props => props.primary ? "white" : "#135846"};

  font-weight: 500;
  font-size: 16px;
  padding: 15px 28px;
  border: 1px solid #135846;
  border-radius: 12px;
  cursor: pointer;
`;