import React from 'react';
import styled from 'styled-components';
import Logo04 from './assets/Logos-04-2.png';
import Logo10 from './assets/Logos-10-1500.png';

export default function Home() {
  return (<div className='homepage'>
      <Section>
        <div className='overlay'>
            <img src={Logo10} alt='backLogo' />
        </div>
        <div className='brand'>
            <img src={Logo04} alt='' />
            <h1>Coming April 2022</h1>
        </div>
      </Section>
  </div>);
}

const Section = styled.div`
    height: 100vh;
    background: linear-gradient(50deg, #cabeb3, #bda195);
    .overlay {
        display: flex;
        justify-content: center;
        img {
            margin-top: 1rem;
            width: 155rem;
            opacity: 0.2;
            z-index: 0;
        }
    }
    .brand {
        display: grid;
        margin-top: -32.5%;
        z-index: 2;
        img {
            width: 1770px;
            justify-self: center;
        }
        h1 {
            justify-self: center;
            font-size: 8rem;
            font-family: 'Commissioner', sans-serif;
            font-weight: 400;
            text-decoration: none;
            letter-spacing: 0.3rem;
            color: #6d4f47;
        }
    }
    @media screen and (max-width: 2560px){
        .overlay {
            img {
                margin-top: 5px;
                width: 590px;
            }
        }
        .brand {
            margin-top: -475px;
            margin-left: 15px;
            img {
                width: 410px;
            }
            h1 {
                font-size: 2.2rem;
                letter-spacing: 0.03rem;
            }
        }
    }
    @media screen and (max-width: 1440px){
        .overlay {
            img {
                margin-top: 4px;
                width: 590px;
            }
        }
        .brand {
            margin-top: -477px;
            img {
                width: 440px;
            }
            h1 {
                font-size: 2.2rem;
                letter-spacing: 0.05rem;
            }
        }
    }
    @media screen and (max-width: 1024px){
        .overlay {
            img {
                margin-top: 5px;
                width: 58%;
            }
        }
        .brand {
            margin-top: -47%;
            img {
                width: 420px;
            }
            h1 {
                font-size: 1.9rem;
                letter-spacing: 0.03rem;
            }
        }
    }
    @media screen and (max-width: 768px){
        .overlay {
            img {
                margin-top: 7px;
                width: 530px;
            }
        }
        .brand {
            margin-top: -425px;
            img {
                width: 50%;
            }
            h1 {
                font-size: 1.75rem;
                letter-spacing: 0.04rem;
            }
        }
    }
    @media screen and (max-width: 426px){
        .overlay {
            img {
                margin-top: 21px;
                width: 97%;
            }
        }
        .brand {
            margin-top: -333px;
            img {
                width: 68%;
            }
            h1 {
                font-size: 141%;
                letter-spacing: 0.02rem;
            }
        }
    }
    @media screen and (max-width: 376px){
        .overlay {
            img {
                margin-top: 10%;
                width: 98%;
            }
        }
        .brand {
            margin-top: -295px;
            margin-left: 2px;
            img {
                width: 67%;
            }
            h1 {
                font-size: 1.31rem;
                letter-spacing: 0.01rem;
            }
        }
    }
    @media screen and (max-width: 320px){
        .overlay {
            img {
                margin-top: 20%;
                width: 96%;
            }
        }
        .brand {
            margin-top: -248px;
            margin-left: 3px;
            img {
                width: 69%;
            }
            h1 {
                font-size: 115%;
                letter-spacing: 0.005rem;
            }
        }
    }
`;
