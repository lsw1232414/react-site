import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/about">소개</Link></li>
                    <li><Link to="/contact">문의</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;