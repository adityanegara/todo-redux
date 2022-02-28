import styles from './Todo.module.scss';
import nightIcon from '../../../Assets/Icons/icon-moon.svg'
import Header from '../../Molecules/Header/Header';

const Todo = () =>{
    return(
        <div className={styles['todo']}>
            <div className={styles['todo-content']}>
                <Header />
            </div>
        </div>
    )
}

export default Todo;