
import { useState } from "react";
import style from "./Todo.module.css";
import TodoInput from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo(){

    const [todos,setTodos]=useState([
        {
            id: 1,
            title: "DEFAULT",
            status: "Incompleted",
        }
    ])
    
    const  handleTaskCreate = (title)=>{
        const payload={
            id: todos.length+1,
            title: title,
            status: "Incompleted"
        }
        setTodos([...todos,payload]);
    }

    // delete
    const handleDelete = (id)=>{
        setTodos(todos.filter((item)=>item.id !==id));
    }

    // * toggle
    const handleToggle=(id)=>{
        const updatedTodos = todos.map((item)=>
        item.id===id ? {...item, status: (item.status==="Completed")?("Incompleted"):"Completed"}: item
        );
        setTodos(updatedTodos);
    }
    
    return (
        <div className={style.todo}>
            <h1>TODO LIST</h1>
            <TodoInput onTaskCreate={handleTaskCreate}/>
            {
                 todos.map((todo)=>{
                    return (
                <TodoList
                key={todo.id} 
                id={todo.id}
                title={todo.title} 
                status={todo.status}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
                );
                })
            }
        </div>
    )
}
