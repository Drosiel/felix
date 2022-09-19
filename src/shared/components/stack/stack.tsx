import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../interface";

interface IStack extends IBaseElemet {
  direction?: "row" | "col";
  wrap?: boolean;
  children: React.ReactNode;
  gap?: number;
}

export const Stack: FC<IStack> = ({
  children,
  className,
  direction,
  wrap,
  gap,
}) => {
  return (
    <div
      className={clsx(
        "flex",
        `flex-${direction}`,
        wrap && "flex-wrap",
        `gap-${gap}`,
        className && className
      )}
    >
      {children}
    </div>
  );
};

Stack.defaultProps = {
  direction: "row",
  wrap: false,
  gap: 2,
};
