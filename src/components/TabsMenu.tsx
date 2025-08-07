import { Link, useLocation } from "react-router-dom"

type destinationMenuType = {
    name: string, 
    isCurr: boolean,
    handler: () => void
}

export function HeaderTabsMenu(){
    const pathes = [
        {path: '/',            name: 'home'},
        {path: '/destination', name: 'destination'},
        {path: '/crew',        name: 'crew'},
        {path: '/technology',  name: 'technology'},
    ];
    let location = useLocation();
    return(
        <nav className="headerTabsMenu">
            <ol start={0} className="headerTabsMenu__list">
                {pathes.map((el, index) => {
                    return (
                        <li 
                            key={index} 
                            className={"headerTabsMenu__link " + (location.pathname===el.path ? `currentPage ${el.name}-bg`  : '')}
                        >
                            <Link to={el.path}>{el.name}</Link>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
export function DestinationTabsMenu({data}: {data: destinationMenuType[]}){
    return(
        <nav className="destinationTabsMenu">
            <ul className="destinationTabsMenu__list">
                {
                    data.map((el, index) => {
                        return (
                            <li key={index} className={"destinationTabsMenu__link " + (el.isCurr ? 'currentPage' : '')}>
                                <a href="#" onClick={el.handler}>{el.name}</a>
                            </li>
                    )})
                }
            </ul>
        </nav>
    )
}