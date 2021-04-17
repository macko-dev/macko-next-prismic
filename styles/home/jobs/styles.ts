import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';

interface ICard extends StyledComponentBase<any, DefaultTheme> {
  Box?: any;
}

export const Card: ICard = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding-bottom: 32px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 14px 3px rgba(0, 0, 0, 0.2);

  h3 {
    color: ${(props) => props.theme.color.primary[4]};
    font-weight: bold;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      width: 25px;
    }

    p {
      margin: 0 8px;
    }
  }

  p {
    color: ${(props) => props.theme.color.primary[4]};
  }

  @media only screen and (max-width: 992px) {
    margin-bottom: 48px;
  }
`;

Card.Box = styled.div`
  padding: 16px 88px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.primary[4]};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.color.primary[4]};
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 550px;
`;
