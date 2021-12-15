import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center relative w-full h-60   ">
        <StyledHeader className="text-5xl lg:text-7xl ">
          SOL NEW YEAR LOTTERY
        </StyledHeader>
      </nav>
    </div>
  );
};

const StyledHeader = styled.h1`
  font-family: "Press Start 2P", cursive;
`;

export default Navbar;
