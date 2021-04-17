import styled from 'styled-components';
import { Row as RowReact } from 'react-bootstrap';

export const Row = styled(RowReact)`
  div:nth-child(2) {
    padding-top: 0 !important;
  }
`;
export const CardContainer = styled.section`
  background-image: url('/assets/courses-background.svg');
  background-position: bottom 32px right;
  background-repeat: no-repeat;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.color.white};
  height: 464px;
  border-radius: 10px;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 72px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.07), 0 15px 12px rgba(0, 0, 0, 0.03);
  }

  h3 {
    color: ${(props) => props.theme.color.primary[4]};
    font-weight: bold;
    padding: 0 72px;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  p {
    color: ${(props) => props.theme.color.primary[4]};
    padding: 16px 32px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.primary[4]};
  font-weight: bold;
  text-align: center;
  padding: 0 0 80px 0;
`;
