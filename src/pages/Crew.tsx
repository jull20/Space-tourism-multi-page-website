import { useState } from "react"
import PageTitle from "../components/PageTitle";
import {Pagination} from "../components/Pagination";
import PageTextContent from "../components/PageTextContent";
import data from '../assets/data.json'

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
    const [currIndex, setCurrIndex] = useState<number>(0);
    const crewData: crewType[] = data.crew; 
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

