import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
    return (
        <div className={styles.container}>
            <div className={styles.boxContent}>
                <HeaderSideBar
                    icon={<TfiReload size='24px' />}
                    title='COMPARE'
                />
                <ItemProduct />
            </div>
            <div className={styles.boxBtn}>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
