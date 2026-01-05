import {useContext} from "react";
import {UserContext} from "./6UserContext.jsx";

function Profile(){
    // const {name, age} = useContext(UserContext);
    const {name, setName, age, setAge}=useContext(UserContext);

    return(
        <div>
            <h1>Name: {name}</h1>
            <button onClick={()=>setName("Rudrapratap Singh Jat")}>Change Name</button>
            <h1>Age: {age}</h1>
            <button onClick={()=>setAge(age+1)}>Change Age</button>
        </div>
    )
};

export default Profile;