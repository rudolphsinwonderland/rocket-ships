import styled from "styled-components";

const Rewards = () => {
  return (
    <div>
      <div className="pb-32">
        <div className="items-center text-center mt-20 space-y-2">
          <StyledHone className="text-5xl underline">
            MAKE A NEW BEGINNING TO 2022 
          </StyledHone>
          <StyledP className="text-xl">WITH YOUR NEW RUDOLPH</StyledP>
          <StyledP className="text-xl"></StyledP>
          <StyledP className="text-xl"></StyledP>
          <StyledP className="text-xl"></StyledP>
        </div>
      </div>
    </div>
  );
};

const StyledHone = styled.h1`
  font-family: "Press Start 2P", cursive;
`;
const StyledP = styled.p`
  font-family: "Press Start 2P", cursive;
`;

export default Rewards;
