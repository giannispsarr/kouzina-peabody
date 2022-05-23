import React, {useState} from 'react';
import Categories from './Categories';
import MenuDisplay from './MenuDisplay';
import items from './data';
import styled from 'styled-components';

const allCategories = [...new Set(items.map((item) => item.category))]

export default function Menu() {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category = 'appetizers') => {
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
    <MenuSection>
      <div className='menu-overline'/>
      <div className='title'>
        <h2>Menu</h2>
        <div className='underline'/>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      {/* <div className='underline2'/> */}
      <MenuDisplay items={menuItems}/>
    </MenuSection>
    </>
  );
}

const MenuSection = styled.div`
  background-color: #b8c2c5;
  padding-top: 7rem;
  padding-bottom: 7rem;
  /* .underline2 {
    width: 35rem;
    height: 0.35rem;
    background: #7b5750;
    margin-left: auto;
    margin-right: auto;
  } */
  .menu-overline {
    width: 70vw;
    height: 1rem;
    opacity: 0.3;
    background: #7b5750;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    text-align: center;
    margin-bottom: 5rem;
    padding-top: 5rem;
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
    .underline {
      width: 9rem;
      height: 0.25rem;
      background: #7b5750;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media screen and (max-width: 1440px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .menu-overline {
      height: 0.2rem;
    }
    .title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2.5rem;
        line-height: 1;
        margin-bottom: 0.75rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .menu-overline {
      height: 0.2rem;
    }
    .title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2.5rem;
        line-height: 1;
        margin-bottom: 0.75rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: inherit;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .menu-overline {
      height: 0.2rem;
    }
    .title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 5px;
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 0.75rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.9rem;
        height: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 426px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .menu-overline {
      height: 0.18rem;
    }
    .title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.8rem;
        line-height: 0.9;
        margin-bottom: 0.8rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.8rem;
        height: 0.1rem;
      }
    }
  }
  @media screen and (max-width: 376px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .menu-overline {
      height: 0.18rem;
    }
    .title {
      margin-bottom: 2rem;
      padding-top: 2rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.8rem;
        line-height: 0.9;
        margin-bottom: 0.8rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 320px) {
    width: inherit;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .menu-overline {
      height: 0.18rem;
    }
    .title {
      margin-bottom: 1.5rem;
      padding-top: 1.5rem;
      h2 {
        letter-spacing: 2px;
        font-size: 1.7rem;
        line-height: 0.9;
        margin-bottom: 0.7rem;
        margin-top: 0px;
      }
      .underline {
        width: 1.7rem;
      }
    }
  }
`;
