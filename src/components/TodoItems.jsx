import "./CSS/Todo.css";
import check_mark from "./assets/check_mark.png";
import not_check from "./assets/not_check.png";
import remove from "./assets/remove.png";

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo)=> todo.no!==no);
    setTodos(data);
  }

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0;i < data.length;i++)
    {
      if(data[i].no===no) {
        if (data[i].display==="") {
          data[i].display = "line-through";
        }
        else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={()=> {toggle(no)}}>
        {display===""?<img src={not_check} alt="" />:<img src={check_mark} alt="" />}
        
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-remove-icon" onclick={()=>{deleteTodo(no)}} src={remove} alt=""/>
    </div>
  );
};

export default TodoItems;
