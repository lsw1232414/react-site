import React, { useState } from 'react';
import { store_public } from './js/store_public';

const Ex_js_2 = () => {
    const [count, setCount] = useState(store_public.count)

    const handleClick = () => {
        store_public.increment();
        setCount(store_public.count)
    }
    return (
        <div>
            <p> 카운트 : {count}</p>
            <button onClick={handleClick}>
                +1증가
            </button>
        </div>
    );
};

export default Ex_js_2;