import classNames from "classnames";
import Link from "next/link";
import styles from '../notfound/notfound.module.scss'

const Notfound = () => {
    return (
        <>
        <div className={classNames(styles.notFound, styles.boxWhite)}>
            <h1>Erro 404</h1>
            <p>
                Ops... Parece que não consegui encontrar essa página
            </p>
            <Link href={'/'}>
            <a>
                Voltar para o início
            </a>
            </Link>
        </div>
        </>
    );
}

export default Notfound;