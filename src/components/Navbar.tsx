import React, { useEffect } from 'react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { setBalance } from '../redux/slices/walletSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { RootState } from '../redux/store';

const Navbar = () => {
  const wallet = useAnchorWallet();

  const connection = useSelector(
    (state: RootState) => state.walletReducer.connection,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        dispatch(setBalance(balance / LAMPORTS_PER_SOL));
        // setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  return (
    <>
      <nav className="flex items-center justify-center relative w-full h-36 ">
        <div className="absolute right-5 top-4">
          <WalletDialogButton />
        </div>
        <h1 className="text-5xl">THE BATTLE ON SHARK SYSTEM </h1>
      </nav>
    </>
  );
};

export default Navbar;
