import { FC } from "react";
import { Button } from "../../shared/components/buttons/button";
import { Container } from "../../shared/components/container/container";
import { Stack } from "../../shared/components/stack/stack";
import Typography from "../../shared/components/typography/typography";

const BUTTON_WIDTH = 136;

const Hero: FC = () => {
  return (
    <Container>
      <Stack direction="col" className="items-center">
        <Typography component="h1" className="whitespace-nowrap uppercase">
          <span className="text-primary">felix</span> тест-драйв
        </Typography>

        <Typography className="text-[2.2rem] whitespace-nowrap">
          150 дней нон-стоп испытаний на наших автомобилях
        </Typography>
      </Stack>

      <Stack className="items-center">
        <div>1</div>
        <div>2</div>
      </Stack>

      <Stack
        className={`absolute bottom-0 left-[calc(50%-${BUTTON_WIDTH}px/2)] items-center`}
        gap={7}
      >
        <button
          className={`-skew-x-6 bg-secodary w-[${BUTTON_WIDTH}px] h-[186px]`}
          onClick={() => {}}
        >
          123
        </button>

        <Typography className="text-[1.47rem]">
          Проверь знания, получи призы
        </Typography>
      </Stack>
    </Container>
  );
};

export default Hero;
