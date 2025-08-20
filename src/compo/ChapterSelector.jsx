import React, { useState } from "react";
import { Link } from "react-router-dom";

// 챕터 3
import Book from "../chapter/chapter_03/Book";
import Library from "../chapter/chapter_03/Library";

// 챕터 4
import Clock from "../chapter/chapter_04/Clock";

// 챕터 5
import Comment from "../chapter/chapter_05/Comment";
import CommentList from "../chapter/chapter_05/CommentList";

// 챕터 6
import Notification from "../chapter/chapter_06/Notification";
import NotificationList from "../chapter/chapter_06/NotificationList";

// 챕터 7
import Accommodate from "../chapter/chapter_07/Accommodate";
import useCounter from "../chapter/chapter_07/useCounter";

// 챕터 8
import ConfirmButton from "../chapter/chapter_08/ConfirmButton";

// 챕터 9
import LandingPage from "../chapter/chapter_09/LandingPage";
import Toolbar from "../chapter/chapter_09/Toolbar";


// 챕터 10
import AttendanceBook from "../chapter/chapter_10/AttendanceBook";

// 챕터 11
import SignUp from "../chapter/chapter_11/SignUp";

// 챕터 12
import Calculator from "../chapter/chapter_12/Calculator";
import TemperatureInput from "../chapter/chapter_12/TemperatureInput";

// 챕터 13
import Card from "../chapter/chapter_13/Card";
import ProfileCard from "../chapter/chapter_13/ProfileCard";

// 챕터 14
import DarkOrLight from "../chapter/chapter_14/DarkOrLight";
import MainContent from "../chapter/chapter_14/MainContent";
import ThemeContext from "../chapter/chapter_14/ThemeContext";

// 챕터 15
import Blocks from "../chapter/chapter_15/Blocks";

export default function ChapterSelector() {
    const [components, setComponents] = useState([]);

    const handleChapterClick = (num) => {
        switch (num) {
            case 3: setComponents([Library]); break;
            case 4: setComponents([Clock]); break;
            case 5: setComponents([CommentList]); break;
            case 6: setComponents([NotificationList]); break;
            case 7: setComponents([Accommodate]); break;
            case 8: setComponents([ConfirmButton]); break;
            case 9: setComponents([LandingPage]); break;
            case 10: setComponents([AttendanceBook]); break;
            case 11: setComponents([SignUp]); break;
            case 12: setComponents([Calculator]); break;
            case 13: setComponents([Card, ProfileCard]); break;
            case 14: setComponents([DarkOrLight]); break;
            case 15: setComponents([Blocks]); break;
            default: setComponents([]); break;
        }
    };

    return (
        <div className="chapter-container">
            <h1 className="chapter-title">챕터 선택</h1>

            <p className="home-link">
                <Link to="/">홈으로 돌아가기</Link>
            </p>

            <div className="chapter-buttons">
                {Array.from({ length: 13 }, (_, i) => i + 3).map((ch) => (
                    <button
                        key={ch}
                        className="chapter-btn"
                        onClick={() => handleChapterClick(ch)}
                    >
                        Chapter {ch}
                    </button>
                ))}
            </div>

            <div className="chapter-content">
                {components.length > 0 ? (
                    components.map((Comp, i) => <Comp key={i} />)
                ) : (
                    <p>챕터를 선택하세요</p>
                )}
            </div>
        </div>
    );
}
