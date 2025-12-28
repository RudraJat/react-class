import React from "react";
import {useReducer} from "react";

function Memo(){
    const [state, dispatch]=useReducer(reducer,1);
    function reducer(state, action){
        if(action.type==="decrement"){
            return state-1;
        }else{
            return state+1;
        }
    }
    return(
        <div>
            <h1>Count:{state}</h1>
            <button className="border-2 p-2 mr-1" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button className="border-2 p-2" onClick={()=>dispatch({type:"increment"})}>Increment</button>
        </div>
    )
}
export default Memo;
