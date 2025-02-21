import { useRef, useState } from 'react';
import './App.css';

function App() {
   const [tasks,setTask] = useState([]);

   const inputRef = useRef();
   const taskTextRef = useRef();

   const handleRef = () =>{
    const text = inputRef.current.value;
    const newItem = {completed: false,text}
    setTask([...tasks,newItem]);
    inputRef.current.value = '';
   }

  const textLine = (event,index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTask(newTasks);
    if(newTasks[index].completed){
      event.target.style.textDecoration = 'line-through 3px';
      return;
    }
    event.target.style.textDecoration = 'none';
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTask(newTasks);
    console.log(newTasks);
  }

   return (
     <div className="App">
      <div className='container'>
        <h1 className='header'>To Do List</h1>
        <ul className='tasks'>{tasks.map((item,index) =>{ return <div className='task-div'><li ref={taskTextRef} onClick={(event) => textLine(event,index)}>{item.text}</li> <span onClick={() => deleteTask(index)}>❌</span></div>} )}
        </ul>
        <div className='footer'>
          <input ref={inputRef} className='input'/>
          <button onClick={handleRef} className='button'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
