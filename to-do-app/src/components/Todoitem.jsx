import styles from './todoitem.module.css'


export default function Todoitem({item}) {


    return (
        <div className={styles.todoitem} >
        <p className={styles.todoitemname} >  {item}</p> <span><button  className={styles.deletebutton} >delete </button></span> 
        <hr className={styles.line} />
        </div>
    ) ;  
    
  
         

        
    
       
    
}