import PropTypes from "prop-types";


function Counter({todos}) {
    return (
        <p className="box__counter">{todos.filter((task) => task.status === 'in progress').length} items left</p>
    );
}

Counter.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default Counter;