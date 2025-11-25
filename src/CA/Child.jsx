import { useContext } from "react";
import { MyContext } from "./Context";

function Child(){
    const {count, setCount} = useContext(MyContext);

    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}

export default Child;