
import './TodoItem.css';

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onClick(props.id);
  };

  const updateTodo = () => {
    props.onHover(props.id);
  };

  const boolclass = props.id === props.currentId ? 'current-todo' : '';

  return (
    <div className={`todo ttt-${boolclass}`}>
       <label className="todo-label" >{props.text}</label>
      
        <button type="button" onClick={updateTodo}>Edit</button>
      
        <button type="button" onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
