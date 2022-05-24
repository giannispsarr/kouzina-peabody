import React from 'react'
import Logo04 from '../assets/Logos-04-cropped.png'
import styled from 'styled-components';
import video from '../assets/restaurantVideo.mp4'

export default function Video() {
  return (
    <>
    <VideoContainer>
        <div className='color-overlay'/>
        <video autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
        <div className='welcomeCard'>
            <h1>Welcome to</h1>
            <img src={Logo04} alt='logo' />
        </div>
    </VideoContainer>
    </>
  )
}

const VideoContainer = styled.div`
    display: grid;
    grid-template-rows: 118.5vh;
    grid-template-columns: 100%;
    /* object-fit: cover; */
    .color-overlay {
        width: 100%;
        height: 118.5vh;
        background: #42453c;
        z-index: 0;
        opacity: 0.6;
        position: absolute;
        object-fit: cover;
    }
    video {
        z-index: -1;
        width: 100%;
        background-color: #42453c;
        height: 100%;
        object-fit: cover;
    }
    .welcomeCard {
        position: absolute;
        z-index: 1;
        display: grid;
        justify-self: center;
        justify-self: -webkit-center;
        padding-top: 30rem;
        /* align-self: center; */
        /* justify-content: center;
        align-items: center; */
        /* object-fit: cover; */
        h1 {
            justify-self: center;
            justify-self: -webkit-center;
            letter-spacing: 13px;
            padding-bottom: 1rem;
            font-size: 9rem;
            font-weight: 400;
            /* opacity: 0.9; */
            font-family: 'Commissioner', sans-serif;
            /* text-transform: uppercase; */
            
            line-height: 1.5;
            color: #b8c2c5;
        }
        img {
            width: 1800px;
        }
    }
    @media screen and (max-width: 2560px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 6px;
                padding-bottom: 2rem;
                font-size: 3rem;                
                line-height: 1.5;
            }
            img {
                width: 430px;
            }
        }
    }
    @media screen and (max-width: 1440px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 5px;
                padding-bottom: 1rem;
                font-size: 2.8rem;                
                line-height: 1.5;
            }
            img {
                width: 420px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 5px;
                padding-bottom: 1rem;
                font-size: 2.8rem;                
                line-height: 1.5;
            }
            img {
                width: 420px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 5px;
                padding-bottom: 1rem;
                font-size: 2.5rem;                
                line-height: 1.5;
            }
            img {
                width: 380px;
            }
        }
    }
    @media screen and (max-width: 426px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 5px;
                padding-bottom: 1rem;
                font-size: 2.2rem;                
                line-height: 1.5;
            }
            img {
                width: 320px;
            }
        }
    }
    @media screen and (max-width: 376px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 3px;
                padding-bottom: 1rem;
                font-size: 2rem;                
                line-height: 1.5;
            }
            img {
                width: 270px;
            }
        }
    }
    @media screen and (max-width: 320px) {
        .welcomeCard {
            padding-top: 5rem;
            h1 {
                letter-spacing: 3px;
                padding-bottom: 1rem;
                font-size: 2rem;                
                line-height: 1.5;
            }
            img {
                width: 270px;
            }
        }
    }
`;