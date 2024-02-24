import React from "react";

export const Counter = () => {
    const [counterOutput, setCounterOutput] = React.useState(0);

    return <div>
        Count now is: {counterOutput}
        <div>
            <button onClick={() => setCounterOutput(counterOutput+1)}>+</button>
            <button onClick={() => setCounterOutput(counterOutput-1)}>-</button>
        </div>
    </div>
}