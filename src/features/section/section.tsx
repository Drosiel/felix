import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../../shared/components/interface";

interface ISection extends IBaseElemet {
  children: React.ReactNode;
}
const Section: FC<ISection> = ({ children, className }) => {
  return (
    <section className={clsx("min-h-screen", className && className)}>
      {children}
    </section>
  );
};

export default Section;
