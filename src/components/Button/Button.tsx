import { MouseEventHandler } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  className,
  handleClick,
  ...rest
}) => {
  return (
    <button className={`button ${className}`} {...rest} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;