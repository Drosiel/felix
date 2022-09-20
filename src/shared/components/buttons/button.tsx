import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../interface";

export interface IButton extends IBaseElemet {
  onClick: () => void;
  size?: "small" | "normal" | "big";
  children: React.ReactNode;
  variant?: "primary" | "secodary";
}

export const Button: FC<IButton> = ({
  children,
  onClick,
  size,
  className,
  variant,
}) => {
  return (
    <button
      className={clsx(
        className,
        `bg-${variant}`,
        "border",
        "px-[46px]",
        "py-[33px]",
        "border-primary",
        `text-${variant === "primary" ? "secodary" : "primary"}`
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};
