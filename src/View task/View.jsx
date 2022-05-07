import { useState } from "react"
const View = ()=>{
    const[name,setName] = useState("this is name")
    const handleclick = ()=>{
        setName("new name")
    }
    return(
        <div>
            {name}
            <button onClick={handleclick}> Click me</button>
        </div>
    )
}
export default View