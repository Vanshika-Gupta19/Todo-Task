import React from "react";

function TodoItem({ todoItem, deleteTodo, editTodo, markAsDone, isDone }) {
  return (
    <div className={`todo-wrap ${isDone ? 'done' : ''}`}>
      <span>{todoItem.text}</span>
      <div className="todo-buttons">
        <button className="done" onClick={() => markAsDone(todoItem)}>
          {isDone ? 'Undo' : 'Done'}
        </button>
        <button className="edit" onClick={() => editTodo(todoItem)}>Edit</button>
        <button className="delete" onClick={() => deleteTodo(todoItem)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;

