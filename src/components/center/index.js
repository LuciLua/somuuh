import styles from './center.module.css'
import classNames from 'classnames'

function Center() {
    return (
        <>
            <div className={styles.containerCenter}>
                <div className={styles.social}>
                    <div className={classNames(styles.friends, styles.boxWhite)}>
                        <div className={styles.friend}>
                            <img src='./a.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./b.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./c.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./d.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./e.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./f.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./g.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./a.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./b.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./c.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./d.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./e.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./f.jpg'></img>
                        </div>
                        <div className={styles.friend}>
                            <img src='./g.jpg'></img>
                        </div>
                    </div>
                    <div className={classNames(styles.posts, styles.boxWhite)}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Center