import {useState} from "react";

function Toggle(){
    const [status, setStatus] =useState(true);

    return(
        <>
        <h1>{status? "ON" :"OFF"}</h1>
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </>
    )
}

export default Toggle;
