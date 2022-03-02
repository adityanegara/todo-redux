import styles from './SortBy.module.scss';
import Card from '../../Atoms/Card/Card';
import clsx from 'clsx';
import useMediaQuery from '../../../Hooks/useMediaQueries';

const SortBy = () =>{
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const renderSortBy = (isDesktop) =>{
        if(isDesktop !== true){
            return(
                <div className={styles['sort-by']}>
            <Card>
                <div className={styles['button-groups']}>
                    <button className={clsx(styles['active'])}>
                        All
                    </button>
                    <button>
                        Active
                    </button>
                    <button>
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