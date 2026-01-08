import {useState} from "react";

function Calculator(){
    const [num1, setNum1]= useState(0);
    const [num2, setNum2]= useState(0);
    
    return(
        <div>
            <input type="number"
                value={num1}
                onChange={e=>setNum1(+e.target.value)}
                placeholder="Enter first number"
            />

            <input type="number"
                value={num2}
                onChange={e=>setNum2(+e.target.value)}
                placeholder="Enter second number"
            />
            <h2> Sum: {num1 + num2} </h2>
            <h2>Diff: {num1 - num2} </h2>
            <h2>Product: {num1 * num2} </h2>
            <h2>Quotient: {num2 !== 0 ? (num1 / num2) : "Infinity"} </h2>
        </div>
    )
}

export default Calculator;