import {useContext} from "react";
import { UserContext } from "./6UserContext.jsx";

function Toggle(){
    const {theme, setTheme}= useContext(UserContext);
    return(
        <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
                Change Theme
            </button>
        </div>
    )
}

export default Toggle;