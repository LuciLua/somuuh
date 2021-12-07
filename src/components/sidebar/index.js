import { FireIcon } from '@heroicons/react/solid'
import styles from './sidebar.module.css'

function Sidebar(){
    return(
        <>
         <div className={styles.containerSidebar}>
            <FireIcon width='30'/>
            <h2>SIDEBAR</h2>
         </div>
        </>
    )
}

export default Sidebar