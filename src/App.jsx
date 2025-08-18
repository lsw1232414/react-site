import Home from "./compo/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./compo/Layout";
import Work1 from "./compo/Work1";
import Work2 from "./compo/Work2";
import Work3 from "./compo/Work3";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work1" element={<Work1 />} />
          <Route path="work2" element={<Work2 />} />
          <Route path="work3" element={<Work3 />} />
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
