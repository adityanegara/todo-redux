import styles from './Input.module.scss';

const Input = ({placeholder, name, type, value, setValue}) =>{
    const changeValue = (newValue) =>{
        setValue(newValue);
    }
    return(
        <input className={styles['input']} type={type} value={value} onChange={(e)=>{changeValue(e.target.value)}} name={name} placeholder={placeholder}/>
    )
}

export default Input;