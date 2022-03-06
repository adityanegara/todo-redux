import styles from './Checkbox.module.scss';

const Checkbox = ({value, setValue}) =>{
    return(
        <div className={styles['checkbox-container']}>
               <label className={styles['container']}>
                <input type="checkbox" checked={value} onChange={(e)=>{setValue(e.target.checked)}}/>
                <span className={styles['checkmark']}/>
                </label>
        </div>
     
    )    
}

export default Checkbox;