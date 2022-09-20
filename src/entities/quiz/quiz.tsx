import { FC } from "react";
import { Button } from "../../shared/components/buttons/button";
import { Stack } from "../../shared/components/stack/stack";
import Typography from "../../shared/components/typography/typography";

const Quiz: FC = () => {
  return (
    <Stack>
      <div className="flex-[1_0_50%]">123</div>

      <div className="flex-[1_0_50%] p-20">
        <Typography className="text-primary" component="h2">
          правда или миф?
        </Typography>

        <Typography className="text-primary" component="h5">
          Проверь свои знания об автомобиле
        </Typography>
        <Typography className="text-primary" component="p">
          Мир авто полон мифов и легенд. Проверь, сможешь ли ты отличить
          правдивые факты от мифов и выиграй промокод на 1 000 баллов
          в каршеринге Делимобиль!
        </Typography>

        <Stack>
          <Button onClick={() => {}}>испытать себя</Button>
          <Button variant="secodary" onClick={() => {}}>
            Рейтинг участников
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Quiz;
