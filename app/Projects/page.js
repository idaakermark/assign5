import Menu from "../Menu"
import Link from "next/link"
import '../GlobalStyles/variables.css' 
import '../GlobalStyles/globals.css'
import '../GlobalStyles/typography.css'
import '../GlobalStyles/projects.css'
import pro1 from '../../public/images/pro1.png'
import pro2 from '../../public/images/pro2.png'
import pro3 from '../../public/images/pro3.png'
import pro4 from '../../public/images/pro4.png'
import pro5 from '../../public/images/pro5.png'
import Image from 'next/image'

export default function Projects () {

    return (
        <div className="Projects">
            <Menu></Menu>
            <main className='all-projects'>
                <h1 className='project-title'>Projects</h1>
                <hr></hr>
                <div className="project-1">
                    <h3>Switching between articles</h3>
                    <p>This was my first react project. It includes three articles that you can switch between on a button click. Or you can list all articles by clicking that button.</p>
                    <Image className="pro-img" src={pro1} alt=""/> 
                    <a href="https://github.com/idaakermark/jr-week1.git">Link to GitHub repo</a>
                </div>
                <hr></hr>
                <div className="project-2">
                    <h3>Node, npm, Git, GitHub, DateTime</h3>
                    <p>In this project i have added different functions that write the date and time and more!</p>
                    <Image className="pro-img" src={pro2} alt=""/> 
                    <a href="https://github.com/idaakermark/jr-week2.git">Link to GitHub repo</a>
                </div>
                <hr></hr>
                <div className="project-3">
                    <h3>Build Tools, CSS, Personal Project</h3>
                    <p>In this project I have copied a aldready made design to work on the pixel perfectness! The site counts down the years, months and days until graduation.</p>
                    <Image className="pro-img" src={pro3} alt=""/>
                    <a href="https://jr-week3.vercel.app/">Link to project</a>
                </div>
                <hr></hr>
                <div className="project-4">
                    <h3>Connecting to an API</h3>
                    <p>In this project i have connected to a pokemon API. On each button click you get a new pokemon.</p>
                    <Image className="pro-img" src={pro4} alt=""/>
                    <a href="https://assign4.vercel.app/">Link to project</a>
                </div>
                <hr></hr>
                <div className="project-5">
                    <h3>Portfolio</h3>
                    <p>My portfolio</p>
                    <Image className="pro-img" src={pro5} alt=""/>
                </div>
            </main>
        </div>
    )
}