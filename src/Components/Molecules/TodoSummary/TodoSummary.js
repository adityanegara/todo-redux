import styles from './TodoSummary.module.scss';
import useMediaQuery from '../../../Hooks/useMediaQueries';
import { useDispatch } from 'react-redux';
import { filterFinished, getTodos} from '../../../Store/todos';
import { useSelector} from 'react-redux';

const TodoSummary = () =>{
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery('(min-width: 600px)');

    const handleClearCompletedClicked = () =>{
        dispatch(filterFinished());
    }
    
    const renderSortBy = (isMobile) => {
        if(isMobile){
            return(
                <div className={styles['button-group']}>
                <button>
                    All
                </button>
                <button>Active</button>
                <button>
                    Completed
                </button>
            </div>
            )
        }
    };
    return(
        <div className={styles['todo-summary']}>
            <div className={styles['todo-summary__content']}>
                <p>{`${useSelector(getTodos).length} items left`}</p>
                {renderSortBy(isDesktop)}
                <div className={styles['button-group']}>
                    <button onClick={handleClearCompletedClicked}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoSummary;