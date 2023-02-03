import { useState, useEffect } from 'react';
// rafce
const Counter = () => {

    // count
    const [count, setCount] = useState(0);
    //first select element
    //add an eventListener(click, () =>{})


    // useEffect(() => {
    //     // make that call to database
    // }, [count])

    const handleIncrement = () => {
        console.log("running increment");
        // logic to change count
        let newCount = count+1
        setCount(newCount)
        //make a call to database and change value
    }
    const handleDecrement = () => {
        console.log("running decrement");
        setCount(count-1)
    }

    const countReset = () => {
        console.log("count reset to 0");
        setCount(0)
    }

    return (
    <div style={{marginTop: "40px"}}>
        <span>Current Count: {count}</span>
        <section>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={countReset}>Count reset</button>
        </section>
    </div>
    )
};

export default Counter;