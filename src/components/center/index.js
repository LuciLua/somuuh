import styles from './center.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import SocialBar from './socialbar';

export async function getStaticProps(ctx) {

    const users = [
      {
        id: 1,
        name: "Luci"
      },
      {
        id: 2,
        name: "Luana"
      }
    ]
  
    return {
      props: {
        users
      }
    };
  }

function Center(props) {

    const { users } = props
    console.log(users)

    return (
        <>
            <div className={styles.containerCenter}>
                <div className={styles.social}>
                    <SocialBar/>
                    <div className={classNames(styles.posts, styles.boxWhite)}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Center