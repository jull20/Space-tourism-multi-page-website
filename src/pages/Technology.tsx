import { useState } from "react";
import PageTitle from "../components/PageTitle";
import PageTextContent from "../components/PageTextContent";
import {NumberedPagination} from "../components/Pagination";

type technologyType = {
  name: string,
  images:{
    portrait:string,
    landscape:string
  },
  description: string
}
const defaultTechnology = {
  name: '',
  images:{
    portrait:'',
    landscape:''
  },
  description: ''
}
function getCachedTechnology(): technologyType[] {
  const data = sessionStorage.getItem('crew');
  if(data) return JSON.parse(data);
  return Array(defaultTechnology);
}

export default function Technology({technologyData}: {technologyData:technologyType[]}){
  const [currIndex, setCurrIndex] = useState<number>(0);
  if(!technologyData){
    technologyData = getCachedTechnology();
  }
  return(
    <section className="technology">
      <PageTitle
        number='03'
        title='SPACE LAUNCH 101'
      />
      <div className="technology-item">
        <div className="technology-item__content">
          <div className="technology-item__pagination-wrapper">
            <NumberedPagination length={technologyData.length} handler={(ind:number) => setCurrIndex(ind)}/>
          </div>
          <div className="technology-item__text-wrapper">
            <PageTextContent theme='technology'
              textSm={technologyData[currIndex]?.description}
              textMd='THE TERMINOLOGY…'
              textLg={technologyData[currIndex]?.name}
            />
          </div>
        </div>
        <picture className="technology-item__img">
          <img src={technologyData[currIndex]?.images.portrait} alt="" />
        </picture>
      </div>
    </section>
  )
}