import styles from './ThemeButton.module.scss';
import nightIcon from '../../../Assets/Icons/icon-moon.svg';
import dayIcon from '../../../Assets/Icons/icon-sun.svg';

const ThemeButton = () =>{
    return(
        <button className={styles['theme-button']} aria-label='Change Theme'>
            <img alt='theme' src={nightIcon}/>
        </button>
    )
}

export default ThemeButton;