import { Link } from "react-router-dom"
import PageTextContent from "../components/PageTextContent"

export default function Home(){
  return(
    <section className="home">
      <div className="home__text-wrapper">
        <PageTextContent theme='home'
          textSm='Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'
          textMd='SO, YOU WANT TO TRAVEL TO'
          textLg='SPACE'
        />
      </div>
      <button className="button-wrapper">
        <Link className="home__exploreBtn" to='/destination'>explore</Link>
      </button>
    </section>
  )
}