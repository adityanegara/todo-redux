import styles from './Input.module.scss';
import { useSelector } from 'react-redux';
import { getTheme } from '../../../Store/theme';
import clsx from 'clsx';

const Input = ({placeholder, name, type, value, setValue}) =>{
    const theme = useSelector(getTheme);
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return styles['input-light']
        
        }else{
            return styles['input-dark']
        }
    };
    const changeValue = (newValue) =>{
        setValue(newValue);
    }
    return(
        <input autoComplete='off' className={clsx(styles['input'], renderTheme(theme))} type={type} value={value} onChange={(e)=>{changeValue(e.target.value)}} name={name} placeholder={placeholder}/>
    )
}

export default Input;