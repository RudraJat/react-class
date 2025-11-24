import {useState} from "react";

function AddButton(){
    const[a, setA]=useState(0);
    const[b, setB]=useState(0);
    const[res, setRes]=useState(0);

    return (
        <>
        {/* This plus is unary operator used for converting the input to number becuase by default it'll take a string before + "5" after + 5 */}
        <input className="border-2  m-2" type="number" onChange={(e)=> setA(+e.target.value)} /> 
        <input className="border-2  m-2" type="number" onChange={(e)=> setB(+e.target.value)} />
        <button className="border-2 m-2" onClick={()=>setRes(a+b)}>Add Numbers</button>
        <button className="border-2 m-2" onClick={()=>setRes(0)}>Reset</button>
        <h1>Sum: {res}</h1>
        </>
    )
}

export default AddButton;