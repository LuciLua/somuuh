import { MusicNoteIcon, UserGroupIcon } from '@heroicons/react/outline'
import styles from './sidebar.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

function Sidebar() {
    return (
        <>
            <div className={styles.containerSidebar}>
                <ul className={classNames(styles.menus, styles.boxWhite)}>
                    <li><p>Grupos</p>
                        <ul className={classNames(styles.menu, styles.menuGrupos)}>
                            <li className={classNames(styles.menuItem)}>
                                <UserGroupIcon className={styles.icoItemMenu} />
                                <Link href="/osu-group">
                                <a>
                                    !osu group!
                                </a>
                                </Link>
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
                    <li><p>Playlists</p>
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
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    POP
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Lady Gaga
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Engenheiros do Hawaii
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Funk
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    POP
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Lady Gaga
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Engenheiros do Hawaii
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Funk
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    POP
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Lady Gaga
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Engenheiros do Hawaii
                                </a>
                            </li>
                            <li className={classNames(styles.menuItem)}>
                                <MusicNoteIcon className={styles.icoItemMenu} />
                                <a href='./'>
                                    Funk
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