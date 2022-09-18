import { Routes, Route } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Home />} />
    </Routes>
  );
};

export default App;
