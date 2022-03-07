import styles from './Card.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { getTheme } from '../../../Store/theme';

const Card = ({children}) =>{
    const theme = useSelector(getTheme);
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return styles['light']
        }else{
            return styles['dark']
        }
    };
    return(
        <div className={clsx(styles['card'], renderTheme(theme))}>
            {children}
        </div>
    )
}

export default Card;