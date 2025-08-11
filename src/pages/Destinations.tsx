import { useState } from "react"
import { DestinationTabsMenu } from "../components/TabsMenu";
import PageTitle from "../components/PageTitle";
import PageTextContent from "../components/PageTextContent";

type destinationType = {
  name: string,
  images: {
    png:  string,
    webp: string
  },
  description: string,
  distance: string,
  travel: string
}
const defaultDestination = {
  name: '',
  images: {
    png:  '',
    webp: ''
  },
  description: '',
  distance: '',
  travel: ''
}
function getCachedDestination(): destinationType[] {
  const data = sessionStorage.getItem('destination');
  if(data) return JSON.parse(data);
  return Array(defaultDestination);
}

export default function Destination({destinationData}: {destinationData:destinationType[]}){
  const [currIndex, setCurrIndex] = useState<number>(0);
  if(!destinationData){
    destinationData = getCachedDestination();
  }
  return(
    <section className="destination">
      <PageTitle
        number='01'
        title='PICK YOUR DESTINATION'
      />
      <div className="destination-item">
        <div className="destination-item__img"><img src={destinationData[currIndex]?.images.webp} alt="" /></div>
        <div className="destination-item__content">
          <div className="destination-item__tabsMenu-wrapper">
            <DestinationTabsMenu data={
              destinationData.map((el, index) => { return {name: el.name, handler: ()=>setCurrIndex(index), isCurr: currIndex === index} })
            } />
          </div>
          <div className="destination-item__text-wrapper">
            <PageTextContent theme='destination'
              textSm={destinationData[currIndex]?.description}
              textMd=''
              textLg={destinationData[currIndex]?.name}
            />
          </div>
          <hr className="destination-item__line"/>
          <div className="destination-item__statistics">
            <LiteralValue 
              name='AVG. DISTANCE'
              value={destinationData[currIndex]?.distance}
            />
            <LiteralValue 
              name='Est. travel time'
              value={destinationData[currIndex]?.travel} 
            />
          </div>

        </div>
      </div>

    </section>
  )
}

function LiteralValue({name, value}: {[k:string]:string}){
  return(
    <div className="literal-value">
      <p className="literal-value__name">{name}</p>
      <h4 className="literal-value__value">{value}</h4>
    </div>
  )
}
