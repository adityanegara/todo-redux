import styles from './Todo.module.scss';
import Header from '../../Molecules/Header/Header';
import Container from '../../Atoms/Container/Container';
import Card from '../../Atoms/Card/Card';
import TodoForm from '../../Molecules/TodoForm/TodoForm';

const Todo = () =>{
    return(
        <div className={styles['todo']}>
            <div className={styles['todo-content']}>
                <Container>
                    <Header />
                    <div className={styles['todo-form__container']}>
                        <Card>
                            <TodoForm/>
                        </Card>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Todo;