import Sidebar from "../components/sidebar";
import SideRightbar from "../components/siderightbar";
import Bottombar from "../components/bottombar";

import "../styles/globals.scss";
import SocialBar from "../components/center/socialbar";

function App({ Component, pageProps }) {
  return (
    <div className="wrap">
      {/* Top, left and Right bar */}
      <main>
        {/* Left bar */}
        <div className="bars barleft">
          <Sidebar />
        </div>
        {/* Center and Right bar */}
        <div className="centerAndRightBar">
          {/* Center */}
          <div className={"containerCenter"}>
            <div className={"social"}>
              {/* Top bar */}
              <SocialBar />
              {/* Posts..404..etc mutable pages */}
              <Component {...pageProps} />
            </div>
          </div>
          {/* Right bar */}
          <div className="bars barRight">
            <SideRightbar />
          </div>
        </div>
      </main>
      {/* Bottom bar */}
      <aside>
        <Bottombar />
      </aside>
    </div>

  );
}

export default App
