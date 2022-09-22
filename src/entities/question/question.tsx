import { FC } from "react";
import { Button } from "../../shared/components/buttons/button";
import { Circle } from "../../shared/components/circle/circle";

const Question: FC = () => {
  return (
    <div>
      <div className="w-[860px] h-[264px] bg-white border-[1px] rounded-[10px] relative">
        <div className="absolute top-0 left-1/2 ">
          <Circle>QWERTY</Circle>
        </div>
      </div>
      <div className="flex px-8">
        <Button
          className="uppercase skew-x-[-16deg] mr-[26px] flex-1 "
          onClick={() => {}}
        >
          <div className="uppercase skew-x-[16deg]">правда</div>
        </Button>

        <Button className="uppercase skew-x-[-16deg] flex-1" onClick={() => {}}>
          <div className="uppercase skew-x-[16deg]">миф</div>
        </Button>
      </div>
    </div>
  );
};

export default Question;
