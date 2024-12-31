import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const deleteAll = () => {
        setCount(0);
    };

    return (
        <div className="card-container">
            <div className="card">
                <h1 className="card-heading">Counter: {count}</h1>
                <button className="increment-button" onClick={increment}>
                    Increment
                </button>
                <button className="increment-button" onClick={decrement}>
                    Decrement
                </button>
                <button className="increment-button" onClick={deleteAll}>
                    Clear All
                </button>
            </div>
        </div>
    );
}

