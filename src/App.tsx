import { useState }      from 'react'
import { Route, Routes } from 'react-router-dom'
import { createPortal }  from 'react-dom'
import Header            from './components/Header'
import Home              from './pages/Home'
import Destination       from './pages/Destinations'
import Crew              from './pages/Crew'
import Technology        from './pages/Technology'
import SideMenu          from './components/SideMenu'
import data              from './assets/data.json'
import './css/App.css'

export default function App() {
  const [isSideMenuVisible, setSideMenuVisible] = useState<boolean>(false);
  cachedData();
  return (
    <>
      <Header onOpen={() => setSideMenuVisible(true)}/>
      <main className='main'>
        <Routes>
          <Route path='/'            element={<Home />}/>
          <Route path='/destination' element={<Destination destinationData={data.destinations}/>}/>
          <Route path='/crew'        element={<Crew crewData={data.crew}/>}/>
          <Route path='/technology'  element={<Technology technologyData={data.technology}/>}/> 
        </Routes>
      </main>
      {
        isSideMenuVisible && createPortal( <SideMenu onClose={() => setSideMenuVisible(false)}/>, document.body )
      }
    </>
  )
}

function cachedData(){
  const cachedData = sessionStorage.getItem('data');
  if(!cachedData){
    sessionStorage.setItem('destination', JSON.stringify(data.destinations));
    sessionStorage.setItem('crew',        JSON.stringify(data.crew));
    sessionStorage.setItem('technology',  JSON.stringify(data.technology));
  }
}


