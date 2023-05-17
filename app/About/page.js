import Menu from "../Menu"
import "../GlobalStyles/about.css"
import "../GlobalStyles/variables.css" 
import "../GlobalStyles/globals.css"
import "../GlobalStyles/home.css"
import "../GlobalStyles/typography.css"
import aboutimg from "../../public/images/aboutimg.png"
import Image from "next/image"

export default function About () {

    return (
        <div className="About">
            <Menu></Menu>
            <main className="about-content">
                <div className="about-me">
                    <h1>About me</h1>
                    <p className="about-text">Hi there, my name is Ida and i am 25 years old.</p>
                    <p className="about-text">I enjoy creating things that live on the internet. My interest in web development started when I was 12 and decided to edit and redesign my blog - turns out hacking together a custom blog design taught me a lot about HTML & CSS!</p>
                    <p className="about-text">Fast-forward to today, I’m currently studying to become a Frontend/ app developer. Even though the struggle with imposter syndrome is real, I have found a nerdy love for figuring out how to solve the problems and errors that comes with coding. I am eager to learn more about the world of web development and the beauty behind building useful websites. </p>
                </div>

                <div className="about-image">
                    <Image className ="about-img" src={aboutimg} alt=""/>  
                </div>
            </main>
        </div>
    )
}