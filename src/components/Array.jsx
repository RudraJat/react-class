import React from 'react'
import { useState } from 'react';



const Array = () => {
    const [arr, setArr]=useState([]);
    const [val, setVal]=useState("");
    const [ind, setInd]=useState("");
    const styles ={"border":"2px solid black"}
    //1. Add Item At the end of the array
    const addItem=()=>{
        if(val==="")return;
        setArr([...arr, Number(val)]);
        setVal("");
    }

    //2. Add Item at any givenindex
    const addItemIndex =()=>{
        if(val==="" || ind==="")return;
        const newArr=[...arr];
        newArr.splice(Number(ind),0,Number(val));// Number(ind) means kis index pe val add hogi, 0 means koi bhi value delete nhi hogi, Number(val) means konsa value add hogi
        setArr(newArr);
        setVal("");
        setInd("");
    }

    //3. Remove Item from array
    const remove =(i) => {
        const newArr=[...arr];
        newArr.splice(i,1);
        setArr(newArr);
    }

    //4.Updating item at any given index
    const updateItem =() => {
        if(val==="" || ind==="")return;
        const newArr=[...arr];
        newArr[ind]=val;
        setArr(newArr);
        setVal("");
        setInd("");
    } 

    //5. Add a number to each item of the array
    const addToEachItem =()=>{
        if(val==="")return;
        const newArr=arr.map((n)=>n+Number(val));
        setArr(newArr);
        setVal("");
    }

  return (
    <div>
        <h1>Array Operations</h1>
        <input type="number"
        placeholder="value"
        value={val}
        onChange={(e)=>setVal(e.target.value)} />
        <input type="number"
        placeholder="index"
        value={ind}
        onChange={(e)=>setInd(e.target.value)} />
        <br />
        <div>
            
            <button style={styles} onClick={addItem}>Add Item At End</button>
            <button style={styles} onClick={addItemIndex}>Add Item At Index</button>
            <button style={styles} onClick={updateItem}>Update Item</button>
            <button style={styles} onClick={addToEachItem}>Add To Each Item</button>
        </div>
        <h2>
            Array:
        </h2>
        {arr.map((item,index)=>(
            <div key ={index}>
                {index}:{item}
                <button onClick={()=>remove(index)}>Remove</button>
                </div>
        ))}
      </div>
  )
}


export default Array