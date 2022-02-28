import styles from './Header.module.scss';
import nightIcon from '../../../Assets/Icons/icon-moon.svg';
import Title from '../../Atoms/Title/Title';
import ThemeButton from '../../Atoms/ThemeButton/ThemeButton';

const Header = () =>{
    return(
        <div className={styles['header']}>
        <Title text={'TODO'}/>
        <ThemeButton/>
        </div> 
    )
}

export default Header;