import Sidebar from "../components/sidebar";
import SideRightbar from "../components/siderightbar";
import Center from "../components/center";
import Bottombar from "../components/bottombar";

import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <div className="wrap">
      <main>
        <div className="bars barleft">
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
        <Component {...pageProps} />
      </aside>
    </div>
  );
}

export default App
