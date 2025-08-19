// src/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  background: #2e2e48;
  padding: 12px 24px;
  border-radius: 12px;
  margin: 20px auto 40px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: fit-content;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ddd;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #3f3f5a;
    color: #fff;
    transform: scale(1.05);
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/about">소개</NavLink>
            <NavLink to="/contact">문의</NavLink>
        </NavWrapper>
    );
};

export default Nav;
