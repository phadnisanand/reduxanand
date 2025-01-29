import './App.css';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo,updateTodo } from "./features/todoSlice";
import  TodoItem  from './components/TodoItem';

function App() {
  //const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [isEditing, setEditing] = useState(false);
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentTodoText, setCurrentTodoText] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef()
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

   // handle text update
  const handleUpdateText = (e) => {
     // setEditing(true);
     e.preventDefault();
    // console.log(input , currentId);
     dispatch(updateTodo({currentId, input}));
     setEditing(false);
     setCurrentId('');
  };

  const onEditToggle = ( id, text) => {
     setEditing(true);
     setCurrentId(id);
     const currentTodoCalc = todos.filter((todo) => todo.id === id);
     setCurrentTodo(currentTodoCalc[0]);
     setCurrentTodoText(currentTodoCalc[0].text);
   //  inputRef.current.value = currentTodoCalc[0].text;
      // inputRef.current.value = 'text';

      inputRef.current.value = currentTodoCalc[0].text;
  }

  return (
    <div  className="todoapp stack-large">
      <h1>TODO List</h1>

       <form className="App-form" onSubmit={isEditing ? handleUpdateText : handleAddTodo}>
        <input type="text" ref={inputRef} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">{isEditing ? 'Edit Todo': 'Add Todo'}</button>
      </form>

      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onClick={handleTodoDone}
              onHover={onEditToggle}
              isEditing= {isEditing}
              currentId= {currentId}
            />
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}

export default App;
