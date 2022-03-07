import styles from './SortBy.module.scss';
import clsx from 'clsx';
import useMediaQuery from '../../../Hooks/useMediaQueries';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {sortByChangedToActive, sortByChangedToAll, sortByChangedToCompleted, getSortBy} from '../../../Store/sortBy';
import {getTheme} from '../../../Store/theme';

const SortBy = () =>{
    const dispatch = useDispatch();
    const sortBy =  useSelector(getSortBy);
    const theme = useSelector(getTheme);
    const handleSortByButtonClicked = (type) =>{
        if(type === 'all'){
            dispatch(sortByChangedToAll());
        }
        else if(type === 'active'){
            dispatch(sortByChangedToActive());
        }else if(type === 'completed'){
            dispatch(sortByChangedToCompleted());
        }
    }
    const renderTheme = (isThemeDark) =>{
        if(isThemeDark){
            return {
                buttonGroups: styles['button-groups__light'],
                button: styles['sortby-button__light'],
            }
        }else{
            return {
                buttonGroups: styles['button-groups__dark'],
                button: styles['sortby-button__dark'],
            }
        }
    }
    const renderIsActive = (sortBy, buttonType) =>{
        if(sortBy === buttonType){
            return styles['active']
        }
        return;
    }

    const isDesktop = useMediaQuery('(min-width: 800px)');
    const renderSortBy = (isDesktop) =>{
        if(isDesktop !== true){
            return(
                <div className={styles['sort-by']}>
          
                <div className={clsx(styles['button-groups'], renderTheme(theme).buttonGroups)}>
                    <button onClick={()=>{handleSortByButtonClicked('all')}} className={clsx(renderIsActive(sortBy, 'all'), renderTheme(theme).button)}>
                        All
                    </button>
                    <button onClick={()=>{handleSortByButtonClicked('active')}} className={clsx(renderIsActive(sortBy, 'active'), renderTheme(theme).button)}>
                        Active
                    </button>
                    <button onClick={()=>{handleSortByButtonClicked('completed')}} className={clsx(renderIsActive(sortBy, 'completed'), renderTheme(theme).button)}>
                        Completed
                    </button>
                </div>
          
        </div>
            )
            
        }else{
            return(
                <>
                </>
            )
        }
    }
    return(
        <div className={styles['sort-by']}>
           {renderSortBy(isDesktop)}
        </div>
    )
}

export default SortBy;