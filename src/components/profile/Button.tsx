import React from 'react';
import styled from 'styled-components';

interface Props {
  children: any;
  onClick: any;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(250, 214, 29, 0.3);
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  margin-bottom: 4rem;
`;
