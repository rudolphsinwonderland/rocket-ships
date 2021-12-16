import styled from "styled-components";

const Rewards = () => {
  return (
    <div>
      <div className="pb-32">
        <div className="items-center text-center mt-20 space-y-2">
          <StyledHone className="text-5xl underline">
            PRIZES UP TO 300 SOL
          </StyledHone>
          <StyledP className="text-xl">Winner ticket 40% of pool</StyledP>
          <StyledP className="text-xl">Second big winner 20%</StyledP>
          <StyledP className="text-xl">3rd & 4th winner 5%</StyledP>
          <StyledP className="text-xl">40 winner up to 1 SOL</StyledP>
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
