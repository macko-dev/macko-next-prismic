import styled from 'styled-components';

export const Footer = styled.footer`
  background-image: url('/assets/background-footer.svg');
  background-size: cover;
  height: 680px;

  .footer-logo ul > li {
    display: inline;
    margin: 0 20px;
  }

  .footer-logo {
    margin-top: 12rem;
  }

  .menu-footer li {
    font-size: 14px;
    margin-bottom: 2px;
    :first-child {
      font-weight: 600;
      margin-bottom: 16px;
    }
  }
`;
