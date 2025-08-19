import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

// Pages
import Home from './pages/Home';
import Mini from './compo/Mini';
import Work1 from './compo/Work1';
import Work2 from './compo/Work2';
import Work3 from './compo/Work3';
import Work4 from './compo/Work4';
import MainContent from './MainContent';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work1" element={<Work1 />} />
          <Route path="/work2" element={<Work2 />} />
          <Route path="/work3" element={<Work3 />} />
          <Route path="/work4" element={<Work4 />} />
          {/* 미니블로그 */}
          <Route path="/mini/*" element={<Mini />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;
