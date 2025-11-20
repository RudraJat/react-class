
const Food = props => {
    const foodItem1 = "Pizza";
    const foodItem2 = "Burger";
  return (
    <div>
        <h1>Food List</h1>
        <ul className="list-disc pl-6">
            <li>Apple</li>
            <li>{foodItem1}</li>
            <li>{foodItem2.toUpperCase()}</li>
        </ul>
    </div>
  )
}


export default Food