import styled from 'styled-components';

import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

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
  height: 100vh;
`;

export default Home;
