import { FC } from "react";
import { IBaseElemet } from "../interface";

export interface IButton extends IBaseElemet {
  onClick: () => void;
  size?: "small" | "normal" | "big";
  children: React.ReactNode;
}

export const Button: FC<IButton> = ({ children, onClick, size }) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
};
