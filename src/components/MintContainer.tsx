import { Wallet } from '@project-serum/anchor';
import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';

//? SOLANA
import { shortenAddress } from '../candy-machine';
import MintButton from './MintButton';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

//_ REDUX
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const MintContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const wallet = useAnchorWallet();

  const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      <p>
        {days} days {hours + (24 % days || 1)} hours, {minutes} minutes,{' '}
        {seconds} seconds
      </p>
    );
  };

  const itemsRemaining = useSelector(
    (state: RootState) => state.walletReducer.itemsRemaining,
  );

  const itemsAvailable = useSelector(
    (state: RootState) => state.walletReducer.itemsAvailable,
  );

  const isStarted = useSelector(
    (state: RootState) => state.walletReducer.isStarted,
  );

  const itemsRedeemed = useSelector(
    (state: RootState) => state.walletReducer.itemsRemaining,
  );

  const startDate = useSelector(
    (state: RootState) => state.walletReducer.startDate,
  );
  const balance = useSelector(
    (state: RootState) => state.walletReducer.balance,
  );

  return (
    <div>
      <StyledMintContainer>
        <h1>2 SOL</h1>
        <p>for each shark</p>
        {wallet ? (
          <span>
            <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || '')}</p>
            <p>Balance: {balance} </p>
          </span>
        ) : (
          <p>Wallet is not connected</p>
        )}

        {isStarted ? (
          ''
        ) : (
          <Countdown
            date={startDate}
            onMount={({ completed }) => completed && setIsActive(true)}
            onComplete={() => setIsActive(true)}
            renderer={renderCounter}
          />
        )}

        {/* //? item states */}

        {wallet && itemsRemaining === 0 ? (
          <p>SOLD OUT</p>
        ) : (
          <div>
            {/* //? fixed amount, can be referred to itemsAvailable */}
            {isActive && <p>Total 10.000</p>}
            {isActive && <p>Remaining {itemsRemaining}</p>}
            {isActive && <p>Redeemed {itemsRedeemed}</p>}
          </div>
        )}

        <MintButton />
      </StyledMintContainer>
    </div>
  );
};

const StyledMintContainer = styled.div`
  color: wheat;
  margin-left: 100px;
  width: 350px;
  height: 350px;
  background-color: #003892;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  border-width: 1px;
`;

export default MintContainer;
