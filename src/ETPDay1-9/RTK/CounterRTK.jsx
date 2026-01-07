import {increment, decrement} from "./countSlice.jsx";
import {useDispatch, useSelector} from "react-redux";

function CounterRTK(){
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch(increment())}>INC</button>
            <button onClick={()=>dispatch(decrement())}>DEC</button>
        </div>
    )
}

export default CounterRTK;