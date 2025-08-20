// src/compo/Mini.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Pages
import MainPage from "../components/pages/MainPage";
import PostWritePage from "../components/pages/PostWritePage";
import PostViewPage from "../components/pages/PostViewPage";

const MiniWrapper = styled.div`
  background-color: transparent; /* Home CSS와 일치 */
  color: #ddd;
  min-height: 100vh;
  padding: 16px;
`;

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #ddd;
`;

const Mini = () => {
  return (
    <MiniWrapper>
      <MainTitleText>승우의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </MiniWrapper>
  );
};

export default Mini;
