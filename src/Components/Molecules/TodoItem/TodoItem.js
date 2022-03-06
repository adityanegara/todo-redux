import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import cancelIcon from '../../../Assets/Icons/icon-cross.svg';
import { useDispatch } from 'react-redux';
import { todoFinished, todoUnfinished, todoRemoved} from '../../../Store/todos';

const TodoItem = ({todo}) =>{
    const dispatch = useDispatch();
    const renderFinish = (isFinish) =>{
        return isFinish ? styles['todo-crossed'] : '';
    }
    
    const changeIsFinsih = (newIsFinish) =>{
        if(newIsFinish){
            dispatch(todoFinished({ id : todo.id}))
        }else{
            dispatch(todoUnfinished({ id: todo.id}))
        }
    }

    const handleRemoveButton = (id) =>{
        dispatch(todoRemoved({
            id: id
        }))
    }
    return(
        <div key={todo.id} className={styles['todo']}>
        <Checkbox setValue={changeIsFinsih} value={todo.isFinish}/>
        <div className={clsx(styles['todo-description'], renderFinish(todo.isFinish))}>
            <p>{todo.description}</p>
        </div>
        <button onClick={()=>{handleRemoveButton(todo.id)}} className={styles['todo-button']} aria-label='delete todo'>
            <img alt='cancelIcon' src={cancelIcon}/>
        </button>
    </div>
    )
}

export default TodoItem;