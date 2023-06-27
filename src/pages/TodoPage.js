import {useEffect, useState} from 'react';
import TodoItem from "../components/TodoItem/TodoItem";
import Header from '../components/Header/Header';
import Tab from '../components/Tab/Tab';
import Modal from '../components/Modal/Modal';
import TAB_STATE from "../constants/tabState";
import './todo-page.scss';

const TodoPage = () => {
    const [todoList, setTodoList] = useState([]);
    const [filteredTodoList, setFilteredTodoList] = useState([]);
    const [isAddOrEditModalOpen, setIsAddOrEditModalOpen] = useState(false);
    const [addMode, setAddMode] = useState(true);
    const [currentTodo, setCurrentTodo] = useState({});
    const [activeTab, setActiveTab] = useState(TAB_STATE.all);

    useEffect(() => {
        filterTodoList();
    }, [activeTab, todoList]);

    const onCloseModal = () => setIsAddOrEditModalOpen(false);

    const onToggleAddModal = () => {
        setIsAddOrEditModalOpen(true);
        setAddMode(true);
        setCurrentTodo({
            id: todoList.length + 1,
            title: "",
            isActive: true
        })
    }

    const onToggleEditModal = (todoId) => {
        setIsAddOrEditModalOpen(true);
        setAddMode(false);
        const targetTodoIndex = todoList.findIndex(todo => todo.id === todoId);
        setCurrentTodo(todoList[targetTodoIndex]);
    }

    const onAddTodo = (todo) => {
        setIsAddOrEditModalOpen(false);
        setTodoList(todoList.concat(todo));
    }

    const onEditTodo = (editedTodo) => {
        setIsAddOrEditModalOpen(false);
        setTodoList(todoList.map((todo) => {
            if (todo.id === editedTodo.id)
                todo.title = editedTodo.title;
            return todo;
        }));
    }

    const onDeleteTodo = (todoId) => {
        setTodoList(todoList.filter(todo => todo.id !== todoId));
    }

    const onToggleTodo = (todoId) => {
        setTodoList(todoList.map((todo) => {
            if (todo.id === todoId)
                todo.isActive = !todo.isActive;
            return todo;
        }));
    }

    const onToggleTab = (tab) => {
        setActiveTab(tab);
    }

    const filterTodoList = () => {
        switch (activeTab) {
            case TAB_STATE.all:
                setFilteredTodoList(todoList);
                break;
            case TAB_STATE.inProgress:
                setFilteredTodoList(todoList.filter(todo => {
                    return todo.isActive
                }));
                break;
            case TAB_STATE.completed:
                setFilteredTodoList(todoList.filter(todo => {
                    return !todo.isActive
                }));
                break;
        }
    }

    return (
        <div className="main-container">
            <Header/>
            <button className="add-todo-btn" type="button" title="Add todo"
                    onClick={onToggleAddModal}>
                Add todo
                <span className="add-icon"></span>
            </button>
            <div className="main-content">
                <div className="main-title">Progress</div>
                <Tab tabToggled={onToggleTab}/>
                <div className="main-title">Todos</div>
                <div className="list">
                    {filteredTodoList.length > 0 ?
                        filteredTodoList.map(item => <TodoItem key={item.id}
                                                               todoItem={item}
                                                               todoEdited={onToggleEditModal}
                                                               todoDeleted={onDeleteTodo}
                                                               todoToggled={onToggleTodo}/>) :
                        <div className="empty-state">
                            No todos yet!
                        </div>
                    }
                </div>
            </div>

            {isAddOrEditModalOpen &&
                <Modal closeModal={onCloseModal}
                       addMode={addMode}
                       todo={currentTodo}
                       addTodo={onAddTodo}
                       editTodo={onEditTodo}/>}
        </div>
    );
}

export default TodoPage;