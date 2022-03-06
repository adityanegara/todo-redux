import styles from './SortBy.module.scss';
import Card from '../../Atoms/Card/Card';
import clsx from 'clsx';
import useMediaQuery from '../../../Hooks/useMediaQueries';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {sortByChangedToActive, sortByChangedToAll, sortByChangedToCompleted, getSortBy} from '../../../Store/sortBy';
import { useEffect } from 'react';

const SortBy = () =>{
    const dispatch = useDispatch();
    const sortBy =  useSelector(getSortBy);

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

    const renderIsActive = (sortBy, buttonType) =>{
        if(sortBy === buttonType){
            return styles['active']
        }
        return;
    }

    const isDesktop = useMediaQuery('(min-width: 600px)');
    const renderSortBy = (isDesktop) =>{
        if(isDesktop !== true){
            return(
                <div className={styles['sort-by']}>
            <Card>
                <div className={styles['button-groups']}>
                    <button onClick={()=>{handleSortByButtonClicked('all')}} className={clsx(renderIsActive(sortBy, 'all'))}>
                        All
                    </button>
                    <button onClick={()=>{handleSortByButtonClicked('active')}} className={clsx(renderIsActive(sortBy, 'active'))}>
                        Active
                    </button>
                    <button onClick={()=>{handleSortByButtonClicked('completed')}} className={clsx(renderIsActive(sortBy, 'completed'))}>
                        Completed
                    </button>
                </div>
            </Card>
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