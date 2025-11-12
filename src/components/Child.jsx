
const Child =(props)=>{
    const increase = (e)=>{
        e(props.count + 1);
    }
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={() => increase(props.setcount)}>Increase</button>
        </div>
    )
}

export default Child;