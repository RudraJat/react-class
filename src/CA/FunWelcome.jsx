//Q.1 Write a simple FUNCTIONAL COMPONENT in REACT
//Q.3 Use props in FUNCTIONAL COMPONENT

function FunWelcome(props){
    return(
        <>
         <h1>Hello from functional component</h1>
         <h2>My name is : {props.name}</h2>
         <h2>My age is : {props.age}</h2>
         </>
    )
}

export default FunWelcome;