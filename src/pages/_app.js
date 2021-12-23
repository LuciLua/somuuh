import Sidebar from "../components/sidebar";
import SideRightbar from "../components/siderightbar";
import Bottombar from "../components/bottombar";

import "../styles/globals.scss";
import SocialBar from "../components/center/socialbar";

function App({ Component, pageProps }) {
  function openCloseMenuLeft() {
    const menus = document.querySelector('.menus')
    const container = document.querySelector('.containerSidebar')
    menus.classList.toggle('open')
    container.classList.toggle('open')

    const barleft = document.querySelector('.barleft')
    const barcenter = document.querySelector('.social')

    // aberto
    if (menus.classList.contains('open')) {
      menus.style.width = '0px'
      menus.style.display = 'none'
      barleft.style.width = '0'
      barcenter.style.width = '100%'

    }
    else {
      // fechado
      menus.style.display = 'flex'
      menus.style.width = '100%'
      barleft.style.width = '250px'
      barcenter.style.width = 'calc(100vw - 90px)'
    }
  }

  return (
    <div className="wrap">
      {/* Top, left and Right bar */}
      <main>
        {/* Left bar */}
        <div className="bars barleft">
          <div className="pushbtnmenu" onClick={openCloseMenuLeft}></div>
          <Sidebar />
        </div>
        {/* Center and Right bar */}
        <div className="centerAndRightBar">
          {/* Center */}
          <div className={"containerCenter"}>
            <div className={"social"}>
              {/* Top bar */}
              <div className={'pushbtn'}></div>
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
