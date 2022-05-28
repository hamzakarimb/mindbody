import React, {useRef, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'
import TextSlideUp from '../../effect/TextSlideUp'

function Hero() {
    const [pulse, setPulse] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef();
    const img =["images/hero1.jpg", "images/hero2.jpg", "images/hero3.jpg"]

    const settings = {
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 5000,
        cssEase: "linear",
        afterChange: current => setActiveIndex(current)
    };

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };


  return (
    <section id='hero'>
        {
            pulse&&
            <>
                <h1>
                    <TextSlideUp>
                        Next level digital
                    </TextSlideUp>
                </h1>

                <h1>
                    <TextSlideUp>
                        For you Business
                    </TextSlideUp>
                </h1>

                <h5>
                    <TextSlideUp>
                        Mi amet auctor ornare at ante tellus pretium lobortis. Leo ac donec semper risus cursus at aliquam nulla. Tellus lectus lacus in lobortis diam laoreet vel quam.
                    </TextSlideUp>        
                </h5>
            </>
        }
        

        <motion.div className="btn-container"
            initial={{opacity:0}}
            animate={pulse&&{opacity:1}}
        >
            <a href="/contact">
                <button>start project</button>
            </a>
            
            <a href="/portfolio">
                <button className='btn-second'>see portfolio</button>
            </a>
        </motion.div>

        <motion.div className="circle"
            initial={{y:'-100vw'}}
            animate={{y:0}}
            transition={{duration:1, delay:0.5}}
            onAnimationComplete={()=>setPulse(true)}
        >
            <Slider {...settings} ref={sliderRef}>
                {
                    img.map((item)=>(
                        <div className="slide-hero">
                            <img src={item} alt="" />
                        </div> 
                    ))
                }
            </Slider>
            <ul className="btn-circle-container">
                {
                    img.map((item, index)=>(
                        <li onClick={()=>handleOnClick(index)} style={activeIndex===index?{background:"#E57D21" ,border:"3px solid #fff"}:null}></li>  
                    ))
                }
            </ul>
            
        </motion.div>

        <motion.div className="acc"
            initial={{y:'-100vw'}}
            animate={{y:0}}
            transition={{duration:1}}
        ></motion.div>
    </section>
  )
}

export default Hero