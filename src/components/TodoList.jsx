import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

function TodoList({filteredTodos, handleChangeStatus, handleDeleteTodo}) {
    return (
        <ul className="list">
            {filteredTodos.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    filteredTodos: PropTypes.array.isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
}

export default TodoList;