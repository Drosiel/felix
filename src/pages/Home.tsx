import Hero from "../entities/hero/hero";
import Quiz from "../entities/quiz/quiz";
import TestDrive from "../entities/test-drive/test-drive";
import Section from "../features/section/section";

const Home = () => {
  return (
    <>
      <Section className="relative bg-gradient-to-r from-[#00406C_4%] via-[#002D4B_50%] to-[#1B2E44_50%]">
        <Hero />
      </Section>

      <Section className="bg-gradient-to-r from-[#BEBEBE_80%] to-[#CD1338_80%]">
        <TestDrive />
      </Section>

      <Section>3</Section>

      <Section>
        <Quiz />
      </Section>
    </>
  );
};

export default Home;
