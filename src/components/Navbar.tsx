import React from 'react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <StyledLogo>THE BATTLE ON SHARK SYSTEM </StyledLogo>
        <StyledWalletDialogButton />
      </StyledNav>
    </>
  );
};

const StyledWalletDialogButton = styled(WalletDialogButton)`
  background-color: darkcyan;
  position: absolute;
  padding: 10rem;
`;

const StyledLogo = styled.h1`
  position: absolute;
  left: 40%;
  /* vertically center the icon */
  top: 50%;
  transform: translateY(-50%);
`;

const StyledNav = styled.nav`
  min-height: 10rem;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;

  justify-content: flex-end;
`;

export default Navbar;
