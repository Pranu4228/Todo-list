import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png'
import not_tick from './Assets/not_tick.png'


const Todoitems = ({no,display,text,setTodo}) => {
  const deleteTodo  =()=>{
let data =JSON.parse(localStorage.getItem("todo"))
data = data.filter((todo) => todo.no!==no)
setTodo(data);
  }
  const toggle =(no)=>{
    let data =JSON.parse(localStorage.getItem("todo"))
    for(let i=0;i< data.length;i++)
    {
      if(data[i].no===no){
        if(data[i].display===''){
          data[i].display ="line-through";
        }else{
          data[i].display ="";
        }
        break;
      }
    }
    setTodo(data);
  }
  return (
    <div className="todo-items">
      <div className={`todo-items-container ${display}`} onClick={() =>{toggle(no)}}>
        {display===""?<img src={not_tick} alt="" />: <img src={tick} alt="" />}
       
        <div className="todo-items-text">{text}</div>
      </div>
      <img className="cross-icon" src={cross}  onClick={()=>{deleteTodo(no)}} alt="" />
    </div>
  )
}




export default Todoitems