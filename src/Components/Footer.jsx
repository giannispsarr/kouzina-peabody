import React from 'react';
import Logo10 from '../assets/Logos-10-1500.png'
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import styled from 'styled-components';


export default function Footer() {
  return (
  <div className='footer'>
    <Section>
      <div className="brand-container">
        <h3> Our Socials </h3>
        <p>
          You can find our socials on the following links.
        </p>
        <ul>
          <li href="#!" onClick={()=> window.open("https://instagram.com/kouzinapeabody?igshid=YmMyMTA2M2Y=", "_blank")}>
            <AiFillInstagram/>
          </li>
          {/* <li>
            <BsTwitter/>
          </li> */}
          <li href="#!" onClick={()=> window.open("https://www.facebook.com/kouzinapeabody", "_blank")}>
            <FaFacebookF/>
          </li>
          {/* <li>
            <FaSpotify/>
          </li> */}
        </ul>
      </div>
      <div className="image-container">
        <img src={Logo10} alt="Logo" />
      </div>
      <div className="contact-container">
        <div className="title">
          <h3>Contact us</h3>
        </div>
          <p>+1 978 896 6440</p>
          <p>kouzinapeabody@gmail.com</p>
          <p>134 Newbury St. Peabody, MA</p>
      </div>
    </Section>
    <LowerFooter className='lower_footer'>
      <h2>
        Copyright &copy; 2022 <span>Kouzina - A Greek Story</span>
      </h2>
    </LowerFooter>
  </div>);
}

const Section = styled.footer`
  margin: 0;
  background: #42453c;
  color: #b89f93;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 3vw;
  .brand-container{
    width: auto;
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 6.5rem;
        font-weight: 600;
        font-family: 'Bosch';
      }
    p {
      font-size: 4.5rem;
      font-family: 'Commissioner', sans-serif;
      letter-spacing: 0.1rem;
    }
    ul {
      display: flex;
      list-style-type: none;
      gap: 4vw;
      margin-top: 2vw;
      li {
        padding: 1.5rem;
        border-radius: 3rem;
        background-color: #b89f93;
        transition: 0.1s ease-in-out;
        cursor: pointer;
        svg {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #42453c;
          font-size: 5rem;
          transition: 0.1s ease-in-out;
        }
        &:hover {
          background-color: #b8c2c5;
          svg {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  .image-container{
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 20vw;
    }
  }
  .contact-container {
    width: auto;
    display: flex;
    flex-direction: column;
    .title{
      h3 {
        font-size: 6.5rem;
        font-weight: 600;
        font-family: 'Bosch';
      }
    }
    p {
      font-size: 4.5rem;
      font-family: 'Commissioner', sans-serif;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (max-width: 2560px) {
    width: inherit;
    gap: 0vw;
    padding-top: 0.5rem;
    .brand-container{
      h3 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        }
        ul {
        gap: 4vw;
        li {
          padding: 0.5rem;
          border-radius: 3rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    .image-container {
      img {
        width: 15rem;
      }
    }
    .contact-container {
      .title{
        h3 {
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    width: inherit;
    gap: 0vw;
    padding-top: 0.5rem;
    .brand-container{
      h3 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        }
        ul {
        gap: 4vw;
        li {
          padding: 0.5rem;
          border-radius: 3rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    .image-container {
      img {
        width: 15rem;
      }
    }
    .contact-container {
      .title{
        h3 {
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: inherit;
    gap: 0vw;
    padding-top: 0.5rem;
    .brand-container{
      h3 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        }
        ul {
        gap: 4vw;
        li {
          padding: 0.5rem;
          border-radius: 3rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    .image-container {
      img {
        width: 15rem;
      }
    }
    .contact-container {
      .title{
        h3 {
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 874px) {
    .brand-container{
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        }
        ul {
        gap: 4vw;
        li {
          padding: 0.5rem;
          border-radius: 3rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    .image-container {
      img {
        width: 13rem;
      }
    }
    .contact-container {
      .title{
        h3 {
          font-size: 2rem;
        }
      }
      p {
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: inherit;
    grid-template-columns: 1.5fr;
    .brand-container{
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        }
        ul {
        gap: 9vw;
        li {
          padding: 0.5rem;
          border-radius: 3rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    .image-container {
      img {
        width: 15rem;
      }
    }
    .contact-container {
      .title{
        h3 {
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: #7b5750;
  color: #b8c2c5;
  padding: 1rem;
  h2 {
    font-size: 4rem;
    font-family: 'Commissioner', sans-serif;
    span {
      color: #b89f93;
    }
  }
  @media screen and (max-width: 2560px) {
    width: inherit;
    margin-left: 0;
    h2 {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 1440px) {
    width: inherit;
    margin-left: 0;
    h2 {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 1150px) {
    width: inherit;
    margin-left: 0;
    h2 {
      font-size:1rem;
      span {
        display: block;
      }
    }
  }
  @media screen and (max-width: 650px) {
    width: inherit;
    margin-left: 0;
    h2 {
      font-size:1.3rem;
      span {
        display: block;
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: inherit;
    margin-left: 0;
    h2 {
      font-size:1rem;
      span {
        display: block;
      }
    }
  }
`;
