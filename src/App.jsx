// import { useState } from 'react'
// import './App.css';
// // import Header from './components/Header.jsx';
// // import Food from './components/Food.jsx';
// // import Footer from './components/Footer.jsx';
// // import AuthContext from './components/AuthContext.jsx';
// // import Increment from './components/Increment.jsx';
// // import Decrement from './components/Increment.jsx';
// // import {Context} from './components/Context.jsx';
// // import Reset from './components/Increment.jsx';
// // import Display from './components/Increment.jsx';
// // import Parent from './components/Parent.jsx';
// // import Mapfil from './components/Mapfil.jsx';
// // import Card from './components/Card.jsx';
// // import Array from './components/Array.jsx';
// // import Greeting from './components/Greeting.jsx';
// // import {Routes, Route} from 'react-router-dom';

// //CA practice
// // import Caprac from './CA/Caprac';
// // import FunWelcome from './CA/FunWelcome';
// // import ClaWelcome from './CA/ClaWelcome';
// // import Click from './CA/Click';
// // import MapList from './CA/MapList';
// // import Alert from './CA/Alert';
// // import AddButton from './CA/AddButton';
// // import ShowText from './CA/ShowText';
// // import Toggle from './CA/Toggle';
// // import ComMount from './CA/ComMount';
// // import Time from './CA/Time';
// // import { MyContext } from './CA/Context';
// // import Child from './CA/Child';
// // import Profile from './CA/Profile.jsx';
// // import Home from './CA/home.jsx';
// // import About from './CA/About.jsx';


// //FOR ETP
// import Hello from './ETPDay1-9/1Home.jsx';
// import User from './ETPDay1-9/2funCom.jsx';
// import BtnDisable from './ETPDay1-9/3useState.jsx';
// import Counter from "./ETPDay1-9/4classComp.jsx";
// import Register from "./ETPDay1-9/5form.jsx";
// import Form from "./ETPDay1-9/5form.jsx";
// import Profile from "./ETPDay1-9/6Profile.jsx";
// import Toggle from "./ETPDay1-9/6Toggle.jsx";
// import {UserContext} from "./ETPDay1-9/6UserContext.jsx";
// import CounterRed from "./ETPDay1-9/7useReducer.jsx";
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Users from "./ETPDay1-9/7.axios.jsx";
// import InputColor from "./ETPDay1-9/7useRef.jsx";
// import {Provider} from "react-redux";
// import store from "./ETPDay1-9/reduxs/store.jsx";
// import CounterRedux from "./ETPDay1-9/reduxs/CounterRedux.jsx";
// import CounterRTK from "./ETPDay1-9/RTK/CounterRTK.jsx";
// import storeRtk from "./ETPDay1-9/RTK/storeRtk.jsx";


// function App(){

//     // const[count, setCount]=useState(0);

// //     return(
// //         <>
// //         {/* <Header />
       
// //         <Food />
// //         {/* <div className="flex flex-col min-h-screen">
// //             <Card name="Rudra"/>
// //             <Greeting name="Rudra"/>
// //             <Parent/>
// //             <Mapfil />
// //             <Array />
            
// //         // </div> */}
// //         {/* <Footer />  */}

// //         {/* CA practice */}
// //         {/* <Click/>
// //         <MapList/>
// //         <FunWelcome name="Rudra" age="20"/>
// //         <ClaWelcome name="Rudra" age="20"/>
// //         <Caprac/>
        
// //         <AddButton/> */}
// //         {/* <ShowText/>
// //         <Toggle/> */}
// //         {/* <ComMount/>
// //         <Time/> */}
// //        {/* <Alert/>
// //         <MyContext.Provider value={{count, setCount}}>
// //             <Child/>
// //         // </MyContext.Provider>
// //         // </> */}
// //         {/* // <Memo/>
// //         // </> */}
// //         <Routes>
// //             <Route path='/' element={<Home/>}/> 
// //             <Route path='/about' element={<About/>}/>
// //             <Route path='/profile' element={<Profile/>}/>
// //         </Routes>
// //         </>
// //     )
// // }

// // const user = {
// //     name: "Rudra",
// //     age: 20
// // }

// // const [name, setName]= useState("rudra");
// // const [age, setAge]= useState(20);
// // const [theme, setTheme]= useState("light");

// // return (
// //     <>
// //     {/* <UserContext.Provider value={{name, setName, age, setAge}}>
// //         <Profile/>
// //     </UserContext.Provider> */}
// //     {/* <UserContext.Provider value={{theme, setTheme}}>
// //         <Toggle/>
// //     </UserContext.Provider> */}
// //     </>
// // )

// // return(
// //     <>
// //     <CounterRed/>
// //     </>
// // )
// // return(
// //     <BrowserRouter>
// //         <Link to="/">Home</Link><br/>
// //         <Link to="/about">About</Link>

// //         <Routes>
// //             <Route  path="/" element={<h1 style={{color: "red"}}>Home Page</h1>}/>
// //             <Route  path="/about" element={<h1 style={{color: "blue"}}>About Page</h1>}/>
// //         </Routes>
// //     </BrowserRouter>
// // )


// // return(
// //     <>
// //     <Users/>
// //     </>
// // )

// // return(
// //     <div>
// //         <InputColor/>
// //     </div>
// // )


// // return(
// //     <Provider store = {store}>
// //         <CounterRedux/>
// //     </Provider>
// // )

// return(
//     <Provider store={storeRtk}>
//         <CounterRTK/>
//     </Provider>
// )
// }



import FetchData from "./practiceETP/fetch.jsx";
import AxiosData from "./practiceETP/axios.jsx";
import ControlledForm from "./practiceETP/controlledForm.jsx";
import UncontrolledForm from "./practiceETP/uncontrolledForm.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Calculator from "./practiceETP/calculator.jsx";


function App(){
    return(
        <div>
            {/* <FetchData/> */}
            {/* <AxiosData/> */}
            {/* <ControlledForm/> */}
            {/* <UncontrolledForm/> */}
            {/* <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/contact" element={<h1>Contact Page</h1>} />
                </Routes>
            </BrowserRouter> */}
            <Calculator/>
        </div>
    )
}

export default App;