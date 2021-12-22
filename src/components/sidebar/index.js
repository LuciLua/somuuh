import { MusicNoteIcon, UserGroupIcon } from '@heroicons/react/outline'
import styles from './sidebar.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

function Sidebar() {
    return (
        <>
            <div className={styles.containerSidebar}>
                <ul className={classNames(styles.menus, styles.boxWhite)}>
                    <div className={styles.logo}>
                        <span>Social Music</span>
                    </div>
                    <li><p>Grupos</p>
                        <ul className={classNames(styles.menu, styles.menuGrupos)}>
                            <Link href="osu-group">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            !osu group dos melhorres do mundo!
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="nostalgia">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            nostalgia
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="crazy-and-lovers">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <UserGroupIcon className={styles.icoItemMenu} />
                                        <span>
                                            Crazy and Lovers
                                        </span>
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </li>
                    <li><p>Playlists</p>
                        <ul className={classNames(styles.menu, styles.menuPlaylists)}>
                            <Link href="sertanejo">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Sertanejo
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="aurora">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Aurora
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="joao-neto-e-frederico">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Joao Neto e Frederico
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="passarinhos-cantando">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Passarinhos cantando
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="amigos-do-forro">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            amigos do forró
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="calcinha-preta">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Calcinha preta
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="los-hermanos">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Los Hermanos
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="rock">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Rock
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="funk">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            Funk
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="latidos-da-lanny">
                                <a>
                                    <li className={classNames(styles.menuItem)}>
                                        <MusicNoteIcon className={styles.icoItemMenu} />
                                        <span>
                                            latidos da Lanny
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