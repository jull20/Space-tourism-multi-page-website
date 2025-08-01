import { Link, useLocation } from "react-router-dom"

export default function Navigation(){
    const pathes = [
        {path: '/',            name: 'home'},
        {path: '/destination', name: 'destination'},
        {path: '/crew',        name: 'crew'},
        {path: '/technology',  name: 'technology'},
    ];
    let location = useLocation()
    return(
        <nav className="navigation">
            <ol start={0} className="navigation__list">
                {pathes.map((el, index) => {
                    return (
                        <li key={index} className={"navigation__link " + (location.pathname===el.path ? 'currentPage' : '')}><Link to={el.path}>{el.name}</Link></li>
                    )
                })}
            </ol>
        </nav>
    )
}