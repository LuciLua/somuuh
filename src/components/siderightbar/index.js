import { FireIcon } from '@heroicons/react/solid'
import styles from './siderightbar.module.css'
import classNames from 'classnames'

function SideRightbar() {
    return (
        <div className={classNames(styles.containerSideRightbar)}>
            <div className={classNames(styles.boxWhite, styles.topList)}>

            <FireIcon width='30' />
            <div className={styles.itemTopList}>
                Item 1
            </div>
            </div>
        </div>
    )
}

export default SideRightbar