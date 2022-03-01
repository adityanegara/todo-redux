import styles from './TodoForm.module.scss';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import Input from '../../Atoms/Input/Input';
import CreateButton from '../../Atoms/CreateButton/CreateButton';

const TodoForm = () =>{
    return(
        <form className={styles['todo-form']}>
   
               <Checkbox/>
            
            <Input type={"text"} placeholder={"Create a new todo..."} name={"todo"}/>
            <CreateButton text={"+"} ariaLabel="Create ToDo"/>
        </form>
    )
}

export default TodoForm;