import { useState } from "react";

function AddTodo({onAdd}){
    const [title,setTitle]=useState("")
    return(
        <>
        <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button onClick={()=>{
                setTitle("")
                onAdd(title)
            }}>Add</button>
        </>
    )
}

export default AddTodo;