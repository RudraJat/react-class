import {useRef} from "react";

//1.
function InputColor(){
    const inputRef= useRef(null);

    const handleFocus=()=>{
        inputRef.current.style.backgroundColor= "red";
    }

    return(
        <div>
            <input ref={inputRef} />
            <button onClick={handleFocus}>Change Color</button>
        </div>
    )
}

export default InputColor