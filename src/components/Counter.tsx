import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const inc = () => {
        return setCount(count + 1);
    }
    const desc = () => {
        return setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Увеличить</button>
            <button onClick={desc}>Уменьшить</button>
        </div>
    );
};

export default Counter;