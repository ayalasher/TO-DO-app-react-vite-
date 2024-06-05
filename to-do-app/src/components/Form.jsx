import { useState } from "react";



export default function Form({todos,setTodos}) { 
    const [todo,setTodo] = useState("") ; 
   

    function handleSubmit(e) {
        e.preventDefault(); 
        setTodos([...todos,todo]) ; 
        setTodo("") ; 
        
    } 
    return <form onSubmit={handleSubmit} >
    <input onChange={(e)=>setTodo(e.target.value)} value={todo} required type="text" />
    <br /><br />
    <button type="submit" > submit </button>
</form> 
}