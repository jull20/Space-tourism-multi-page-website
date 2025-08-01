import { useState }      from 'react'
import { Route, Routes } from 'react-router-dom'
import { createPortal }  from 'react-dom'
import Header            from './components/Header'
import Home              from './components/Home'
import Destination       from './components/Destinations'
import Crew              from './components/Crew'
import Technology        from './components/Technology'
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





