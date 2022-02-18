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
    @media screen and (max-width: 2560px) and (max-height: 800px){
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
    @media screen and (max-width: 2560px) and (min-height: 901px){
        .overlay {
            img {
                margin-top: 10px;
                width: 750px;
            }
        }
        .brand {
            margin-top: -598px;
            margin-left: 10px;
            img {
                width: 520px;
            }
            h1 {
                font-size: 2.3rem;
                letter-spacing: 0.03rem;
            }
        }
    }
    @media screen and (max-width: 2560px) and (min-height: 801px) and (max-height: 900px){
        .overlay {
            img {
                margin-top: 5px;
                width: 690px;
            }
        }
        .brand {
            margin-top: -545px;
            margin-left: 10px;
            img {
                width: 470px;
            }
            h1 {
                font-size: 2.3rem;
                letter-spacing: 0.03rem;
            }
        }
    }
    @media screen and (max-width: 1440px) and (max-height: 800px){
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
    @media screen and (max-width: 1440px) and (min-height: 801px) and (max-height: 880px) {
        .overlay {
            img {
                margin-top: 4px;
                width: 680px;
            }
        }
        .brand {
            margin-top: -540px;
            img {
                width: 465px;
            }
            h1 {
                font-size: 2.25rem;
                letter-spacing: 0.05rem;
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-height: 881px){
        .overlay {
            img {
                margin-top: 4px;
                width: 745px;
            }
        }
        .brand {
            margin-top: -590px;
            img {
                width: 490px;
            }
            h1 {
                font-size: 2.3rem;
                letter-spacing: 0.05rem;
            }
        }
    }
    @media screen and (max-width: 1024px){
        .overlay {
            img {
                margin-top: 7px;
                width: 660px;
            }
        }
        .brand {
            margin-top: -525px;
            img {
                width: 450px;
            }
            h1 {
                font-size: 1.95rem;
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
                width: 380px;
            }
            h1 {
                font-size: 1.7rem;
                letter-spacing: 0.04rem;
            }
        }
    }
    @media screen and (max-width: 530px){
        .overlay {
            img {
                margin-top: 13px;
                width: 450px;
            }
        }
        .brand {
            margin-top: -360px;
            img {
                width: 320px;
            }
            h1 {
                font-size: 1.5rem;
                letter-spacing: 0.04rem;
            }
        }
    }
    @media screen and (max-width: 446px){
        .overlay {
            img {
                margin-top: 13px;
                width: 410px;
            }
        }
        .brand {
            margin-top: -335px;
            img {
                width: 300px;
            }
            h1 {
                font-size: 1.5rem;
                letter-spacing: 0.04rem;
            }
        }
    }
    @media screen and (max-width: 426px){
        .overlay {
            img {
                margin-top: 21px;
                width: 400px;
            }
        }
        .brand {
            margin-top: -320px;
            img {
                width: 290px;
            }
            h1 {
                font-size: 1.41rem;
                letter-spacing: 0.02rem;
            }
        }
    }
    @media screen and (max-width: 400px){
        .overlay {
            img {
                margin-top: 30px;
                width: 380px;
            }
        }
        .brand {
            margin-top: -310px;
            img {
                width: 270px;
            }
            h1 {
                font-size: 1.3rem;
                letter-spacing: 0.02rem;
            }
        }
    }
    @media screen and (max-width: 376px){
        .overlay {
            img {
                margin-top: 70px;
                width: 335px;
            }
        }
        .brand {
            margin-top: -270px;
            img {
                width: 240px;
            }
            h1 {
                font-size: 1.2rem;
                letter-spacing: 0rem;
            }
        }
    }
    @media screen and (max-width: 320px){
        .overlay {
            img {
                margin-top: 70px;
                width: 305px;
            }
        }
        .brand {
            margin-top: -245px;
            img {
                width: 220px;
            }
            h1 {
                font-size: 1.1rem;
                letter-spacing: 0rem
            }
        }
    }
    @media screen and (max-width: 300px){
        .overlay {
            img {
                margin-top: 70px;
                width: 280px;
            }
        }
        .brand {
            margin-top: -225px;
            img {
                width: 200px;
            }
            h1 {
                font-size: 1rem;
                letter-spacing: 0rem
            }
        }
    }
`;
