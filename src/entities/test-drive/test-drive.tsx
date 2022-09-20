import { FC } from "react";
import { Stack } from "../../shared/components/stack/stack";
import Typography from "../../shared/components/typography/typography";

const TestDrive: FC = () => {
  return (
    <>
      <Stack className="items-center">
        <div className="flex-[1_0_50%]">
          <Typography className="mb-8" component="h2">
            Лучшее проверяется на практике
          </Typography>
          <Typography component="p">
            Время проверить, как антифриз Felix влияет на двигатель.
            Но не в лаборатории, а в суровых условиях российских дорог.
          </Typography>
          <Typography component="p">
            Вместе с Делимобиль и Машинаторами в течение 5 месяцев мы будем
            наблюдать, что происходит с 4 автомобилями каршеринга, в которые
            мы залили антифриз Felix и отправили на дороги Москвы
          </Typography>
        </div>

        <div className="flex-[1_0_50%]">67567</div>
      </Stack>
    </>
  );
};

export default TestDrive;
