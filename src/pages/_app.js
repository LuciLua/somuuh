import Sidebar from "../components/sidebar";
import SideRightbar from "../components/sideRightbar";
import Center from "../components/center";
import Bottombar from "../components/bottombar";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="wrap">
      <main>
        <div className="bars">
          <Sidebar />
        </div>
        <div className="centerAndRightBar">
          <Center />
          <div className="bars barRight">
            <SideRightbar />
          </div>
        </div>
      </main>
      <aside>
        <Bottombar />
        {/* <Component {...pageProps} /> */}
      </aside>
    </div>
  );
}

export default App;
