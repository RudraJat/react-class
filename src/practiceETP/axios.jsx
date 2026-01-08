import {useEffect, useState} from "react";
import axios from "axios";

function AxiosData(){
    const [user, setUser]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
    },[]);

    return(
        <div>
            {user.map((user)=>
                <p key={user.id}>{user.name}</p>
            )}
        </div>
    )
}

export default AxiosData;