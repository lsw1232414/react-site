import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo/Work1";

function App() {
  return (
    <HashRouter>
      <h1>과제방</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="work1" element={<Work1 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
