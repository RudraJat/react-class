import axios from "axios";
import {useEffect, useState} from "react";

function Users(){
    const[users, setUsers]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data));
    },[]);

    return users.map(u=><p key={u.id}>{u.name}</p>)
};

export default Users;