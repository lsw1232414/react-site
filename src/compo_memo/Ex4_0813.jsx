import React, { useMemo, useState } from 'react';

function Child({ config }) {
    console.log("child 렌더링");
    return (
        <div> 오늘의 테마는 {config.theme}</div>
    )

}

const Ex4_0813 = () => {
    const [theme, setTheme] = useState("light");

    const config = useMemo(() => ({ theme }), [theme]);

    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
    };

    return (
        <div style={style}>
            <Child config={config} />
            <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
                테마 변경
            </button>
        </div>
    );
};



export default Ex4_0813;
