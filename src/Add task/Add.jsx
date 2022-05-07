import { useState } from "react"
const Add = ()=>{
    const[heading,setHeading] = useState("this is heading")
    const handleclick = ()=>{
        setHeading("new heading")
    }
    return(
        <div>
            {heading}
            <button onClick={handleclick}> Click me</button>
        </div>
    )
}
export default Add