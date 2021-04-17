import styled from 'styled-components';
import { Row as RowReact } from 'react-bootstrap';

export const Row = styled(RowReact)`
  div:not(:first-child):not(:last-child) {
    margin-left: auto;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.color.white};
  height: 272px;
  border-radius: 10px;
  box-shadow: 0px 5px 14px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .description {
    align-self: center;
    padding: 8px 32px;
  }

  button {
    margin-bottom: 24px;
  }

  img {
    border-radius: 10px 0 0 10px;
  }
  h3 {
    color: ${(props) => props.theme.color.primary[4]};
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme.color.primary[4]};
    padding: 16px 0;
  }

  @media only screen and (max-width: 1200px) {
    .description {
      padding: 8px 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 238px;
    margin-bottom: 48px;
    .description {
      padding: 8px 64px;
    }
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.primary[4]};
  font-weight: bold;
  text-align: center;
  padding: 0 0 80px 0;
`;
