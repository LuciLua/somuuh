import classNames from "classnames";
import styles from '../posts/posts.module.scss'


const Posts = () => {
    return (
        <div className={classNames(styles.posts, styles.boxWhite)}>
            <h1>
                Posts
            </h1>
        </div>
    );
}

export default Posts;