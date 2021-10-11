import React from 'react';
import mars from '../images/mars.png';
import saturn from '../images/saturn.png';
import moon from '../images/moon.png';
import styled from 'styled-components';

const Planets = () => {
  return (
    <div className="overflow-hidden">
      <StyledMars id="mars">
        <img src={mars} alt="mars" />
      </StyledMars>
      <StyledSaturn id="saturn ">
        <img src={saturn} alt="saturn" />
      </StyledSaturn>
      <StyledMoon id="moon ">
        <img src={moon} alt="moon" />
      </StyledMoon>
    </div>
  );
};

const StyledMars = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 500px;
  top: -600px;
  z-index: 1;
  overflow: hidden;
`;

const StyledSaturn = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: -900px;
  top: 300px;
  z-index: 1;
  overflow: hidden;
`;

const StyledMoon = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: -900px;
  top: -1200px;
  z-index: 1;
  overflow: hidden;
`;

export default Planets;
