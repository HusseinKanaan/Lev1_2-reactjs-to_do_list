import './TodoList.css'
import todos from './TodoData'
import TodoItem from './TodoItem'

const TodoList =(props) => {
    return(
        <div className='todoStyleContainer'>
            <input checked type="checkbox" />
            <h1>{props.erste}</h1>
            <h1>{props.zweite}</h1>
            <h1>{props.dritte}</h1>
            <h1>{props.vierte}</h1>
        </div>
    );
};

export default TodoList; 