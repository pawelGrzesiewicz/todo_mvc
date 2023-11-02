import './App.scss';
import {useState} from "react";
import {getId} from "./helpers/helpers.js";
import {Headline} from "./components/Headline.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import {DeleteAllBtn} from "./components/DeleteAllBtn.jsx";
import {Filtered} from "./components/Filtered.jsx";


function App() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [filters, setFilters] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState(todos);

    const handleAddTodo = (evt) => {
        if (evt.key === "Enter" && todo.trim().length >= 1) {
            setTodos([{
                id: getId(todos),
                status: 'in progress',
                title: todo
            }, ...todos]);
            setTodo('');
        }
    };

    const handleChangeStatus = (task) => {
        task.status = task.status === 'in progress' ? 'done' : 'in progress';
        setTodos([...todos]);
    };

    const handleDeleteTodo = (todo) => {
        setTodos(todos.filter((task) => task !== todo));
    };

    const updateFilteredTodos = (filter) => {
        if (filter === 'all') {
            setFilteredTodos(todos);
        } else if (filter === 'active') {
            setFilteredTodos(todos.filter((task) => task.status === 'in progress'));
        } else if (filter === 'done') {
            setFilteredTodos(todos.filter((task) => task.status === 'done'));
        }
    };


    const handleDeleteDoneTasks = () => {
        setTodos(todos.filter((task) => task.status !== 'done'));
    };


    return (
        <div className="todoapp">
            <Headline/>
            <section className="todos">
                <TodoAdd
                    todo={todo}
                    setTodo={setTodo}
                    addTodo={handleAddTodo}
                />
                <TodoList
                    filteredTodos={filteredTodos}
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTodo={handleDeleteTodo}
                />

                <div className="box">
                    <Counter todos={todos}/>
                    <Filtered
                        filters={filters}
                        setFilters={setFilters}
                        handleFilterChange={updateFilteredTodos}
                    />
                    <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks}/>


                </div>
            </section>
        </div>
    );
}

export default App;
