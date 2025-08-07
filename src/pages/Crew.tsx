import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle";
import {Pagination} from "../components/Pagination";
import PageTextContent from "../components/PageTextContent";
// import data from '../assets/data.json'

type crewType = {
  name: string,
  images: {
    png:  string,
    webp: string
  },
  role: string,
  bio: string
}

export default function Crew(){
    const [crewData, setCrewData] = useState<crewType[]>(new Array(0));
    const [currIndex, setCurrIndex] = useState<number>(0);
    useEffect(() => {
      fetch('data.json').then((response) => {
        if(!response.ok) console.log('bad response')
        return response.json()
      }).then((data) => {
        if(crewData.length === 0) setCrewData(data.crew);
      })
    })
    // console.log(data)
  return(
    <section className="crew">
      <PageTitle
        number='02'
        title='MEET YOUR CREW'
      />
      <div className="crew-item">
        <div className="crew-item__content">
          <div className="crew-item__text-wrapper">
            <PageTextContent theme='technology'
              textSm={crewData[currIndex]?.bio}
              textMd={crewData[currIndex]?.role}
              textLg={crewData[currIndex]?.name}
            />
          </div>
          <div className="crew-item__pagination-wrapper">
            <Pagination length={crewData.length} handler={(ind:number) => setCurrIndex(ind)}/>
          </div>
        </div>
        <div className="crew-item__img">
          <img src={crewData[currIndex]?.images.png} alt="" />
        </div>
      </div>
    </section>
  )
}

