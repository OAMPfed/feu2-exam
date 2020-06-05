import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
const buildings = require('../static/images/bergen-buildings.jpg');
const nature = require('../static/images/bergen-nature.jpg');
const ulriken = require('../static/images/bergen-ulriken.jpg');

const heroImages = [buildings, nature, ulriken];
const heroTexts = ['See the beautiful Hanseatic architecture', 'Experience the beautiful nature surrounding Bergen', 'Or take the renowned Ulriken Cable Car']

function ComponentHero(props) {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroImage, setHeroImage] = useState(heroImages[heroIndex]);
  const [heroText, setHeroText] = useState(heroTexts[heroIndex]);
  

  const toggleHero = (direction) => {
    switch(direction){
      case 'left':
        if(heroIndex === 0){
          setHeroIndex(2)
        } else {
          setHeroIndex(heroIndex - 1);
        }
        break;
      case 'right':
        if(heroIndex === 2){
          setHeroIndex(0)
        } else {
          setHeroIndex(heroIndex + 1);
        }
        break;
      default:
        return null;
    }
  }

  useEffect(() => {
    setHeroImage(heroImages[heroIndex]);
    setHeroText(heroTexts[heroIndex]);
  }, [heroIndex])

  return (
    <>
      <div className="componentHero">
          <button className="componentHero__button" onClick={() => toggleHero('left')}>
            <ChevronLeft/>
          </button>
          <img alt="asd" src={heroImage} className="componentHero__image"/>
          <button className="componentHero__button" onClick={() => toggleHero('right')}>
            <ChevronRight/>
          </button>
      </div>
      <p className="componentHero__text">{heroText}</p>
    </>
  );
}

export default ComponentHero;