import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./action/counterAction";

function CounterRedux(){
    const count = useSelector((state)=>state.count);
    const dispatch= useDispatch();

    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{margin: "5px", border: "1px solid black"}} onClick={()=> dispatch(increment())}>INC</button>
            <button style={{margin: "5px", border: "1px solid black"}} onClick={()=>dispatch(decrement())}>DEC</button>
        </div>
    )
};

export default CounterRedux;