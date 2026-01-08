import {useEffect, useState} from "react";

function FetchData(){

    const [user, setUser]= useState([]);
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[]);

    const handlePost =()=>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            header:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Hello",
                body: "This is a post request",
                userId: 1
            })
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.error("Error:", error));
    }

    return(
        <div>
            <button onClick={handlePost}>Create Post</button>
            {user.map((user)=>
                <li key={user.id}>{user.name}</li>
            )}
        </div>
    )
};

export default FetchData;