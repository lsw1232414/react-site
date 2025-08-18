import { store_zustand } from "./js/store_zustand";
const Ex_zustand_3 = () => {
    const count = store_zustand((state) => state.count);
    const increment = store_zustand((state) => state.increment);
    const decrement = store_zustand((state) => state.decrement);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default Ex_zustand_3;
