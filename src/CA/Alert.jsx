function Alert(){
    const handleClick =()=>{
        alert("Button Clicked");
    };
    return(
    <>
    <button className="border-2 border-dashed p-2 m-2" onClick={handleClick}>Touch Me</button>
    </>
)}

export default Alert;