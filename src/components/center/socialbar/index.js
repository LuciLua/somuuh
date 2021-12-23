import classNames from 'classnames'
import styles from '../socialbar/socialbar.module.scss'
import Image from 'next/image'

const SocialBar = () => {
    return (
        <div className={classNames(styles.friends, styles.boxWhite)}>
            <div className={styles.pushbtn}>

            </div>
                        <div className={styles.friend}>
                            <label>Nome</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/a.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/b.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    priority
                                    alt='imagem de um amigo'
                                    src='/c.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/d.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/e.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/f.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/g.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/a.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/b.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/c.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/d.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/e.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/f.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                       <div className={styles.friend}>
                            <label>Name</label>
                            <div className={styles.imgFriend}>
                                <Image
                                    alt='imagem de um amigo'
                                    src='/g.jpg'
                                    width='200'
                                    height='200'
                                    layout='responsive'
                                />
                            </div>
                        </div>
                    </div>
     );
}
 
export default SocialBar;