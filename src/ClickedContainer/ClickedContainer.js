import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './ClickedContainer.css';
import { ComparisonCard } from '../ComparisonCard/ComparisonCard';

export const ClickedContainer = ( { 
  clickedCard1, 
  clickedCard2, 
  addClickedCard, 
  compareDistrictAverages }) => {

  let clickedCards;
  if (clickedCard1 && clickedCard2) {
    clickedCards = [clickedCard1, clickedCard2];
  } else if (clickedCard1) {
    clickedCards = [clickedCard1];
  } else if (clickedCard2) {
    clickedCards = [clickedCard2];
  } else {
    clickedCards = [];
  }
  
  const compareCards = clickedCards.map(( clickedDistrict, index) => {
    return ( 
      <Card 
        className='clicked'
        key={index}
        location={clickedDistrict.location}
        stats={clickedDistrict.stats}
        addClickedCard={addClickedCard}
        clicked={ clickedDistrict.clicked }
      />
    );
  });

  return (
    <div className='clicked-container'>
      { compareCards[0] }
      <ComparisonCard 
        clickedCards={ clickedCards }
        compareDistrictAverages={ compareDistrictAverages }
      />
      { compareCards[1] }
    </div>
  );
};

ClickedContainer.propTypes = {
  clickedCard1: PropTypes.object,
  clickedCard2: PropTypes.object,
  addClickedCard: PropTypes.func,
  findAverage: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};