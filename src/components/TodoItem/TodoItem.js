import {useEffect, useState} from "react";
import './todo-item.scss';

const TodoItem = ({todoItem, todoEdited, todoDeleted, todoToggled}) => {
    const [todo, setTodo] = useState({
        id: 0,
        title: "This is a task",
        isActive: true
    });

    useEffect(() => {
        if (todoItem) {
            setTodo(todoItem);
        }
    }, [todoItem]);

    const toggleTodo = () => {
        todoToggled(todo.id);
    }

    const editTodo = () => {
        todoEdited(todo.id);
    }

    const deleteTodo = () => {
        todoDeleted(todo.id);
    }

    return (
        <div className="item">
            <div className="item-title-wrapper">
                <i className={`fa fa-tasks item-icon ${todo.isActive ? "in-progress-item" : "completed-item"}`}></i>
                <div className="item-title" title={todo.title}>{todo.title}</div>
            </div>
            <div className="item-btn-wrapper">
                <button className={`item-btn ${todo.isActive ? "in-progress-btn" : "complete-btn"}`}
                        type="button"
                        title={todo.isActive ? "Complete" : "In progress"}
                        onClick={toggleTodo}></button>
                <button className="item-btn edit-btn" type="button" title="Edit" onClick={editTodo}></button>
                <button className="item-btn delete-btn" type="button" title="Delete" onClick={deleteTodo}></button>
            </div>
        </div>
    )
}

export default TodoItem;