import styles from './Todo.module.scss';
import Header from '../../Molecules/Header/Header';
import Container from '../../Atoms/Container/Container';
import Card from '../../Atoms/Card/Card';
import TodoForm from '../../Molecules/TodoForm/TodoForm';
import TodoList from '../../Molecules/TodoList/TodoList';
import SortBy from '../../Molecules/SortBy/SortBy';
import { useSelector } from 'react-redux';
import { getTheme } from '../../../Store/theme';
import clsx from 'clsx';
const Todo = () =>{
    const theme = useSelector(getTheme);
    
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return styles['todo-background__light'];
        }else{
            return styles['todo-background__dark'];
        }
    }
    return(
        <div className={clsx(styles['todo'], renderTheme(theme))}>
            <div className={styles['todo-content']}>
                <Container>
                    <Header />
                    <div className={styles['todo-form__container']}>
                        <Card>
                            <TodoForm/>
                        </Card>
                    </div>
                    <div className={styles['todo-list__container']}>
                       <TodoList/>
                    </div>
                    <div className={styles['todo-sortby__container']}>
                        <SortBy/>
                    </div>
                   
                </Container>
            </div>
        </div>
    )
}

export default Todo;