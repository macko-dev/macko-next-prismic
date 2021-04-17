import styled from 'styled-components';

export const Header = styled.header`
  background-image: url('/assets/Background Header.svg');
  background-size: cover;
  padding: 150px 0;
  height: 800px;

  @media (max-width: 768px) {
    height: 600px;
  }
`;
