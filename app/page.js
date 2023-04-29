import Menu from "./Menu";
import Link from "next/link";
import './GlobalStyles/menu.css'
//import './GlobalStyles/home.css'
import './GlobalStyles/variables.css' 
import './GlobalStyles/globals.css'
import './GlobalStyles/home.css'
import './GlobalStyles/typography.css'
import homeimg from '../public/images/homeimg.png'
import Image from 'next/image'

export default function Home () {
  return (
    <>
    <Menu></Menu>
    <main className="home-content">
        <div className="intro">
            <h3>Hi, Im Ida.</h3>
            <h1>Frontend developer</h1>
            <h4>Currently studying to become a Frontend/App Developer at Changemaker Educations.</h4>
            <Link href="/About" class="learn-more-link">Learn more</Link>
        </div>
        <div className="home-image">
          <Image className ="home-img" src={homeimg} alt=""/>
        </div>
    </main>
</>
  )
}
