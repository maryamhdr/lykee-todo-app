import {useEffect, useState} from 'react';
import './modal.scss';

const Modal = ({closeModal, addMode, todo, addTodo, editTodo}) => {
    const [localTodo, setLocalTodo] = useState({});

    useEffect(() => {
        if (todo) {
            setLocalTodo(todo);
        }
    }, [todo]);

    const handleAddOrEditTodo = () => {
        if (localTodo.title.length < 1) return;
        addMode ? addTodo(localTodo) : editTodo(localTodo);
    }

    const handleInputChange = (e) => {
        setLocalTodo(previousState => {
            return {...previousState, title: e.target.value}
        });
    }

    return (
        <div className="modal">
            <div className={`modal-box ${addMode ? "add-modal-box" : "edit-modal-box"}`}>
                <button className="close-btn"
                        type="button"
                        title="Close modal"
                        onClick={closeModal}>
                    &times;
                </button>
                <div className="modal-desc">
                    {addMode ? "Enter todo title." : "Edit todo title."}
                </div>
                <input name="input"
                       className="input"
                       type="text"
                       autoComplete="off"
                       autoFocus={true}
                       placeholder="Todo..."
                       required
                       value={localTodo.title}
                       onChange={handleInputChange}/>
                <button className="modal-btn"
                        type="button"
                        title={addMode ? "Add todo" : "Edit todo"}
                        onClick={handleAddOrEditTodo}>
                    {addMode ? "Add" : "Edit"}
                </button>
            </div>
        </div>
    )
}

export default Modal;