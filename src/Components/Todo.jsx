import { useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import Todoitems from './Todoitems';
let count =0
 const Todo = () => {
    const [todo,setTodo] = useState([]);
    const inputRef =useRef(null);
    const add = () => {
    setTodo ([...todo,{no:count ++, text:inputRef.current.value,display:""}])
    inputRef.current.value ="";
localStorage.setItem("todo_count", count)
    }
    useEffect(() =>{
      setTodo(JSON.parse(localStorage.getItem("todo")))
      count =localStorage.getItem("todo_count")
    },[])

    useEffect(()=>{
        setTimeout(()=>{
console.log(todo);
localStorage.setItem("todo",JSON.stringify(todo))
},100);},[todo])
  return (
    <div className="todo">
        <div className="todo-header">To-Do List </div>
            <div className="todo-add">
                <input ref={inputRef} placeholder='Add your tast' className='todo-input'/>
                <div  onClick= {() => {add()}}className="todo-add-btn">Add</div>
            </div>
            <div className="todo-list">
              {todo.map((item,index) => {
              return <Todoitems  key={index} setTodo={setTodo} no={item.no} display={item.display} text={item.text}/>
              })}
            </div>
        </div>
    
  )
}


export default Todo
