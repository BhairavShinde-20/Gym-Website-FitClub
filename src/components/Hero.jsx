import React from 'react';
import Header from './Header';
import "./Hero.css"
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";


const Hero = () => {

    const transition = {type:'spring',duration:3}  
    const mobile =window.innerWidth<=768 ? true:false;  

    return (
        <>
            <div className="hero" id='hero'>
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    {/* the best add section start */}
                    <div className="the-best-ad">
                        <motion.div 
                        initial={{left:mobile? "150px":"230px"}}
                        whileInView={{left:'8px'}}
                        transition={{...transition, type:'tween'}}
                        
                        ></motion.div>
                        <span> the best fitness club in the town</span>

                    </div>
                    {/* the best add section end */}
                    {/* hero text section stat */}
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'> Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest
                            </span>
                        </div>

                    </div>
                    {/* hero text section end */}
                    {/* figures section start */}
                    <div className="figures">
                        <div><span><NumberCounter end={140} start={100} delay={4} preFix="+"/>
                            </span><span>expert coachs</span></div>

                        <div><span><NumberCounter end={978} start={500} delay={8} preFix="+"/>
                        </span><span>members joined</span></div>

                        <div><span><NumberCounter end={50} start={0} delay={2} preFix="+"/>
                        </span><span>fitness programs</span></div>


                    </div>
                    {/* fogures section end */}
                    {/* hero button start */}
                    <div className="hero-buttons">
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>

                    </div>
                    {/* hero button end */}
                </div>
                {/* left-h end */}
                <div className="right-h">


                    <button className='btn'>Join Now</button>
                    <motion.div
                    initial={{right :'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}

                    
                    className="heart-rate">
                        <img src={heart} alt="" />
                        <span>Heart Rate </span><span>116 bpm</span>
                    </motion.div>
                    {/* hero img section start */}
                    <img src={hero_image} alt="" className='hero_image' />
                    <motion.img 
                    initial={{right :'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                    
                    src={hero_image_back} alt="" className='hero_image_back' />
                    {/* calories section strat */}
                    <motion.div
                    initial={{right :'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                    
                    
                    className="calories">
                        <img src={calories} alt="" />
                        <div>
                            <span>Calories Burned </span><span>220 kcal</span>
                        </div>
                    </motion.div>

                </div>
            </div>

        </>
    );
};

export default Hero;