import PropTypes from "prop-types";

function TodoAdd({todo, setTodo, addTodo, handleForToggleAllItemsStatus}) {
    return (
        <div className='input'>
            <span
                className='input__toggle'
                onChange={() => handleForToggleAllItemsStatus}
            >
            </span>
            <input
                type="text"
                className="input__add"
                placeholder='min 3 characters'
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                onKeyUp={addTodo}
            />
        </div>
    );
}

TodoAdd.propTypes = {
    todo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    handleForToggleAllItemsStatus: PropTypes.func.isRequired,
}

export default TodoAdd;