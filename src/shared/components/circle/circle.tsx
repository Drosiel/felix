import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../interface";

interface ICircle extends IBaseElemet {
  size?: number;
  color?: string;
  outColor?: string;
  children: React.ReactNode;
}

export const Circle: FC<ICircle> = ({ size, color, outColor, children }) => {
  return (
    <div
      className={clsx(
        "flex",
        `h-[112px]`,
        `w-[112px]`,
        "bg-white",
        "rounded-full",
        "border-[3px]",
        "outline",
        "outline-offset-[8px]",
        `outline-primary`,
        `bg-primary`,
        "-translate-x-1/2",
        "-translate-y-1/2",
        "items-center",
        "justify-center"
      )}
    >
      {children}
    </div>
  );
};

Circle.defaultProps = {
  size: 112,
  color: "primary",
  outColor: "primary",
};
