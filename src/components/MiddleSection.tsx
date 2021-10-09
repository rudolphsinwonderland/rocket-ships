import React from 'react';
import styled from 'styled-components';

function MiddleSection() {
  return (
    <div className="w-full space-y-20 items-center justify-center">
      <div>
        <StyledVenus className="text-center">VENUS SWAMP CLAN</StyledVenus>
        <div className="items-center justify-start flex space-x-8">
          <div className="bg-red-500 w-40 h-40 rounded-full"></div>
          <div className="bg-green-200 w-96 h-36 rounded-xl"></div>
        </div>
      </div>
      <div>
        <StyledMars className="text-center">MARS MINING OPERATIONS</StyledMars>
        <div className="items-center justify-start flex space-x-8">
          <div className="bg-red-500 w-40 h-40 rounded-full"></div>
          <div className="bg-green-200 w-96 h-36 rounded-xl"></div>
        </div>
      </div>
      <div>
        <StyledEarth className="text-center">EARTH UNITED STATES</StyledEarth>
        <div className="items-center justify-start flex space-x-8">
          <div className="bg-red-500 w-40 h-40 rounded-full"></div>
          <div className="bg-green-200 w-96 h-36 rounded-xl"></div>
        </div>
      </div>
      <div>
        <StyledInvaders className="text-center">
          GALACTIC SEA INVADERS
        </StyledInvaders>
        <div className="items-center justify-start flex space-x-8">
          <div className="bg-red-500 w-40 h-40 rounded-full"></div>
          <div className="bg-green-200 w-96 h-36 rounded-xl"></div>
        </div>
      </div>
      <div>
        <h1 className="text-center">ETERNALS</h1>
        <div className="items-center justify-start flex space-x-8">
          <div className="bg-red-500 w-40 h-40 rounded-full"></div>
          <div className="bg-green-200 w-96 h-36 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

const StyledVenus = styled.h1`
  font-size: 1.8rem;
  font-family: 'Trade Winds', cursive;
`;

const StyledMars = styled.h1`
  font-size: 1.8rem;
  font-family: 'Wallpoet', cursive;
`;

const StyledEarth = styled.h1`
  font-size: 1.8rem;
  font-family: 'Orbitron', sans-serif;
`;

const StyledInvaders = styled.h1`
  font-size: 1.8rem;
  font-family: 'Russo One', sans-serif;
`;
export default MiddleSection;
