import React, {useEffect, useRef} from 'react';
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styled from 'styled-components';

const Categories = ({ categories, filterItems }) => {

    useEffect(() => {
        filterItems()
    }, []);

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
        <CategoryCont>
          <div className='cat-container' ref={scrollRef}>
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  className="filter-btn"
                  key={index}
                  onClick={() => filterItems(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <div className='cat-arrows'>
              <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')}/>
              <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')}/>
          </div>
        </CategoryCont>
      </div>
    )
  }

  export default Categories

  const CategoryCont = styled.div`
    display: flex;
    padding-bottom: 2.5rem;
    justify-content: center;
    .cat-container {
        /* display: flex;
        flex-direction: row; */
        display: flexbox;
        width: max-content;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        .filter-btn {
        background: transparent;
        border-color: transparent;
        font-size: 4.2rem;
        font-family: 'Commissioner', sans-serif;
        text-transform: capitalize;
        margin: 1rem 2rem;
        letter-spacing: 1px;
        padding: 0.375rem 0.75rem;
        color: #7b5750;
        cursor: pointer;
        transition: all 0.3s linear;
        border-radius: 0.85rem;
      }
      .filter-btn:hover {
        background: #395667;
        color: #cabeb3;
      }
    }
    .cat-container::-webkit-scrollbar {
        display: none;
    }
    .cat-arrows {
        width: 98%;
        display: none;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        padding-left: 1rem;
        bottom: 4%;
        .arrow-icon {
            color: #395667;
            font-size: 5rem;
            cursor: pointer;
            background-color: transparent;
            border-radius: 5px;
            &:hover {
                color: #7b5750 ;
            }
        }
    }
    @media screen and (max-width: 1440px) {
      .cat-container{
        justify-content: center;
        align-self: center;
        width: 90%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -75%;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
    }
    @media screen and (max-width: 1024px) {
      .cat-container{
        justify-content: center;
        align-self: center;
        width: 90%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -75%;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
    }
    @media screen and (max-width: 768px) {
      .cat-container{
        width: 90%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -75%;
          .arrow-icon {
              font-size: 1.3rem;
          }
      }
    }
    @media screen and (max-width: 426px) {
      .cat-container{
        width: 92%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.1rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -73%;
          .arrow-icon {
              font-size: 1.1rem;
          }
      }
    }
    @media screen and (max-width: 376px) {
      .cat-container{
        width: 92%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -73%;
          .arrow-icon {
              font-size: 1.1rem;
          }
      }
    }
    @media screen and (max-width: 320px) {
      .cat-container{
        width: 92%;
        .filter-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          margin: 0rem 0rem 0rem 0rem;
          letter-spacing: 0px;
          padding: 0.375rem 0.3rem;
          border-radius: 0.6rem;
        }
      }
      .cat-arrows {
          width: 93%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          padding-left: 0rem;
          bottom: -67%;
          .arrow-icon {
              font-size: 1rem;
          }
      }
    }
  `;