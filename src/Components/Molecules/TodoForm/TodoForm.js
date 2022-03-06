import styles from './TodoForm.module.scss';
import { useState } from 'react';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import Input from '../../Atoms/Input/Input';
import CreateButton from '../../Atoms/CreateButton/CreateButton';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../../../Store/todos';

const TodoForm = () =>{
    const dispatch = useDispatch();
    const [isFinish, setIsFinish] = useState(false);
    const [description , setDescription] = useState('');
    const handleSubmit = (event, isFinish, description) =>{
        event.preventDefault();
        dispatch(todoAdded({
            isFinish: isFinish,
            description: description
        }))
    } 
    return(
        <form onSubmit={(e)=>{handleSubmit(e, isFinish, description)}} className={styles['todo-form']}>
            <Checkbox value={isFinish} setValue={setIsFinish}/>
            <Input value={description} setValue={setDescription} type={"text"} placeholder={"Create a new todo..."} name={"todo"}/>
            <CreateButton text={"+"} ariaLabel="Create ToDo"/>
        </form>
    )
}

export default TodoForm;