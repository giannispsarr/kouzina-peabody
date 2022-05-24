import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Logo05 from '../assets/Logos-05-2.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {VscChromeClose} from 'react-icons/vsc';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const ScrollLink = Scroll.Link

export default function Navbar({sticky}) {
    const [navbarState, setNavbarState] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const html = document.querySelector('html');
    html.addEventListener('click', () => setNavbarState(false));

    return (
        <>
            <Nav>
                <div className="brand">
                    <img src={Logo05} alt='' />
                </div>
                <ul className="links">
                    <li>
                        <ScrollLink 
                            to="Home" 
                            spy={true} 
                            smooth={true}
                            delay={100}
                            offset={-1000}
                            duration={500} 
                            className='a' 
                            activeClass='active'
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="Menu" 
                            spy={true} 
                            smooth={true}
                            delay={100}
                            offset={-260} 
                            duration={500} 
                            className='a' 
                            activeClass='active' 
                        >
                            Menu
                        </ScrollLink>
                    </li>
                    {/* <li>
                        <ScrollLink 
                            to="AboutUs" 
                            spy={true} 
                            smooth={true}
                            delay={100}
                            offset={-260} 
                            duration={500} 
                            className='a' 
                            activeClass='active' 
                        >
                            About Us
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="Gallery" 
                            spy={true} 
                            smooth={true}
                            delay={100}
                            offset={-240} 
                            duration={500} 
                            className='a' 
                            activeClass='active' 
                        >
                            Gallery
                        </ScrollLink>
                    </li>
                    <li><a href="#services" >Order Online</a></li> */}
                </ul>
                <div className='toggle'>
                    <GiHamburgerMenu color='#42453c' fontSize={33} onClick={() => {setToggleMenu(true)}}/>

                    {toggleMenu &&(
                        <div className='overlay'>
                            <MdOutlineRestaurantMenu fontSize={33} className='close' onClick={() => {setToggleMenu(false)}}/>
                            <ul className="toggle-links">
                                <li>
                                    <ScrollLink 
                                        to="Home" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='a' 
                                        activeClass='active'
                                        onClick={() => {setToggleMenu(false)}}
                                    >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink 
                                        to="Menu" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='a' 
                                        activeClass='active'
                                        onClick={() => {setToggleMenu(false)}}
                                    >
                                        Menu
                                    </ScrollLink>
                                </li>
                                {/* <li>
                                    <ScrollLink 
                                        to="AboutUs" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='a' 
                                        activeClass='active'
                                        onClick={() => {setToggleMenu(false)}}
                                    >
                                        About Us
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink 
                                        to="Gallery" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='a' 
                                        activeClass='active'
                                        onClick={() => {setToggleMenu(false)}} 
                                    >
                                        Gallery
                                    </ScrollLink>
                                </li>
                                <li><a href="#services" >Order Online</a></li> */}
                            </ul>
                        </div>
                    )}                        
                </div>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    box-shadow: 0 9px 7px 0 rgba(0,0,0,.2);
    display: flex;
    position: sticky;
    z-index: 3;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(50deg, #cabeb3, #b89f93);
    padding: 2rem 2rem;
    .brand {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            width: 850px;
        }
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 8rem;
        li {
            cursor: pointer;
            a {
                color: #395667;
                font-size: 3.5rem;
                font-family: 'Commissioner', sans-serif;
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0.5rem;
                transition: 0.1s ease-in-out;
                &:hover {
                    color: #7b5750;
                }
            }
            .active {
                color: #7b5750;
            }
        }
    }
    .toggle {
        display: none;
        .overlay {
            position: fixed;
            flex: center;
            align-items: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #42453c;
            transition: 0.5s ease;
            flex-direction: column;
            z-index: 5;
            .close {
                font-size: 37px;
                color: #b89f93;
                position: absolute;
                top: 20px;
                right: 20px;
            }
            .toggle-links {
                margin-top: 2rem;
                display: block;
                justify-content: center;
                align-items: center;
                list-style: none;
                li {
                margin-bottom: 2.5rem;
                a {
                    color: #b89f93;
                    font-weight: 600;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.5rem;
                    transition: 0.1s ease-in-out;
                    &:hover {
                        color: #395667;
                    }
                }
            }
        }
    }
}
    @media screen and (max-width: 2560px) {
        .brand {
            /* width: 100%; */
            img {
                width: 220px;
            }
        }
        .links {
            gap: 1.2rem;
            li {
                a {
                    font-size: 1.2rem;
                    letter-spacing: 0.1rem;
                }
            }
        }
    }
    @media screen and (max-width: 1440px) {
        .brand {
            /* width: 100%; */
            img {
                width: 290px;
            }
        }
        .links {
            gap: 1.2rem;
            li {
                a {
                    font-size: 1.2rem;
                    letter-spacing: 0.1rem;
                }
            }
        }
    }
    @media screen and (max-width: 1150px) {
        .brand {
            width: 100%;
            img {
                width: 150px;
            }
        }
        .links {
            display: none;
        }
        .toggle {
            display: flex;
        }
    }
`;