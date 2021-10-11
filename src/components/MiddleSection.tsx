import React from 'react';
import styled from 'styled-components';
import venusShark from '../images/venusShark.png';

function MiddleSection() {
  return (
    <div className="flex flex-col  lg:grid  lg:grid-cols-2  lg:gap-16">
      <div className="space-x-10 bg-transparent space-y-2 text-center py-10 ">
        <StyledEarth className="text-2xl lg:text-4xl">
          UNITED STATES OF EARTH
        </StyledEarth>
        <div className="flex flex-col lg:flex-row  space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-black">
            <img className="rounded-full" src={venusShark} alt="venus shark" />
          </div>
          <div className="w-96 h-36 text-left text-lg md:text-xl font-normal">
            All planets are corrupt and out of control. The brotherhood is
            broken. For the sake of the system, we need to get them under
            control now. It's up to us to restore order. Our armies are more
            ready for war than ever before. Our entire planet has come together
            and we can't wait to put these barbarians in their place.
          </div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center py-10">
        <StyledInvaders className="text-2xl lg:text-4xl">
          GALACTIC INVADERS
        </StyledInvaders>
        <div className="flex flex-col lg:flex-row  space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-black">
            <img className="rounded-full" src={venusShark} alt="venus shark" />
          </div>
          <div className="w-96 h-36 text-left text-lg md:text-xl font-normal">
            At the Emperor's behest, we were assigned to explore and occupy new
            systems. We entered the system called the "Solar System" We are
            always ready to fight to expand our Galactic Empire. Against our
            technology, we will rule the entire galaxy! We will conquer this
            wretched system in the name of our empire.
          </div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center py-10">
        <StyledMars className="text-2xl lg:text-4xl">
          MARS MINING OPERATIONS
        </StyledMars>
        <div className="flex flex-col lg:flex-row space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-black">
            <img className="rounded-full" src={venusShark} alt="venus shark" />
          </div>
          <div className="w-96 h-36 text-left text-lg md:text-xl font-normal">
            <p>
              Your Operation collecting slaves from all over the System. Our
              planet needs sharkonium mines to power the colonies of Mars. Dust
              storms, temperature and difficult living conditions, These
              difficulties won't stop our operation, Raids on venus and earth,
              will continue.
            </p>
          </div>
        </div>
      </div>
      <div className="space-x-10 bg-transparent space-y-2 text-center py-10">
        <StyledVenus className="text-2xl lg:text-4xl">
          VENUS SWAMP SYNDICATE
        </StyledVenus>
        <div className="flex flex-col lg:flex-row  space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-black">
            <img className="rounded-full" src={venusShark} alt="venus shark" />
          </div>
          <div className="w-96 h-36 text-left text-lg md:text-xl font-normal">
            The syndicate needs new victims to strengthen its power in the
            system. Syndicate mages continue to evolve with the spells they have
            used since their ancient ancestors. Venus bounty hunters attack Mars
            and Earth and hand over their loot to the mighty sorcerers. Great
            mages with their life spells make Venus Syndicate members habitable
            in their toxic seas.
          </div>
        </div>
      </div>
      <div className="pt-24 space-x-10 bg-transparent space-y-2 text-center py-10 lg:col-span-2 ">
        <StyledEternals className="text-2xl lg:text-4xl">
          ETERNALS
        </StyledEternals>
        <div className="flex flex-col lg:flex-row  space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-black">
            <img className="rounded-full" src={venusShark} alt="venus shark" />
          </div>
          <div className="w-96 h-36 text-left text-lg md:text-xl font-normal">
            The Firstborns of the Cosmos blessed us and we ascended. We've
            traveled to thousands of galaxies. There is nothing we haven't seen.
            We created suns and destroyed planets. No formation satisfies us
            anymore. We travel the whole cosmos looking for something that will
            excite us.
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledVenus = styled.h1`
  font-family: 'Trade Winds', cursive;
`;

const StyledMars = styled.h1`
  font-family: 'Wallpoet', cursive;
`;

const StyledEarth = styled.h1`
  font-family: 'Orbitron', sans-serif;
`;

const StyledInvaders = styled.h1`
  font-family: 'Russo One', sans-serif;
`;
const StyledEternals = styled.h1`
  font-family: 'Audiowide', cursive;
`;
export default MiddleSection;
