import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-list">
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
            />
            <p>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem;
