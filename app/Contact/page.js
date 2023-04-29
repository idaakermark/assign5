import Menu from "../Menu"
import Link from "next/link"
import contactimg from '../../public/images/contactimg.png'
import Image from 'next/image'
import '../GlobalStyles/contact.css'
import '../GlobalStyles/variables.css' 
import '../GlobalStyles/globals.css'
import '../GlobalStyles/home.css'
import '../GlobalStyles/typography.css'

export default function Contact () {

    return (
        <div className="Contact">
            <Menu></Menu>
                <main className="contact-content">
                    <section className="form">
                        <form action="mailto:idaakermark@live.com" method="post" enctype="text/plain">
                            <h1 className='contact-title'>Let´s talk!</h1>
                            <h3 className='contact-subtitle'>Get in touch via the form below, or by emailing <span class="highlight">idaakermark@live.com</span></h3>
                            <label for="firstname">First name:</label>
                            <br></br>
                            <input type="text" id="firstname" name="firstname" required></input>
                            <br></br>
                            <br></br>
                            <label for="lastname">Last name:</label>
                            <br></br>
                            <input type="text" id="lastname" name="lastname" reguired></input>
                            <br></br>
                            <br></br>
                            <label for="email">E-mail:</label>
                            <br></br>
                            <input type="text" id="email" name="email" required></input>
                            <br></br>
                            <br></br>
                            <label for="message">Message:</label>
                            <br></br>
                            <textarea type="text" id="message" name="message" required></textarea>
                            <br></br>
                            <br></br>
                            <input type="submit" value="Send"></input>
                            <br></br>
                        </form>
                    </section>

                    <div className="image-contact">
                    <Image className ="contact-img" src={contactimg} alt=""/> 
                    </div>
                </main>


        </div>
    )
}