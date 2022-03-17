import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoSummary from '../TodoSummary/TodoSummary';
import { useSelector } from 'react-redux';
import { getFinishTodos, getTodos, getUnfinishTodos } from '../../../Store/todos';
import { getSortBy } from '../../../Store/sortBy';
import { useTransition, animated } from 'react-spring';

const TodoList = () =>{
    const todos = useSelector(getTodos);
    const unfinishedTodos = useSelector(getUnfinishTodos);
    const finishedTodos = useSelector(getFinishTodos)
    const sortBy = useSelector(getSortBy);

    const transitionConfiguration = {
        from: {opacity: 0, transform: 'translate(0,-50%)'},
        enter: {opacity: 1, transform: 'translate(0,0%)'},
        leave: {opacity: 0, transform: 'translate(0, -50%)'},
    }


 
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

    const transition = useTransition(test(sortBy), transitionConfiguration);

    const renderTodoListAnimated = () =>{
        const fragment = transition((style, item)=>{
            return <animated.div style={style}>
                    <TodoItem todo={item}/>
            </animated.div>
        })
        return fragment;
    }


    return(
        <div className={styles['todo-list']}>
            {renderTodoListAnimated()}
            <TodoSummary/>
        </div>
    )
}

export default TodoList;