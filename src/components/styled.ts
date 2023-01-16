import styled from 'styled-components';

interface TitleProps {
  weight?: string;
  size?: string;
  lineHeight?: string;
  color?: string;
  width?: string;
  margin?: string;
  textTransform?: string;
  textAlign?: string;
  transform?: string;
  position?: string;
  zIndex?: string;
  height?: string;
  opacity?: string;
  fontSize?: string;
  padding?: string;
  border?: string;
  background?: string;
  borderColor?: string;
  borderRadius?: string;
  row?: string;
  column?: string;
  display?: string;
  alignItems?: string;
}

export const Main = styled.main`
  padding-left: 18%;
  transition: padding 2s;
`;

export const Title = styled.h1<TitleProps>`
  font-weight: ${props => props.weight ? props.weight : 'bolder'};
  font-size: ${props => props.size ? props.size : '28px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : '42px'};
  color: ${props => props.color ? props.color : '#262626'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0'};
  align-self: center;
  text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
  text-align: ${props => props.textAlign ? props.textAlign : 'inherit'};
  transform: ${props => props.transform ? props.transform : 'none'};
  position: ${props => props.position ? props.position : 'static'};
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
`;

export const SubTitle = styled.h2<TitleProps>`
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  font-size: ${props => props.size ? props.size : '18px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : '27px'};
  color: ${props => props.color ? props.color : '#799283'};
  width: ${props => props.width ? props.width : 'fit-content'};
  margin: ${props => props.margin ? props.margin : '0'};
  text-align: ${props => props.textAlign ? props.textAlign : 'inherit'};
  transform: ${props => props.transform ? props.transform : 'none'};
  position: ${props => props.position ? props.position : 'static'};
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
  size: props.size || "1em",
  }))`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  padding: 14px 12px;
  border: 1px solid #799283;
  color: #799283;
  border-radius: 12px;
  font-size: 16px;
  margin: ${props => props.margin ? props.margin : '0 0 28px 0'};
  opacity: ${props => props.opacity ? props.opacity : '1'};
  &:invalid {
    color: red; 
    border-color: red;
  }
`;

export const TextArea = styled.textarea<TitleProps>`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  padding: 14px 12px;
  border: 1px solid #799283;
  color: #799283;
  border-radius: 12px;
  font-size: 16px;
  margin: ${props => props.margin ? props.margin : '0 0 28px 0'};
  opacity: ${props => props.opacity ? props.opacity : '1'};
  &:invalid {
    color: red; 
    border-color: red;
  }
`;

export const Button = styled.button<TitleProps>`
  font-weight: 500;
  font-size: ${props => props.fontSize ? props.fontSize : "16px"};
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : 'auto'};
  padding: ${props => props.padding ? props.padding : "15px 28px"};
  border: ${props => props.border ? props.border : "1px solid #135846"};
  border-radius: 12px;
  cursor: pointer;
  margin: ${props => props.margin ? props.margin : '0'};
  background: ${props => props.background ? props.background : "white"};
  color: ${props => props.color ? props.color : "#135846"};
  border-color: ${props => props.borderColor ? props.borderColor : "#135846"};
`;

export const Photo = styled.img<TitleProps>`
  width: ${props => props.width ? props.width : '80px'}; 
  border-radius: 8px; 
  margin: ${props => props.margin ? props.margin : '0'};
  height: ${props => props.height ? props.height : '0'};
`;

export const Etiqueta = styled.div<TitleProps>`
  width: ${props => props.width ? props.width : '125px'}; 
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-weight: normal;
  font-size: 16px;
  border-radius: 12px;
  background: ${props => {if (props.background == "Booked") {
    return "#E23428";
  } else if (props.background == "Available") {
    return "#5AD07A";
  } else  if (props.background == "Refund") {
    return "#FFEDEC";
  } else if (props.background == "Pending") {
    return "#E2E2E2";
  } else if (props.background == "Canceled") {
    return "#575757";
  } else if (props.background == "Active" || props.background == "Inactivce") {
    return "none";
  } else {
    return props.background;
  }}};
  padding: ${props => props.padding ? props.padding : "0"};
`;

export const Table = styled.section<TitleProps>`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  border-bottom: 2px solid #f5f5f5;
  display: grid;
  margin: 0 50px;
  padding: 20px 30px;
  grid-row-gap: 40px;
`;

export const Column = styled.div<TitleProps>`
  width: ${props => props.width ? props.width : 'auto'}; 
  border: ${props => props.border ? props.border : 'none'};
  grid-row: ${props => props.row ? props.row : 'none'};
  grid-column: ${props => props.column ? props.column : 'none'};
  display: ${props => props.display ? props.display : 'block'};
  align-items: ${props => props.alignItems ? props.alignItems : 'start'};
  margin: ${props => props.margin ? props.margin : '0'};
`;

export const PageCardDetail = styled.section`
    width: 50%;
    margin: 0 0 0 50px;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px 0 0 12px;
`;