import {useState, useEffect} from "react";

function Time(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let id; 
        if(isRunning){
            id=setInterval(()=>{
            setTime((t)=>t+1)
        },1000);
    }

        return ()=> clearInterval(id);
    },[isRunning]);

    return(
        <>
         <h1>{time}</h1>

         <button className="border-2 m-2 " onClick={()=>setIsRunning(true)}>START</button>
         <button className="border-2 m-2 " onClick={()=>setIsRunning(false)}>STOP</button>
         <button className="border-2 m-2 " onClick={()=>setTime(0)}>RESET</button>
         </>
    )
}

export default Time;