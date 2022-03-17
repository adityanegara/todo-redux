import styles from './TodoSummary.module.scss';
import useMediaQuery from '../../../Hooks/useMediaQueries';
import { useDispatch } from 'react-redux';
import { filterFinished, getTodos, getUnfinishTodos, getFinishTodos} from '../../../Store/todos';
import {getTheme} from '../../../Store/theme';
import { useSelector} from 'react-redux';
import { getSortBy, sortByChangedToActive, sortByChangedToAll, sortByChangedToCompleted} from '../../../Store/sortBy';
import clsx from 'clsx';

const TodoSummary = () =>{
    const dispatch = useDispatch();
    const sortBy = useSelector(getSortBy)
    const theme = useSelector(getTheme);
    const isDesktop = useMediaQuery('(min-width: 800px)');
    const todos = useSelector(getTodos);
    const unfinishedTodos = useSelector(getUnfinishTodos);
    const finishedTodos = useSelector(getFinishTodos)

    const getLength = (sortBy) =>{
        if(sortBy === 'all'){
            return todos.length;
        }
        else if(sortBy === 'active'){
            return unfinishedTodos.length;
        }else if(sortBy === 'completed'){
           return finishedTodos.length;
        }
    }
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return {
                todoSummary: styles['todo-summary__light'],
                button: styles['button-light']
            }
          
        }else{
            return {
                todoSummary: styles['todo-summary__dark'],
                button: styles['button-dark']
            }
        }
    };
    const handleSortByButtonClicked = (type) =>{
        if(type === 'all'){
            dispatch(sortByChangedToAll());
        }
        else if(type === 'active'){
            dispatch(sortByChangedToActive());
        }else if(type === 'completed'){
            dispatch(sortByChangedToCompleted());
        }
    }

    const renderIsActive = (sortBy, buttonType) =>{
        if(sortBy === buttonType){
            return styles['active']
        }
        return;
    }


    const handleClearCompletedClicked = () =>{
        dispatch(filterFinished());
    }
    
    const renderSortBy = (isMobile) => {
        if(isMobile){
            return(
                <div className={styles['button-group']}>
                <button onClick={()=>{handleSortByButtonClicked('all')}} className={clsx(renderIsActive(sortBy, 'all'), renderTheme(theme).button)}>
                    All
                </button>
                <button onClick={()=>{handleSortByButtonClicked('active')}} className={clsx(renderIsActive(sortBy, 'active'), renderTheme(theme).button)}>Active</button>
                <button onClick={()=>{handleSortByButtonClicked('completed')}} className={clsx(renderIsActive(sortBy, 'completed'), renderTheme(theme).button)}>
                    Completed
                </button>
            </div>
            )
        }
    };
    return(
        <div className={clsx(styles['todo-summary'], renderTheme(theme).todoSummary)}>
            <div className={styles['todo-summary__content']}>
                <p>{`${getLength(sortBy)} items left`}</p>
                {renderSortBy(isDesktop)}
                <div className={styles['button-group']}>
                    <button className={renderTheme(theme).button} onClick={handleClearCompletedClicked}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoSummary;