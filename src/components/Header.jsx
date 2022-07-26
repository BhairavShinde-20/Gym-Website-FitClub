import React, { useState } from 'react';
import "./Header.css";
import logo from "../assets/logo.png"
import bars from "../assets/bars.png";
import { Link } from 'react-scroll';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuopened, setMenuOpened] = useState(false)

    return (
        <div className='header'>
            <img src={logo} alt="" className='logo' />
            {(menuopened === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
                    onClick={() => setMenuOpened(true)}

                ><img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} /></div>
            ) :
                <ul className='header-menu'>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='hero'
                        span={true}
                        smooth={true}
                    >Home</Link></li>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='programs'
                        span={true}
                        smooth={true}
                    >Programs</Link></li>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='reasons'
                        span={true}
                        smooth={true}
                    >Why Us</Link></li>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='plans'
                        span={true}
                        smooth={true}
                    >Plans</Link></li>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='Testimonials'
                        span={true}
                        smooth={true}
                    >Testimonials</Link> </li>

                </ul>}

        </div>
    );
};

export default Header;