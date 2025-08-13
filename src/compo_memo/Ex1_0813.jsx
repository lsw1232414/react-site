import React, { useState, useMemo } from 'react';

const Ex1_0813 = () => {
    const [count, setCount] = useState(0);
    const double = useMemo(() => {
        console.log("double 값 계산 중...")
        return (count * 2)
    }, [count]);
    return (
        <div>
            <h1>count: {count}</h1>
            <h2>double: {double}</h2>
            <button onClick={() => setCount(count + 1)}>++1 증가시키기</button>
        </div>
    );
};

export default Ex1_0813;