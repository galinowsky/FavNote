import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey200};
  border: none;
  border-radius: 50px;
  height: 45px;
  margin: 10px 0;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 10px 20px 10px 40px;
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
