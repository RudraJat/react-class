//Q. Make a button for increasing a number
import {useState} from "react";

function Click(){
    const [count, setCount]=useState(0);

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)} className="border-2 m-2">Increase</button>
        <button onClick={()=>{if (count>0){
            setCount(count-1)
        }
        }} className="border-2 m-2 bg-amber-200">Decrease</button>
        <button onClick={()=>setCount(0)} className="border-2 m-2">Reset</button>
        </>
    )
}

export default Click;