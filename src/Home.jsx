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
        </div>
        <div className='brand-header'>
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
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: -615px;
        margin-left: 20px;
        inset: 0;
        z-index: 2;
        img {
            width: 1770px;
        }
    }
    .brand-header{
        position: absolute;
        inset: 0;
        display: flex;
        margin-top: 23%;
        justify-content: center;
        z-index: 2;
        h1 {
            font-size: 8rem;
            font-family: 'Commissioner', sans-serif;
            font-weight: 400;
            text-decoration: none;
            letter-spacing: 0.3rem;
            color: #6d4f47;
        }
    }
    @media screen and (max-width: 2561px){
        .overlay {
            img {
                margin-top: 15px;
                width: 1425px;
            }
        }
        .brand {
            margin-top: -520px;
            margin-left: 15px;
            img {
                width: 930px;
            }
        }
        .brand-header{
            margin-top: 820px;
            margin-left: 10px;
            h1 {
                font-size: 4.4rem;
                letter-spacing: 0.03rem;
            }
        }
    }
    @media screen and (max-width: 1441px){
        .overlay {
            img {
                margin-top: 15px;
                width: 725px;
            }
        }
        .brand {
            margin-top: -300px;
            margin-left: 10px;
            img {
                width: 500px;
            }
        }
        .brand-header{
            margin-top: 420px;
            margin-left: 10px;
            h1 {
                font-size: 2.2rem;
                letter-spacing: 0.05rem;
            }
        }
    }
    @media screen and (max-width: 1024px){
        .overlay {
            img {
                margin-top: 10px;
                width: 725px;
            }
        }
        .brand {
            margin-top: -195px;
            margin-left: 10px;
            img {
                width: 490px;
            }
        }
        .brand-header{
            margin-top: 405px;
            margin-left: 10px;
            h1 {
                font-size: 2.3rem;
                letter-spacing: 0.05rem;
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
            margin-left: 4px;
            margin-top: -146px;
            img {
                width: 368px;
            }
        }
        .brand-header{
            margin-top: 307px;
            margin-left: 4px;
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
            margin-top: -213px;
            margin-left: 2px;
            img {
                width: 68%;
            }
        }
        .brand-header{
            margin-top: 258px;
            margin-left: 3px;
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
            margin-top: -225px;
            margin-left: 2px;
            img {
                width: 67%;
            }
        }
        .brand-header{
            margin-top: 247px;
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
            margin-top: -235px;
            margin-left: 3px;
            img {
                width: 69%;
            }
        }
        .brand-header{
            margin-top: 240px;
            h1 {
                font-size: 115%;
                letter-spacing: 0.005rem;
            }
        }
    }
`;
