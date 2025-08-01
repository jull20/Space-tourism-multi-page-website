import Navigation from "./Navigations"

export default function Header({onOpen}: {onOpen:()=>void}){
  return(
    <header className="header">
        <img className="header__logo" src="shared/logo.svg" alt="logo" />
        <button className="header__side-menu" onClick={onOpen}>
            <img width={24} height={21} src="shared/icon-hamburger.svg" alt="side menu icon" />
        </button>
        <Navigation />
    </header>
  )
}

