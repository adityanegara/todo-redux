import styles from './Todo.module.scss';
import clsx from 'clsx';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import cancelIcon from '../../../Assets/Icons/icon-cross.svg';

const Todo = ({todo}) =>{
    const renderFinish = (isFinish) =>{
        return isFinish ? styles['todo-crossed'] : '';
    }
    return(
        <div className={styles['todo']}>
        <Checkbox/>
        <div className={clsx(styles['todo-description'], renderFinish(todo.isFinish))}>
            <p>{todo.description}</p>
        </div>
        <button className={styles['todo-button']} aria-label='delete todo'>
            <img alt='cancelIcon' src={cancelIcon}/>
        </button>
    </div>
    )
}

export default Todo;