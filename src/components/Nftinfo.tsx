import React from "react";
import styled from "styled-components";

function Nftinfo() {
  return (
    <StyledNav className="pb-32">
      <StyledNav className="items-center text-center mt-20 space-y-2">
        <StyledHone className="text-5xl underline">MINT DETAILS</StyledHone>
        <StyledP className="text-xl">333 SUPPLY</StyledP>
        <StyledP className="text-xl">0.02 SOL MINT PRICE</StyledP>
        <StyledP className="text-xl">
          ROYALITIES 5% (all going to charity)
        </StyledP>
        <StyledP className="text-xl">MINT DATE 31 DECEMBER</StyledP>
      </StyledNav>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  font-family: "Press Start 2P", cursive;
`;
const StyledHone = styled.h1`
  font-family: "Press Start 2P", cursive;
`;
const StyledP = styled.p`
  font-family: "Press Start 2P", cursive;
`;
export default Nftinfo;
