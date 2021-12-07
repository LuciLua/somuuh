import styles from './center.module.css'
import classNames from 'classnames'
import Image from 'next/image'

function Center() {
    return (
        <>
            <div className={styles.containerCenter}>
                <div className={styles.social}>
                    <div className={classNames(styles.friends, styles.boxWhite)}>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/a.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/b.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/c.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/d.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/e.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/f.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/g.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/a.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/b.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/c.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/d.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/e.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/f.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
                        </div>
                        <div className={styles.friend}>
                            <Image
                                alt='imagem de um amigo'
                                src='/g.jpg'
                                width='200'
                                height='200'
                                layout='responsive'
                            />
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