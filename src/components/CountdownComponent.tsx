import React from 'react';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MintButton from './MintButton';

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
        <div className="relative object-cover items-center justify-center">
          {/* <div className="w-full h-45 object-cover absolute z-0">
            <ReactPlayer playing loop muted url={cdvideo} />
          </div> */}

          <StyledSpan>
            Days: {days} Hours: {hours} Minutes: {minutes} Seconds: {seconds}
          </StyledSpan>
        </div>
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

const StyledSpan = styled.span`
  font-family: 'Press Start 2P', cursive;
  z-index: 1;
`;

export default CountdownComponent;
