import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import QuizPage from "./pages/Quiz";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
