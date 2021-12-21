import Sidebar from '../components/sidebar'
import SideRightbar from '../components/siderightbar'
import Center from '../components/center'
import Bottombar from '../components/Bottombar'


const NotFound = () => {
    return ( 
        <>
        <div className="wrap">
          <main>
            <div className="bars barleft">
              <Sidebar />
            </div>
            <div className="centerAndRightBar">
              {/* <Center /> */}
              <div className="bars barRight">
                <SideRightbar />
              </div>
            </div>
          </main>
          <aside>
            <Bottombar />
          </aside>
        </div>
      </>
     );
}
 
export default NotFound;