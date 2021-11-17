
import style from "./Todo.module.css";

const TodoList = ({id,status,title,handleDelete,handleToggle})=>{
    var listNumber = id;
    // console.log(title,status,id);

    if(listNumber === 1)
    {
        return (
          ''
        );
    }

    if(status==="Completed")
    {
        var Style = {
            background: "blue"
        }
    }

    return <div className={style.list}>
        <span className={style.id}>{listNumber-1}.</span>
        <span className={style.title}>{title}</span>
        <span className={style.status} style={Style}>{status}</span>
        <button onClick={()=>handleDelete(id)} className={style.delete}>X</button>
        <button onClick={()=>handleToggle(id)} className={style.toggle}>Toggle</button>
    </div>
 }
 
 export default TodoList