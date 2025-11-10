
function Card(props){
    return(
        <div className="bg-red-500 shadow-2xl">
            <h1 className="text-black">{props.name}</h1>
        </div>
        
    )
}

export default Card;