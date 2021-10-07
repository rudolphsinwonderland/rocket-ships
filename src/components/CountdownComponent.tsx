import React from 'react';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MintButton from './MintButton';
import { useDispatch } from 'react-redux';

import { setIsStartedTrue } from '../redux/slices/walletSlice';
import styled from 'styled-components';

const CountdownComponent = () => {
  const startDate = useSelector(
    (state: RootState) => state.walletReducer.startDate,
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <MintButton />;
    } else {
      // Render a countdown

      return (
        <StyledCountdownContainer>
          <StyledCountdownText>
            Days: {days} Hours: {hours} Minutes: {minutes} Seconds: {seconds}
          </StyledCountdownText>
        </StyledCountdownContainer>
      );
    }
  };
  return (
    <Countdown
      date={startDate}
      onComplete={() => setIsStartedTrue()}
      renderer={renderer}
    />
  );
};

const StyledCountdownText = styled.span`
  font-size: medium;
`;

const StyledCountdownContainer = styled.div`
  background-color: blueviolet;
`;

export default CountdownComponent;
