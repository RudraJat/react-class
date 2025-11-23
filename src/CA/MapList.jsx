
function MapList(){
    const fruits =["apple","mango","watermelon"];

    return(
        <ul className="list-disc pl-5">
            {fruits.map((item,index)=>(
                <li key={index} >{item}</li>
            ))}
        </ul>
    )
}

export default MapList;