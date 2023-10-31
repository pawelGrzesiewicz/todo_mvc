import './App.scss';
import {useState} from "react";
import {getId} from "./helpers/helpers.js";
import {Headline} from "./components/Headline.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import {DeleteAllBtn} from "./components/DeleteAllBtn.jsx";


function App() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [filters, setFilters] = useState('all')

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
                    todos={todos}
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTodo={handleDeleteTodo}
                />

                <div className="box">
                    <Counter todos={todos}/>
                    <div>
                        <button className={filters === 'all' ? 'current' : ""}
                                onClick={() => setFilters('all')}>All
                        </button>
                        <button className={filters === 'active' ? 'current' : ""}
                                onClick={() => setFilters('active')}>Active
                        </button>
                        <button className={filters === 'done' ? 'current' : ""}
                                onClick={() => setFilters('done')}>Done
                        </button>
                    </div>
                    <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks}/>


                </div>
            </section>
        </div>
    );
}

export default App;

// return (
//     <div>
//         <h1>todos</h1>
//         <input
//             type="text"
//             value={value}
//             onChange={handleValue} // dodanie zdarzenia na dana funkcje
//             onKeyUp={handleAddTodo}
//         />
//         <ul className="todos">
//             {todos
//                 .filter((todo) => filters === 'all' ? true : filters === todo.status)
//                 .map((todo) => (
//                     <li className="todo" key={todo.id}>
//                         {/*terner operation -dodanie klasy dynamicznie*/}
//                         <span className={todo.status === 'active' ? 'status' : 'status done'}
//                               onClick={() => handleChangeStatus(todo)}
//                         ></span>
//                         <span>{todo.name}</span>
//                         <button className="btn-delete"
//                                 onClick={()=>handleDeleteTodo(todo)}
//                         >Delete</button>
//                     </li>
//                 ))}
//         </ul>
//         <p> {todos.filter((todo) => todo.status === 'active').length} items left</p>
//         <div>
//             <button className={filters === 'all' ? 'current' : ""} onClick={() => setFilters('all')}>All</button>
//             <button className={filters === 'active' ? 'current' : ""} onClick={() => setFilters('active')}>Active</button>
//             <button className={filters === 'done' ? 'current' : ""} onClick={() => setFilters('done')} >Done</button>
//         </div>
//         {/*conditional rendering*/}
//         {!!todos.filter((todo)=> todo.status === 'done').length && (
//             <button onClick={handleDeleteAllDoneTodos}>Clear completed</button>
//         )}
//     </div>
// );