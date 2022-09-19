import { FC } from "react";
import { Stack } from "../../shared/components/stack/stack";
import Typography from "../../shared/components/typography/typography";

const TestDrive: FC = () => {
  return (
    <>
      <Stack className="items-center">
        <div className="flex-1">
          <Typography component="h2">Лучшее проверяется на практике</Typography>
        </div>

        <div className="flex-1">67567</div>
      </Stack>
    </>
  );
};

export default TestDrive;
