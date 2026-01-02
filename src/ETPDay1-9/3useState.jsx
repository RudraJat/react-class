import {useState} from "react";

function BtnDisable(){
    const[attempts, setAttempts]=useState(0);
    const[disabled, setDisabled]=useState(false);

    function handleClick(){
        setAttempts(attempts +1);
        if(attempts >=3){
            setDisabled(true);
        }

    }
    return(
        <>
        <h1>Attempts: {attempts}</h1>
        {disabled ? <h2 style={{color: "red"}}>Button Disabled</h2> : <button onClick={handleClick} style={{border:"1px solid black"}}>Click Me</button>}
        </>
    )
};

export default BtnDisable;