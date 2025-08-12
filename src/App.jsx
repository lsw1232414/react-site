import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo/Work1";  // import 누락해서 추가

function App() {
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site" element={<Layout />}>
            {/* Layout이 공통 레이아웃 역할을 하고, 안에 페이지들이 Outlet으로 보여짐 */}
            <Route index element={<Home />} />              {/* /react-site */}
            <Route path="work1" element={<Work1 />} />      {/* /react-site/work1 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
