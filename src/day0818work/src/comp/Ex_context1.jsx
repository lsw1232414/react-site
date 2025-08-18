import React from 'react';
import { useGlobal } from '../Ex_cont_Provider';

const Ex_context1 = () => {
    const { count, setCount } = useGlobal();

    return (
        <div>
            <p>카운터 : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +1 증가
            </button>
        </div>
    );
};

export default Ex_context1;
