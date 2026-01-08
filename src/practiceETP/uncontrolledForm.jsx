import {useRef} from "react";

function UncontrolledForm(){
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        const name=nameRef.current.value;
        const email=emailRef.current.value;
        
        if(!name || !email){
            alert("All fields are required");
        }else{
            
            alert(`Name: ${name}, Email: ${email}`);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                ref={nameRef}
                placeholder="Enter your name"
            />
            <input type="text"
                ref={emailRef}
                placeholder="Enter your email"
            />      
            <button>Submit</button>
        </form>
    )
}

export default UncontrolledForm;