import styles from './ThemeButton.module.scss';
import nightIcon from '../../../Assets/Icons/icon-moon.svg';
import dayIcon from '../../../Assets/Icons/icon-sun.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTheme, themeChangedToDark, themeChangedToLight } from '../../../Store/theme';

const ThemeButton = () =>{
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);
    
    const handleThemeButtonClicked = (isThemeDark) =>{
        if(isThemeDark){
            dispatch(themeChangedToLight());
        }else{
            dispatch(themeChangedToDark());
        }
    }

    const renderIcon = (isThemeDark) =>{
        if(isThemeDark){
            return nightIcon;
        }else{
            return dayIcon;
        }
    }
    return(
        <button onClick={()=>{handleThemeButtonClicked(theme)}} className={styles['theme-button']} aria-label='Change Theme'>
            <img alt='theme' src={renderIcon(theme)}/>
        </button>
    )
}

export default ThemeButton;