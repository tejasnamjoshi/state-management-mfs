import { DetailsHTMLAttributes } from 'react';
import './Button.scss';

export const Button = ({
  children,
  ...rest
}: DetailsHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="Button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
