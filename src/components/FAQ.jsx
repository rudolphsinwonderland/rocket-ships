import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import transitions from '@material-ui/core/styles/transitions';

const FAQ = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);

  return (
    <div className="items-center justify-center text-center space-y-10">
      <h1 className=" text-4xl lg:text-7xl border-b-2 py-4">FAQ</h1>
      <StyledFAQcontainer isOpen={accordion1}>
        <h1
          className="text-2xl flex flex-row items-center justify-center space-x-10 text-center cursor-pointer "
          onClick={() => setAccordion1(!accordion1)}
        >
          <p>WHAT IS ETERNALS ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion1}>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            perspiciatis earum voluptas sapiente, accusantium aliquid distinctio
            fuga minus nisi suscipit ad, iusto esse magni culpa ab reprehenderit
            quasi numquam at!
          </p>
        </StyledDropdown>
      </StyledFAQcontainer>
    </div>
  );
};

const StyledFAQcontainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;

  #arrow {
    transition: all 0.3s ease-in;
    transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
  }
`;

const StyledDropdown = styled.div`
  transition: all 0.3s ease-in-out;

  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export default FAQ;
