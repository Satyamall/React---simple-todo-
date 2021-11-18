
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

    if(status===true)
    {
        var Style = {
            background: "rgb(127,123,255)"
        }
    }

    return <div className={style.list}>
        <span className={style.title}>
            {title} 
            <button onClick={()=>handleToggle(id)} className={style.toggle} style={Style}>
                <div className={style.div}></div>
            </button>
        </span>
    </div>
 }
 
 export default TodoList