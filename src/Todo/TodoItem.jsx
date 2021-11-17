
import { useState } from "react";
import style from "./Todo.module.css";

function TodoInput({onTaskCreate}){

    const [text,setText]= useState("");

    const handleChange = (e)=>{
        setText(e.target.value)
    }
    
    const handleClick = ()=>{
        onTaskCreate(text)
    }
    return (
        <div className={style.todoItem}>
            <h3>Add Your Tasks Below</h3>
            <input type="text"
             placeholder="Write Something"
             value={text}
             onChange={handleChange}
             />
             <button onClick={handleClick}>+</button>
        </div>
    )
}

export default TodoInput;