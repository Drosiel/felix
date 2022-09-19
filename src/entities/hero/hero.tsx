import { FC } from "react";
import { Stack } from "../../shared/components/stack/stack";
import Typography from "../../shared/components/typography/typography";

const Hero: FC = () => {
  return (
    <>
      <Stack direction="col" className="items-center">
        <Typography component="h1" className="whitespace-nowrap">
          felix тест драйв
        </Typography>

        <Typography className="text-[2.2rem] whitespace-nowrap">
          150 дней нон-стоп испытаний на наших автомобилях
        </Typography>
      </Stack>
    </>
  );
};

export default Hero;
