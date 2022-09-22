import Question from "../entities/question/question";
import Section from "../features/section/section";

const QuizPage = () => {
  return (
    <Section className="flex bg-gradient-to-r from-[#00406C_4%] via-[#002D4B_50%] to-[#1B2E44_50%] justify-center items-center">
      <Question />
    </Section>
  );
};

export default QuizPage;
