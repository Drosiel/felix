import clsx from "clsx";
import { createElement, FC } from "react";

interface ITypography {
  component?: "span" | "p" | "h1" | "h2" | "h5";
  className?: string;
  children: React.ReactNode;
}

const Typography: FC<ITypography> = ({ children, component, className }) => {
  return createElement(
    component || "span",
    {
      ...(className && { className: clsx({ [className]: className }) }),
    },
    children
  );
};

Typography.defaultProps = {
  component: "span",
  className: undefined,
};

export default Typography;
