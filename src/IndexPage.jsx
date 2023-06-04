import React from 'react'
import './IndexPage.css'
import insta from './assetes/insta.png';
import fb from './assetes/fb.png';
import tw from './assetes/tw.png';
import videobg from './assetes/1.mp4';
import videobg2 from './assetes/2.mp4';
import Imagegb from './assetes/bg.png';
import card from './assetes/card.png';
import card1 from './assetes/card1.png';
import card2 from './assetes/card2.png';
import card3 from './assetes/card3.png';
import back22 from './assetes/back22.jpg';
import { Link } from 'react-router-dom';
import backip2 from './assetes/backip2.jpg';
import ram from './assetes/ram.png';
import Navbar from './Navbar';
import {useTypewriter} from 'react-simple-typewriter';

function IndexPage() {
    const [text] = useTypewriter({
      words : ["Welcome", "Start Exploring", "Type Writing"],
      loop : true,
      typeSpeed :120,
      deleteSpeed :80
    });
 return (
    <div class="indexPage">
      <Navbar />
    <header id="home">
      <video src={videobg} autoPlay loop muted/>
      <div className="text" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="2000">
      <h2>{text}|</h2>
        <h3>right now</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aut vel eius sint dolorem ratione minima aperiam laborum tempora repudiandae !</p>
        <a href="#" data-aos="fade-up" data-aos-duration="4000"><img src={Imagegb} alt="" width="40px" height="40px" />Login</a>
      </div>
      <div className='social-icons' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
      <a href="#"><img src={insta} alt="" width="40px" height="40px" /></a>
      <a href="#"><img src={fb} alt="" width="40px" height="40px" /></a>
      <a href="#"><img src={tw} alt="" width="40px" height="40px" /></a>
      </div>
    </header>
    <section id="services" className="about">
    {/* <video autoplay muted loop id="bg-video-services">
      <source src={videobg2} type="video/mp4" />
    </video> */}
        <div className="text">
          <h2 data-aos="fade-up"
     data-aos-easing="ease-in-out"
     data-aos-duration="1000">services</h2>
          <p data-aos="fade-up"
     data-aos-easing="ease-in-out"
     data-aos-duration="1500"> going on or continuing while one is fully employed</p>
        </div>  
        <div className="card-division"  data-aos="fade-up-left" data-aos-duration="1000">
          <div className="card">
            <div className="card-image"> 
              <img src={card} alt="" />
            </div>
            <div className="card-text">
              <h3>Internet</h3>
              <p>To Provide Internet</p>
              <p>Services like Saas</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image"> 
              <img src={card1} alt="" />
            </div>
            <div className="card-text">
              <h3>Internet</h3>
              <p>To Provide Internet</p>
              <p>Services like Saas</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image"> 
              <img src={card2} alt="" />
            </div>
            <div className="card-text">
              <h3>Internet</h3>
              <p>To Provide Internet</p>
              <p>Services like Saas</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image"> 
              <img src={card3} alt="" />
            </div><div className="card-text">
              <h3>Internet</h3>
              <p>To Provide Internet</p>
              <p>Services like Saas</p>
            </div>
          </div>
        </div>
      <div class="scroll-arrow">
          <svg width="30px" height="20px">
              <path 
                stroke="#ffffff"
                fill="none"
                stroke-width="2px"
                d="M2.000,5.000 L15.000,18.000 L28.000,5.000">
              </path>
          </svg>
      </div>  
    </section>
    <section className="self" id="about">
      <img src={back22} />
      <div className="self-content">
        <div className="self-text">
          <h3 data-aos="zoom-in" data-aos-duration="1000">Hello,its me</h3>
            <h1 data-aos="zoom-in" data-aos-duration="1100">Suriya Anand</h1>
            <h4 data-aos="zoom-in" data-aos-duration="1300">Lorem, ipsum dolor sit amet consectetur</h4>
            <Link to="/contact" style={{color:'black'}} class="btn">
              <div class="hover"></div>
              Contact
          </Link>
          <a href="contact.html" className="btn">
            <div class="hover"></div>
            <span>Message</span>
        </a>
        </div>
        <div className="self-image"  data-aos="zoom-in-up" data-aos-duration="2000">
          <img src={backip2} id='bg' />
          <img src={ram}  id='bg1'/>
        </div>
      </div>
      <div class="scroll-arrow">
          <svg width="30px" height="20px">
              <path 
                stroke="#ffffff"
                fill="none"
                stroke-width="2px"
                d="M2.000,5.000 L15.000,18.000 L28.000,5.000">
              </path>
          </svg>
      </div>
    </section>
    </div>
  )
}

export default IndexPage