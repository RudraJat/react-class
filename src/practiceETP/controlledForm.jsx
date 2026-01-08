import {useState} from "react";

function ControlledForm(){
    const[name, setName]= useState("");
    const[email, setEmail]=useState("");
    const[error, setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(name===""||email===""){
            setError("All fields are required");
        }else{
            setError("");
            alert(`Name: ${name}, Email: ${email}`);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input type="text"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <p style={{color: "red"}}>{error}</p>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;