declare module '*.jpg';
declare module '*.jpeg';

declare module 'src/resources/*.jpg' {
  const value: any;
  export = value;
}

declare global {
  const d3: typeof _d3;
}

export interface CountAction {
  type: string;
  payload: {
    user: string
    email: string
  };
}

export interface State {
  isAuthenticated: boolean
  user: string
  email: string
};

export interface LoginContextType {
  state: {
    isAuthenticated: boolean
    user: string
    email: string
  }
  dispatch: (CountAction) => void
};

export interface Room {
  idHabitacion: string
  foto: string[]
  numeroHabitacion: string
  roomType: string
  amenities: string
  price: number
  offerPercent: number
  status: string
}

export interface SelectionInfo {
  start: Date
  end: Date
  startStr: string
  endStr: string
  allDay: boolean
  jsEvent: unknown
  view: unknown
  resource: unknown
}

export interface TitleProps {
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