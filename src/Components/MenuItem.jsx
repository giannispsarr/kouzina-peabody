import React from 'react';
import styled from 'styled-components';

const MenuItem = ({ title, description }) => (
  <div>
    <Menuitem>
      <div className="menuItem-head">
        <div className="menuItem-name">
          <p style={{ color: '#7b5750' }}>{title}</p>
        </div>
        <div className="menuItem-desc">
          <p style={{ color: '#7b5750' }}>{description}</p>
        </div>
        <div className='menuItem-underline'/>
      </div>
    </Menuitem>
  </div>
);

export default MenuItem;

const Menuitem = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 0;
  padding-bottom: 1rem;
  width: 70rem;
  height: 24rem;
  .menuItem-head {
    display: block;
    margin-left: auto;
    margin-right: auto;
    .menuItem-name {
      p {
        text-align: center;
        font-size: 4.4rem;
        font-family: 'Bosch';
        letter-spacing: 0.6rem;
        font-weight: 600;
      }
    }
    .menuItem-underline {
      width: 9rem;
      height: 0.2rem;
      background: #7b5750;
      margin-left: auto;
      margin-right: auto;
    }
    .menuItem-desc {
      margin-left: auto;
      margin-right: auto;
      p {
        text-align: center;
        font-size: 3.2rem;
        font-family: 'Commissioner', sans-serif;
        font-weight: 400;
      }
    }
  }
  @media screen and (max-width: 2560px) {
    width: 24rem;
    height: auto;
    .menuItem-head {
      .menuItem-name {
        p {
          font-size: 1.1rem;
          letter-spacing: 0.3rem;
        }
      }
      .menuItem-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 16rem;
        p {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 24rem;
    height: auto;
    .menuItem-head {
      .menuItem-name {
        p {
          font-size: 1.1rem;
          letter-spacing: 0.3rem;
        }
      }
      .menuItem-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 16rem;
        p {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (max-width: 768px) and (min-width: 686px) {
    padding-left: 8.5rem;
  }
  @media screen and (max-width: 686px) and (min-width: 570px) {
    padding-left: 5.5rem;
  }
  @media screen and (max-width: 570px) and (min-width: 500px) {
    padding-left: 2.5rem;
  }
  @media screen and (max-width: 500px) and (min-width: 427px) {
    padding-left: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 24rem;
    height: auto;
    .menuItem-head {
      .menuItem-name {
        p {
          font-size: 1.1rem;
          letter-spacing: 0.3rem;
        }
      }
      .menuItem-underline {
        width: 1.9rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 16rem;
        p {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (max-width: 426px) {
    width: 24rem;
    height: auto;
    .menuItem-head {
      /* width: 15rem; */
      .menuItem-name {
        p {
          font-size: 1rem;
        }
      }
      .menuItem-underline {
        width: 1.8rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 16rem;
        p {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (max-width: 376px) {
    width: 21rem;
    height: auto;
    .menuItem-head {
      /* width: 15rem; */
      .menuItem-name {
        p {
          font-size: 1rem;
          letter-spacing: 0.4rem;
        }
      }
      .menuItem-underline {
        width: 1.8rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 16rem;
        p {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (max-width: 320px) {
    width: 18rem;
    height: auto;
    .menuItem-head {
      /* width: 20rem; */
      .menuItem-name {
        p {
          font-size: 1rem;
          letter-spacing: 0.3rem;
        }
      }
      .menuItem-underline {
        width: 1.7rem;
        height: 0.1rem;
      }
      .menuItem-desc {
        flex: 1;
        width: 13rem;
        p {
          font-size: 0.8rem;
          font-weight: 400;
        }
      }
    }
  }
`;