import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: ${props => props.weight ? props.weight : 'bolder'};
  font-size: ${props => props.size ? props.size : '28px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : '42px'};
  color: ${props => props.color ? props.color : '#262626'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0'};
  align-self: center;
  text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
`;

export const SubTitle = styled.h2`
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  font-size: ${props => props.size ? props.size : '18px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : '27px'};
  color: ${props => props.color ? props.color : '#799283'};
  width: ${props => props.width ? props.width : 'fit-content'};
  margin: ${props => props.margin ? props.margin : '0'};
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  padding: 15px 28px;
  border: 1px solid #135846;
  border-radius: 12px;
  cursor: pointer;

  background: ${props => props.background ? props.background : "white"};
  color: ${props => props.color ? props.color : "#135846"};
  border-color: ${props => props.borderColor ? props.borderColor : "#135846"};
`;

export const Photo = styled.img`
  width: ${props => props.width ? props.width : '80px'}; 
  border-radius: 8px; 
  margin: ${props => props.margin ? props.margin : '0'};
  height: ${props => props.height ? props.height : '0'};
`;


export const Etiqueta = styled.div`
width: ${props => props.width ? props.width : '125px'}; 
font-weight: normal;
font-size: 16px;
border-radius: 12px;
background: ${props => props.background == "Available" ? "#5AD07A" : "#E23428" };
padding: ${props => props.padding ? props.padding : "0"};
`;