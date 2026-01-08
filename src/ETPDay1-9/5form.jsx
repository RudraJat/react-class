import {useState} from "react";

// function Register(){
//     const [name, setName]=useState("");
//     const [error, setError]=useState("");

//     const Submit =(e)=>{
//         e.preventDefault(); // Prevents page reload on form submission - it keeps the data intact 
//         if(name===""){
//             setError("Name is required");
//         }else{
//             setError("");
//             alert(`Welcome, ${name}!`);
//         }
//     }

//     return(
//         <div>
//             <form onSubmit={Submit}>
//                 <input type="text"
//                     value={name}
//                     onChange ={(e)=>setName(e.target.value)}
//                     placeholder="Enter your name"
//                 />
//                 <p style={{color:"red"}}>{error}</p>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// };

// export default Register;

function Form(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [error, setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();// Prevents page reload on form submission - it keeps the data intact
        if(name===""|| email===""){
            setError("all fileds are required");
        }else{
            setError("");
            alert(`Name: ${name}\nEmail: ${email}`);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Enter your name"
                />
                <input type="text"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="Enter your email"
                />
                <p style={{color:"red"}}>{error}</p>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Form;