import Todo from './Todo';
import styles from './todoitem.module.css'


export default function Todoitem({item,setTodos,todos}) {

    function deletetodo(item) {
        console.log("delete to button pressed  for the item ",  item)
        setTodos(todos.filter((todo) => todo !== item)) ; 
        
    }


    return (
        <div className={styles.todoitem} >
        <p className={styles.todoitemname} >  {item}</p> <span><button onClick={ ()=> deletetodo(item)}  className={styles.deletebutton} >delete </button></span> 
        <hr className={styles.line} />
        </div>
    ) ;  
    
  
         

        
    
       
    
}