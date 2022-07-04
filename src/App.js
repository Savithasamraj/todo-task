// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  let addTask = () => {
    setList([
      ...list,
      { id: list.length + 1, name: currentTask, isDone: false },
    ]);
  };

  let markDone = (id) => {
    let itemindex = list.findIndex((obj) => obj.id === id);
    // list[itemindex].isDone = true;
    setList([...list]);
    console.log(setList)
    if(list[itemindex].isDone===false){
      list[itemindex].isDone=true;

    }
    else if(list[itemindex].isDone===true){
      list[itemindex].isDone=false;
    }
  };
  let del=(id)=>{
    let remove=list.findIndex((obj) => obj.id === id);
    list.splice(remove,1)
    setList([...list]);
    
  }
  return (
    <div className="box">
      <input type="text" onChange={(e) => setCurrentTask(e.target.value)} />
      <button className="done"onClick={addTask}>add task</button>
      <ul>
        {list.map((item) => {
          return (
            <li className={item.isDone ? "mark-done" : ""}>
              {item.name}-
              <button  className="done" onClick={() => markDone(item.id)}>done </button>- <button className="done" onClick={()=>del(item.id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
