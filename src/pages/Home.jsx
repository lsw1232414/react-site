// src/compo/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 style={{
        fontSize: "42px",
        textAlign: "center",
        marginBottom: "10px",
        fontWeight: 700,
        color: "#ffffff"
      }}>
        LSW's Projects
      </h1>

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
          <div className="hw empty"></div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 01</span>
              <span className="date">08.12</span>
            </div>
            <Link to="/work1">실습</Link>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 02</span>
              <span className="date">08.13</span>
            </div>
            <Link to="/work2">실습</Link>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 03</span>
              <span className="date">08.14</span>
            </div>
            <Link to="/work3">예정</Link>
          </div>
          <div className="hw empty"></div>
        </div>
      </div>

      <div className="week-section">
        <div className="week-label">2주차</div>
        <div className="grid">
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 04</span>
              <span className="date">08.18</span>
            </div>
            <Link to="/work4">리덕스</Link>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 05</span>
              <span className="date">08.19</span>
            </div>
            <Link to="/mini">미니 블로그</Link>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 06</span>
              <span className="date">08.20</span>
            </div>
            <Link to="/chapter">처음 만난 리액트</Link>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 07</span>
              <span className="date">08.21</span>
            </div>
          </div>
          <div className="hw">
            <div className="hw-title">
              <span className="day">DAY 08</span>
              <span className="date">08.22</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
