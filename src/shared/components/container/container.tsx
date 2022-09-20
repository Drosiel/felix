import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../interface";

interface IContainer extends IBaseElemet {
  children: React.ReactNode;
}

export const Container: FC<IContainer> = ({ children, className }) => {
  return <div className="p-8">{children}</div>;
};
