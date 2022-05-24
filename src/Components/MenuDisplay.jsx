import React, {useRef} from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const MenuDisplay = ({ items }) => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
      const {current} = scrollRef;
      
      if(direction === 'left') {
          current.scrollLeft -= 300;
      } else {
          current.scrollLeft += 300;
      }

  }

  return (
    <div>
      <SectionCenter>
      <div className='display-container' ref={scrollRef}>
        {items.map((menuItem) => {
          const { id, title, description } = menuItem
          return (
            <MenuItem key={title + id} title={title} description={description} />
          )
        })}
        </div>
        <div className='display-arrows'>
            <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')}/>
            <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </SectionCenter>
    </div>
  )
}
  
export default MenuDisplay

const SectionCenter = styled.div`
  width: 90vw;
  padding-top: 5rem;
  max-width: 1170px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  .display-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 70rem;
    height: 120rem;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* justify-content: center; */
    align-items: center;
  }
  .display-container::-webkit-scrollbar {
    display: none;
  }
  .display-arrows {
      width: 70rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      margin-top: -2rem;
      .arrow-icon {
          color: #395667;
          font-size: 6rem;
          cursor: pointer;
          background-color: transparent;
          border-radius: 5px;
          &:hover {
              color: #7b5750 ;
          }
      }
  }
  @media screen and (max-width: 2560px) {
    margin-top: -8rem;
      .display-container{
        width: 100%;
        height: 25rem;
      }
      .display-arrows {
          width: 81%; 
          margin-top: -5rem;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
  @media screen and (max-width: 1024px) {
    margin-top: -8rem;
      .display-container{
        width: 100%;
        height: 25rem;
      }
      .display-arrows {
          width: 91%; 
          margin-top: -5rem;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
  @media screen and (max-width: 768px) {
    margin-top: -8rem;
      .display-container{
        width: 100%;
        height: 25rem;
      }
      .display-arrows {
          width: 91%; 
          margin-top: -5rem;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
  @media screen and (max-width: 426px) {
    margin-top: -8rem;
      .display-container{
        width: 100%;
        height: 25rem;
      }
      .display-arrows {
          width: 91%; 
          margin-top: -3rem;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
  @media screen and (max-width: 376px) {
      .display-container{
        width: 100%;
        height: 28rem;
      }
      .display-arrows {
          width: 91%; 
          margin-top: -2rem;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
  @media screen and (max-width: 320px) {
      .display-container{
        width: 100%;
        height: 28rem;
      }
      .display-arrows {
          width: 91%;
          margin-top: -6rem; 
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
  }
`;
