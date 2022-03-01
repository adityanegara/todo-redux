import styles from './TodoList.module.scss';
import Todo from '../Todo/Todo';
import TodoSummary from '../TodoSummary/TodoSummary';
import TODOS from '../../../Dummy/Todos';



const TodoList = () =>{
    const renderTodoList = (todoList) =>{
        return todoList.map((todo) => {
            return(
                <div key={todo.id}>
                <Todo todo={todo}/>
                </div>
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