import React from 'react';
import styled from 'styled-components';

function MiddleSection() {
  return (
    <div className=" grid grid-cols-2 pb-20 ">
      <div className="space-x-10 bg-transparent space-y-2 text-center pr-16 pb-24">
        <StyledEarth>UNITED STATES OF EARTH</StyledEarth>
        <div className="flex flex-row space-x-5">
          <div className="rounded-full w-36 h-36 bg-black"></div>
          <div className="w-96 h-36 bg-black"></div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center">
        <StyledInvaders>GALACTIC INVADERS</StyledInvaders>
        <div className="flex flex-row space-x-5">
          <div className="rounded-full w-36 h-36 bg-black"></div>
          <div className="w-96 h-36 bg-black"></div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center">
        <StyledMars>MARS MINING OPERATIONS</StyledMars>
        <div className="flex flex-row space-x-5">
          <div className="rounded-full w-36 h-36 bg-black"></div>
          <div className="w-96 h-36 bg-black"></div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center">
        <StyledVenus>VENUS SWAMP CYNDICATE</StyledVenus>
        <div className="flex flex-row space-x-5">
          <div className="rounded-full w-36 h-36 bg-black"></div>
          <div className="w-96 h-36 bg-black"></div>
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
