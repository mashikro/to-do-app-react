import React from "react";

function handleCheck() {
    console.log("Changed!");
}

function TodoItem(props) {
    return (
        <div className="todo-list">
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={handleCheck}
            />
            <p>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem;
