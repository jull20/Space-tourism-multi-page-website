import { useState } from "react"
import PageTitle from "../components/PageTitle";
import {Pagination} from "../components/Pagination";
import PageTextContent from "../components/PageTextContent";

type crewType = {
  name: string,
  images: {
    png:  string,
    webp: string
  },
  role: string,
  bio: string
}
const defaultCrew = {
name: '',
  images: {
    png:  '',
    webp: ''
  },
  role: '',
  bio: ''
}
function getCachedCrew(): crewType[] {
  const data = sessionStorage.getItem('crew');
  if(data) return JSON.parse(data);
  return Array(defaultCrew);
}

export default function Crew({crewData}: {crewData:crewType[]}){
  const [currIndex, setCurrIndex] = useState<number>(0);
  if(!crewData){
    crewData = getCachedCrew();
  }
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

