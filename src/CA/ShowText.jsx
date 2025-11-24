import {useState} from "react";

function ShowText(){
    const [text, setText]=useState("");

    return(
        <>
        <input className="border-2" onChange={(e)=>setText(e.target.value)} />
        <h1>{text}</h1>
        </>
    )
}

export default ShowText;