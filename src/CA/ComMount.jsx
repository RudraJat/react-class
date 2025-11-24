import {useEffect} from "react";

function ComMount(){
    useEffect(()=>{
        console.log("Component Mounted");
    }, []);
    // [] this is dependency array it is empty means -- will run for once only when the component mounted(first appears on the screen)

    return <h1>HELLO</h1>
}

export default ComMount;