import { useState } from 'react';
import './index.css';
import TodoItem from './todoItem';

function App() {
  const [todo, setTodo] = useState([]);  
  const [newTodo, setNewTodo] = useState('');  
  const [editingTodo, setEditingTodo] = useState(null);  
  const [isDone, setIsDone] = useState({});

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const id = new Date().getTime();
    const todoText = newTodo;
    setTodo([...todo, { id: id, text: todoText }]);
    setNewTodo('');
  };

  const deleteTodo = (todoItem) => {
    const updatedTodo = todo.filter((item) => item.id !== todoItem.id);
    setTodo(updatedTodo);
  };

  const editTodo = (todoItem) => {
    setNewTodo(todoItem.text);
    setEditingTodo(todoItem.id);  
  };

  const updateTodo = (e) => {
    e.preventDefault();
    if (editingTodo !== null && newTodo.trim() !== '') {
      const updatedTodo = todo.map((item) =>
        item.id === editingTodo ? { ...item, text: newTodo } : item
      );
      setTodo(updatedTodo);
      setEditingTodo(null);  
      setNewTodo('');  
    }
  };

  const markAsDone = (todoItem) => {
    setIsDone({ ...isDone, [todoItem.id]: !isDone[todoItem.id] });
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={editingTodo ? updateTodo : addTodo}>
        <input
          type="text"
          placeholder="Enter Task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">{editingTodo ? 'Update' : 'Add'}</button>
      </form>

      {todo.map((item) => (
        <TodoItem
          key={item.id}
          todoItem={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          markAsDone={markAsDone}
          isDone={isDone[item.id]}
        />
      ))}
    </div>
  );
}

export default App;
