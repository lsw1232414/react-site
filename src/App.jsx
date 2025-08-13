import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo/Work1";
import Work2 from "./compo/Work2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 — 홈 UI 전체를 Home.jsx에 넣어서 관리 */}
        <Route path="/react-site" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Work1 — 단독 화면 */}
        <Route path="/react-site/work1" element={<Work1 />} />
        <Route path="/react-site/work2" element={<Work2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
