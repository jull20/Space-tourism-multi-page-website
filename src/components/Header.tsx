import {HeaderTabsMenu} from "./TabsMenu"

export default function Header({onOpen}: {onOpen:()=>void}){
  return(
    <header className="header">
        <div className="header__logo-wrapper">
          <img className="header__logo" src="shared/logo.svg" alt="logo" />
          <hr className="header__logo-line"/>
        </div>
        <button className="header__side-menu" onClick={onOpen}>
            <img width={24} height={21} src="shared/icon-hamburger.svg" alt="side menu icon" />
        </button>
        <div className="header__navigation-wrapper">
          <HeaderTabsMenu />
        </div>
    </header>
  )
}

