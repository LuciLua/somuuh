import { FireIcon } from '@heroicons/react/solid'
import styles from './siderightbar.module.css'
import classNames from 'classnames'

function SideRightbar() {
    return (
        <div className={classNames(styles.containerSideRightbar)}>
            <div className={classNames(styles.boxWhite, styles.topList)}>

                <div className={classNames(styles.boxWhite, styles.itemTopListSelect, styles.itemTopList)}>
                    <span>Mais tocada:</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>

                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#2</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#3</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#4</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#5</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#6</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#7</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
                <div className={classNames(styles.boxWhite, styles.itemTopList)}>
                    <span>#8</span>
                    <span>Hoshi no Utsuwa SUKIMASWITCH</span>
                </div>
            </div>
        </div>
    )
}

export default SideRightbar