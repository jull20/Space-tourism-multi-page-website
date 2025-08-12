import { useState } from "react";
import {HeaderTabsMenu}   from "./TabsMenu";

export default function SideMenu({onClose}: {onClose:()=>void}){
    const [startCloseAnimation, setStartCloseAnimation] = useState<boolean>(false);
    const closeHandle = () => {
        setStartCloseAnimation(true);
        setTimeout(() => {
            onClose();
        }, 1500);
    }
    return(
        <div className='sideMenu' onClick={closeHandle}>
            <div 
                onClick={(event:React.MouseEvent<HTMLElement>) => event.stopPropagation()} 
                className={"sideMenu__content " + (startCloseAnimation ? 'closeMenuAnimation' : '')}
            >
                <button className="sideMenu__close" onClick={closeHandle}>
                    <img width={19} height={19} src="shared/icon-close.svg" alt="icon for closing the side menu" />
                </button>
                <HeaderTabsMenu />
            </div>
        </div>
    )
}