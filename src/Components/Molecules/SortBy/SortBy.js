import styles from './SortBy.module.scss';
import Card from '../../Atoms/Card/Card';
import clsx from 'clsx';

const SortBy = () =>{
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
}

export default SortBy;