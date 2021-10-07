import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { Button, CircularProgress, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import * as anchor from '@project-serum/anchor';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { useAnchorWallet } from '@solana/wallet-adapter-react';

import { CandyMachine, getCandyMachineState } from './candy-machine';

//? IMPORT COMPONENTS
import Navbar from './components/Navbar';
import MintContainer from './components/MintContainer';

//_ REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setAlertState } from './redux/slices/walletSlice';

const Home = () => {
  const alertState = useSelector(
    (state: RootState) => state.walletReducer.alertState,
  );
  // const wallet = useSelector(
  //   (state: RootState) => state.walletReducer.wallet,
  // );

  const candyMachineId = useSelector(
    (state: RootState) => state.walletReducer.candyMachineId,
  );

  const connection = useSelector(
    (state: RootState) => state.walletReducer.connection,
  );
  const config = useSelector((state: RootState) => state.walletReducer.config);
  const treasury = useSelector(
    (state: RootState) => state.walletReducer.treasury,
  );
  const txTimeout = useSelector(
    (state: RootState) => state.walletReducer.tsxTimeout,
  );

  const wallet = useAnchorWallet();

  const dispatch = useDispatch();

  return (
    <StyledMain>
      <Navbar />
      <MintContainer />

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => dispatch(setAlertState({ ...alertState, open: false }))}
      >
        <Alert
          onClose={() =>
            dispatch(setAlertState({ ...alertState, open: false }))
          }
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: beige;
  padding: 100px;
`;

export default Home;
