import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SongDetail } from "./pages/SongDetail";
import { Vocabulary } from "./pages/Vocabulary";
import { Grammar } from "./pages/Grammar";
import { Quiz } from "./pages/Quiz";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="songs/:songId" element={<SongDetail />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
