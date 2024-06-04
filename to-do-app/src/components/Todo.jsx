import { useState } from "react"
import Todoitem from "./Todoitem";

export default function Todo() {

    const [todo,setTodo] = useState("") ; 
 
    const [todos,setTodos] = useState([]); 


    function handleSubmit(e) {
        e.preventDefault(); 
        setTodos([...todos,todo]) ; 
        setTodo("")
        
    }
    return <div>
        {/* <button title="bootstrap button" type="button" className="btn btn-info btn-sm"  >react-bootstrap button</button> */}
        {/* hello there */}

        <form onSubmit={handleSubmit} >
            <input onChange={(e)=>setTodo(e.target.value)} value={todo} required type="text" />
            <br /><br />
            <button type="submit" > submit </button>
        </form>
        {todos.map((item)=>(<Todoitem key={item}  item={item} />))}
    </div>
}