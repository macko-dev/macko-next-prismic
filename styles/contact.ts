import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/Background Header.svg');
  background-size: cover;
  padding: 150px 0;
  height: 800px;
  line-height: 24px;

  ul > li {
    list-style-type: square;
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }
`;
