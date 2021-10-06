import { Wallet } from '@project-serum/anchor';
import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';

import { shortenAddress } from '../candy-machine';

export interface Props {
  wallet: any;
  itemsAvailable: number;
  itemsRedeemed: number;
  itemsRemaining: number;
  startDate: Date;
}
const MintContainer = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      <p>
        {days} days {hours + (24 % days || 1)} hours, {minutes} minutes,{' '}
        {seconds} seconds
      </p>
    );
  };

  console.log(isActive);

  return (
    <div>
      <StyledMintContainer>
        <h1>2 SOL</h1>
        <p>for each shark</p>
        {props.wallet ? (
          <p>
            Wallet {shortenAddress(props.wallet.publicKey.toBase58() || '')}
          </p>
        ) : (
          <p>Wallet is not connected</p>
        )}

        {isActive ? (
          ''
        ) : (
          <Countdown
            date={props.startDate}
            onMount={({ completed }) => completed && setIsActive(true)}
            onComplete={() => setIsActive(true)}
            renderer={renderCounter}
          />
        )}

        {/* //? item states */}

        {props.wallet && props.itemsRemaining === 0 ? (
          <p>SOLD OUT</p>
        ) : (
          <div>
            {/* //? fixed amount, can be referred to itemsAvailable */}
            {isActive && <p>Total 10.000</p>}
            {isActive && <p>Remaining {props.itemsRemaining}</p>}
            {isActive && <p>Redeemed {props.itemsRedeemed}</p>}
          </div>
        )}
      </StyledMintContainer>
    </div>
  );
};

const StyledMintContainer = styled.div`
  margin-left: 100px;
  width: 300px;
  height: 300px;
  background-color: aquamarine;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  border-width: 1px;
`;

export default MintContainer;
