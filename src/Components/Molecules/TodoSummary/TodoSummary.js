import styles from './TodoSummary.module.scss';
import useMediaQuery from '../../../Hooks/useMediaQueries';

const TodoSummary = () =>{
    const isDesktop = useMediaQuery('(min-width: 600px)');
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
                <p>5 items left</p>
                {renderSortBy(isDesktop)}
                <div className={styles['button-group']}>
                    <button>
                        Clear
                    </button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default TodoSummary;