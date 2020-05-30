import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  cursor: pointer;
  height: 50px;
  width: 50px;

  img {
    height: auto;
    width: 80%;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
