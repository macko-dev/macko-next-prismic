import styled from 'styled-components';

export const NavContainer = styled.div`
  z-index: 10000;
  position: relative;

  nav {
    position: absolute;
  }

  a {
    color: hsla(0, 0%, 100%, 1) !important;
    :hover {
      color: hsla(0, 0%, 100%, 0.75) !important;
    }
  }

  .line {
    border: none;
    border-left: 2px solid hsla(0, 0%, 100%, 1);
    height: 48px;
    width: 1px;
  }
  .navbar-light .navbar-toggler-icon {
    background-image: url('/assets/hb.svg');
  }

  @media (max-width: 768px) {
    nav {
      position: unset;
    }

    .logo {
      filter: brightness(0) saturate(100%) invert(15%) sepia(40%)
        saturate(1115%) hue-rotate(213deg) brightness(92%) contrast(90%);
    }

    .menu-mobile {
      margin-top: 8px;
      a {
        padding: 16px 0 16px 16px !important;
        border-bottom: 2px solid ${(props) => props.theme.color.primary[4]};
        text-align: center;
        width: 100%;
        margin-bottom: 8px;
        text-transform: uppercase;
        color: ${(props) => props.theme.color.primary[4]}!important;
      }
      button {
        width: 100%;
        background-color: ${(props) => props.theme.color.primary[4]};
        margin-top: 16px;
        text-transform: uppercase;
      }
    }

    .line {
      display: none;
    }

    position: unset;

    background-color: ${(props) => props.theme.color.white};
  }
`;
