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
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </li>
                    <li><p>Playlists</p>
                        <ul className={classNames(styles.menu, styles.menuPlaylists)}>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>                            
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>                            
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>                            
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>                            
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mudno!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar