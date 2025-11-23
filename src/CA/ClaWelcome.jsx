//Q.2 Write a simple CLASS COMPONENT in REACT
//Q.4 Use props in CLASS COMPONENT
import React, {Component} from 'react'


class ClaWelcome extends Component{
  render(){
    return (
    <>
    <div>Welcome From Class Component</div>
    <h2>My Name is: {this.props.name}</h2>
    <h2>My Age is: {this.props.age}</h2>
    </>
  )
}
}



export default ClaWelcome