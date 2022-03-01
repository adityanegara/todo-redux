import styles from './Checkbox.module.scss';

const Checkbox = () =>{
    return(
        <label className={styles['container']}>
        <input type="checkbox" />
        <span className={styles['checkmark']}/>
        </label>
    )    
}

export default Checkbox;