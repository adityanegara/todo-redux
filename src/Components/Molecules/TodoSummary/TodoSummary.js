import styles from './TodoSummary.module.scss';

const TodoSummary = () =>{
    return(
        <div className={styles['todo-summary']}>
            <div className={styles['todo-summary__content']}>
                <p>5 items left</p>
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