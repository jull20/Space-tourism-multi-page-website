import { useState }      from 'react'
import { Route, Routes } from 'react-router-dom'
import { createPortal }  from 'react-dom'
import Header            from './components/Header'
import Home              from './pages/Home'
import Destination       from './pages/Destinations'
import Crew              from './pages/Crew'
import Technology        from './pages/Technology'
import SideMenu          from './components/SideMenu'
import './css/App.css'

export default function App() {
  const [isSideMenuVisible, setSideMenuVisible] = useState<boolean>(false);
  return (
    <>
      <Header onOpen={() => setSideMenuVisible(true)}/>
      <main className='main'>
        <Routes>
          <Route path='/'            element={<Home />}/>
          <Route path='/destination' element={<Destination />}/>
          <Route path='/crew'        element={<Crew />}/>
          <Route path='/technology'  element={<Technology />}/> 
        </Routes>
      </main>
      {
        isSideMenuVisible && createPortal( <SideMenu onClose={() => setSideMenuVisible(false)}/>, document.body )
      }
    </>
  )
}

// type dataType = {
//   crew: crewType[],
//   destinations: destinationType[],
//   technology: technologyType[]
// }
// type destinationType = {
//   name: string,
//   images: {
//     png:  string,
//     webp: string
//   },
//   description: string,
//   distance: string,
//   travel: string
// }
// type crewType = {
//   name: string,
//   images: {
//     png:  string,
//     webp: string
//   },
//   role: string,
//   bio: string
// }
// type technologyType = {
//   name: string,
//   images:{
//     portrait:string,
//     landscape:string
//   },
//   description: string
// }



