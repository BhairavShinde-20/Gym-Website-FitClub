import React from 'react';
import "./Program.css";
import { programsData } from '../data/programsData';
import rightArrow from "../assets/rightArrow.png";
const Program = () => {
    return (
        <>
            <div className="Programs" id='programs'>
                <div className="programs-header">
                    <span className='stroke-text'>EXPLORE OUR </span>
                    <span>PROGRAMS </span>
                    <span className='stroke-text'>TO SHAPE YOU</span>
                </div>
                <div className="programs-categories">
                    {programsData.map((row) => {
                        return (
                            <div className="category">
                                {row.image}
                                <span>{row.heading}</span>
                                <span>{row.details}</span>
                                <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="" /></div>

                            </div>
                        )
                    })

                    }
                </div>

            </div>
        </>
    );
};

export default Program;