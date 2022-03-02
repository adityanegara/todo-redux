import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoSummary from '../TodoSummary/TodoSummary';
import TODOS from '../../../Dummy/Todos';



const TodoList = () =>{
    const renderTodoList = (todoList) =>{
        return todoList.map((todo) => {
            return(
           
                <TodoItem key={todo.id} todo={todo}/>
              
            )
        })
    }
    return(
        <div className={styles['todo-list']}>
            {renderTodoList(TODOS)}
            
            <TodoSummary/>
        </div>
    )
}

export default TodoList;