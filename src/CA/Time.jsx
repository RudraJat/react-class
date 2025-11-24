import {useState, useEffect} from "react";

function Time(){
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime((t)=>t+1)
        },1000);

        return ()=> clearInterval(id);
    },[]);

    return <h1>{time}</h1>;
}

export default Time;