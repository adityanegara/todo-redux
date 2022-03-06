import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoSummary from '../TodoSummary/TodoSummary';
import { useSelector } from 'react-redux';
import { getFinishTodos, getTodos, getUnfinishTodos } from '../../../Store/todos';
import { getSortBy } from '../../../Store/sortBy';


const TodoList = () =>{
    const todos = useSelector(getTodos);
    const unfinishedTodos = useSelector(getUnfinishTodos);
    const finishedTodos = useSelector(getFinishTodos)
    const sortBy = useSelector(getSortBy);
    
    const test = (sortBy) =>{
        if(sortBy === 'all'){
            return todos;
        }
        else if(sortBy === 'active'){
            return unfinishedTodos;
        }else if(sortBy === 'completed'){
           return finishedTodos;
        }
    }
  
    const renderTodoList = (todoList) =>{
        return todoList.map((todo) => {
            return(
            <div key={todo.id}>
                <TodoItem todo={todo}/>
            </div>
            )
        })
    }
    return(
        <div className={styles['todo-list']}>
            {renderTodoList(test(sortBy))}
            
            <TodoSummary/>
        </div>
    )
}

export default TodoList;