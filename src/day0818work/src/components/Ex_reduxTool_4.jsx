import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from '../js/store_redux_slice';

const Ex_reduxTool_4 = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>리덕스 카운터</h2>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Ex_reduxTool_4;
