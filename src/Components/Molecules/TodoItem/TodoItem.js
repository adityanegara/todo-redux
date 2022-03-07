import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import cancelIcon from '../../../Assets/Icons/icon-cross.svg';
import cancelIconDark from '../../../Assets/Icons/icon-cross-dark.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoFinished, todoUnfinished, todoRemoved} from '../../../Store/todos';
import { getTheme } from '../../../Store/theme';

const TodoItem = ({todo}) =>{
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);
    const renderFinish = (isFinish) =>{
        return isFinish ? styles['todo-crossed'] : '';
    }
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return {
                todoItem: styles['todo-item__light'],
                todoButton: styles['todo-button__light'],
                cancelIcon: cancelIcon
            };
        }else{
            return {
                todoItem: styles['todo-item__dark'],
                todoButton: styles['todo-button__dark'],
                cancelIcon: cancelIconDark
            };
        }
    };
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
        <div key={todo.id} className={clsx(styles['todo'], renderTheme(theme).todoItem)}>
        <Checkbox setValue={changeIsFinsih} value={todo.isFinish}/>
        <div className={clsx(styles['todo-description'], renderFinish(todo.isFinish))}>
            <p>{todo.description}</p>
        </div>
        <button onClick={()=>{handleRemoveButton(todo.id)}} className={clsx(styles['todo-button'], renderTheme(theme).todoButton)} aria-label='delete todo'>
            <img alt='cancelIcon' src={renderTheme(theme).cancelIcon}/>
        </button>
    </div>
    )
}

export default TodoItem;