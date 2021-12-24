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
    const barcenter = document.querySelector('.containerCenter')
    
    const centerAndRightBar = document.querySelector('.centerAndRightBar')

    const barright = document.querySelector('.barRight')

    // fechado
    if (menus.classList.contains('open')) {
      // encolhe visualmente menus
      menus.style.width = '0'
      // encolhe estrutura de menus da barra esquerda
      barleft.style.width = '0'
      setTimeout(()=> {
        // esconde menu para evitar bug quanto a width
        menus.style.display = 'none'
      }, 250)

      barcenter.style.width = '100vw'
      barcenter.style.minWidth = '100vw'
      
      barcenter.style.padding = '5px'
    }
    // aberto
    else {
      menus.style.display = 'flex'
      menus.style.width = '90px'


      menus.style.marginLeft = 'auto'

      barleft.style.width= '250px'
      container.style.width= '250px'

      barleft.style.padding= '0'
      barleft.style.margin= '0'

      // container.style.padding= '0'
      container.style.margin= '0'
      // container.style.background = '#93d'

      barcenter.style.minWidth = 'calc(100vw - 90px)'
      barcenter.style.width = 'calc(100vw - 90px)'
      
      barcenter.style.marginLeft = 'auto'
      barcenter.style.paddingLeft = '10px'

      // container.style.width= '100px'

      // barleft.style.background = '#000'

      centerAndRightBar.style.width = 'fit-content'
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
              <div className={"pushbtn"}></div>
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
