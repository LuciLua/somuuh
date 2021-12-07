import { MusicNoteIcon, UserGroupIcon } from '@heroicons/react/outline'
import styles from './sidebar.module.css'
import classNames from 'classnames'

function Sidebar() {
    return (
        <>
            <div className={styles.containerSidebar}>
                <ul className={classNames(styles.menus)}>
                    <li><span>Grupos</span>
                        <ul className={classNames(styles.menu, styles.menuGrupos)}>
                            <li className={classNames(styles.menuItem)}>
                                <UserGroupIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    !osu group!
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <UserGroupIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Nostalgia
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <UserGroupIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Amo passas
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li> <span>playlists</span>
                        <ul className={classNames(styles.menu, styles.menuPlaylists)}>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Adele
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Aurora
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Sertanejo
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar