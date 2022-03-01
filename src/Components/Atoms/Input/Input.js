import styles from './Input.module.scss';

const Input = ({placeholder, name, type}) =>{
    return(
        <input className={styles['input']} type={type} name={name} placeholder={placeholder}/>
    )
}

export default Input;