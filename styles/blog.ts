import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/Background Header.svg');
  background-size: cover;
  padding: 150px 0;
  height: 800px;

  h1,
  h2,
  h3 {
    text-align: center;
    cursor: pointer;
  }

  p {
    font-family: 'Merriweather', serif;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    height: 600px;
  }
`;
