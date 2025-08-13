import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>LSW's Projects</h1>
      <nav className="top-menu">
        <a href="https://lsw1232414.github.io/html2507/">HTML 2507</a>
        <a href="https://lsw1232414.github.io/js2507/">JS 2507</a>
        <a href="https://lsw1232414.github.io/test2508/">TEST 2508</a>
        <a href="https://lsw1232414.github.io/react-site/">React 2508</a>
      </nav>
      <p>React</p>

      <div className="weekday-header">
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
      </div>

      <div className="week-section">
        <div className="week-label">1주차</div>
        <div className="grid">
          <div className="hw empty"></div>   {/* 월 */}
          <div className="hw empty"></div>   {/* 화 */}
          <div className="hw empty"></div>   {/* 수 */}
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 01</span>
              <span className="date">07.24</span>
            </div>
            <Link to="/work1" target="_blank" rel="noopener noreferrer">실습</Link> {/* 목 */}
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 02</span>
              <span className="date">07.25</span>
            </div>
            <Link to="/work2" target="_blank" rel="noopener noreferrer">실습</Link> {/* 금 */}
          </div>
        </div>
      </div>
    </>
  );
}
