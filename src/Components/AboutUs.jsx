import React from 'react';
import Logo05 from '../assets/Logos-05-cropped.png'
import styled from 'styled-components';

export default function AboutUs() {
  return (
  <>
    <AboutUsComp>
      <div className='about-overline'/>
      <div className='about-title'>
        <h2>About Us</h2>
        <div className='about-underline'/>
      </div>
      <div className='about-text'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt hic saepe est enim corporis repudiandae ab? Laudantium incidunt ducimus cupiditate. Placeat itaque veritatis esse nostrum dolores debitis minima alias voluptatem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus cupiditate minus quod expedita voluptates dolores tenetur corporis non, similique repudiandae obcaecati, et sint amet quasi. Quos architecto blanditiis ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis, officiis hic ad nisi, pariatur maiores deleniti cupiditate amet expedita at voluptates. Quia dicta molestiae laborum incidunt exercitationem, omnis quibusdam.
        </p>
        <div className='text-underline'/>
      </div>
      <div className="about-logo">
        <img src={Logo05} alt="Logo" />
      </div>
    </AboutUsComp>
  </>);
}

const AboutUsComp = styled.div`
  background-color: #b8c2c5;
  padding-top: 7rem;
  padding-bottom: 7rem;
  .about-overline {
    width: 70vw;
    height: 1rem;
    opacity: 0.3;
    background: #7b5750;
    margin-left: auto;
    margin-right: auto;
  }
  .about-title {
    text-align: center;
    margin-bottom: 5rem;
    padding-top: 7rem;
    h2 {
      letter-spacing: 10px;
      font-size: 8rem;
      font-weight: 500;
      font-family: 'Bosch';
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
      margin-top: 0px;
      color: #7b5750;
    }
    .about-underline {
      width: 9rem;
      height: 0.25rem;
      background: #7b5750;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .about-text {
    text-align: center;
    p {
      font-family: 'Commissioner', sans-serif;
      color: #7b5750;
      font-size: 4.5rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      margin-left: 33rem;
      margin-right: 33rem;
    }
    .text-underline {
      width: 12rem;
      height: 0.23rem;
      background: #7b5750;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .about-logo {
    padding-bottom: 5rem;
    padding-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 800px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .about-overline {
      height: 0.2rem;
    }
    .about-title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2rem;
        line-height: 1;
      }
      .about-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
    .about-text {
      p {
        font-size: 1.1rem;
        line-height: 1.3;
        margin-left: 4rem;
        margin-right: 4rem;
      }
      .text-underline {
        width: 6rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 2rem;
      padding-top: 6rem;
      img {
        width: 250px;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .about-overline {
      height: 0.2rem;
    }
    .about-title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2rem;
        line-height: 1;
      }
      .about-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
    .about-text {
      p {
        font-size: 1.1rem;
        line-height: 1.3;
        margin-left: 4rem;
        margin-right: 4rem;
      }
      .text-underline {
        width: 6rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 2rem;
      padding-top: 6rem;
      img {
        width: 250px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .about-overline {
      height: 0.2rem;
    }
    .about-title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2rem;
        line-height: 1;
      }
      .about-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
    .about-text {
      p {
        font-size: 1.1rem;
        line-height: 1.3;
        margin-left: 4rem;
        margin-right: 4rem;
      }
      .text-underline {
        width: 6rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 2rem;
      padding-top: 6rem;
      img {
        width: 250px;
      }
    }
  }
  @media screen and (max-width: 426px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .about-overline {
      height: 0.18rem;
    }
    .about-title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.8rem;
        line-height: 0.9;
        margin-bottom: 0.8rem;
      }
      .about-underline {
        width: 1.8rem;
      }
    }
    .about-text {
      p {
        font-size: 1.05rem;
        line-height: 1.3;
        margin-left: 3.5rem;
        margin-right: 3.5rem;
      }
      .text-underline {
        width: 5rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 1rem;
      padding-top: 5rem;
      img {
        width: 190px;
      }
    }
  }
  @media screen and (max-width: 376px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .about-overline {
      height: 0.18rem;
    }
    .about-title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.8rem;
        line-height: 0.9;
        margin-bottom: 0.8rem;
      }
      .about-underline {
        width: 1.8rem;
      }
    }
    .about-text {
      p {
        font-size: 1.05rem;
        line-height: 1.3;
        margin-left: 3.5rem;
        margin-right: 3.5rem;
      }
      .text-underline {
        width: 5rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 1rem;
      padding-top: 5rem;
      img {
        width: 190px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    .about-overline {
      height: 0.18rem;
    }
    .about-title {
      margin-bottom: 1.5rem;
      padding-top: 1.5rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.7rem;
        line-height: 0.9;
        margin-bottom: 0.7rem;
      }
      .about-underline {
        width: 1.7rem;
      }
    }
    .about-text {
      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3;
        margin-left: 3.5rem;
        margin-right: 3.5rem;
      }
      .text-underline {
        width: 5rem;
        height: 0.1rem;
      }
    }
    .about-logo {
      padding-bottom: 1rem;
      padding-top: 5rem;
      img {
        width: 190px;
      }
    }
  }
`;