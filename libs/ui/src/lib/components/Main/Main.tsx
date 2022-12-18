import { ReactNode } from 'react';
import './Main.scss';


export const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default Main;
