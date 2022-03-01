import styles from './Checkbox.module.scss';

const Checkbox = () =>{
    return(
        <div className={styles['checkbox-container']}>
               <label className={styles['container']}>
                <input type="checkbox" />
                <span className={styles['checkmark']}/>
                </label>
        </div>
     
    )    
}

export default Checkbox;