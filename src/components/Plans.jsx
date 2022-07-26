import React from 'react';
import "./Plans.css"
import { plansData } from '../data/plansData';
import whiteTick from "../assets/whiteTick.png"


const Plans = () => {
    return (
        <>
            <div className="plans-container" id='plans'>
                <div className="blur plans-blur-1"></div>
                <div className="blur plans-blur-2"></div>

                <div className="programs-header" style={{ gap: "2rem" }}>
                    <span className='stroke-text'>READY TO START</span>
                    <span>YOUR JOURNEY</span>
                    <span className='stroke-text'>NOW WITHUS</span>

                </div>
                {/* plans card section strat */}
                <div className="plans">
                    {
                        plansData.map((row, i) => {
                            return (
                                <div className="plan" key={i}>
                                    {row.icon}
                                    <span>{row.name}</span>
                                    <span>$ {row.price}</span>

                                    <div className="features">
                                        {row.features.map((feature, i) => {
                                            return (
                                                <div className="feature">
                                                    <img src={whiteTick} alt="" />
                                                    <span key={i}>{feature}</span>
                                                </div>
                                            )

                                        })}
                                    </div>
                                    <div>
                                        <span>See more benefits-></span>
                                    </div>
                                    <button className='btn'>Join Now</button>

                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default Plans;