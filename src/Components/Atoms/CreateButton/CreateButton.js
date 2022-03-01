import styles from './CreateButton.module.scss';

const CreateButton = ({text, ariaLabel}) =>{
    return(
        <button aria-label={ariaLabel} className={styles['create-button']} type='submit'>{text}</button>
    )
}

export default CreateButton;