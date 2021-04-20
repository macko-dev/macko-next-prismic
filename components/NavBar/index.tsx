import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import theme from '../../styles/theme';
import { NavContainer } from '../../styles/navbar/styles';

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <Navbar
        className="d-flex justify-content-between text-light w-100"
        variant="light"
        expand="md"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/assets/logo-dark.svg"
              alt="Picture of the author"
              width={300}
              height={78}
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="mt-3 flex-grow-0" id="basic-navbar-nav">
            <Nav className="d-flex align-items-center font-weight-bold menu-mobile">
              <Nav.Link className="pr-4" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="pr-4" href="#preços">
                Preços
              </Nav.Link>

              <Nav.Link className="pr-5" href="#cursos">
                Cursos
              </Nav.Link>
              <hr className="pr-4 line" />
              <Nav.Link className="pr-5" href="/sobre">
                Sobre
              </Nav.Link>
              <Button
                link={'/vagas'}
                backgroundColor={theme.color.secundary[1]}
                backgroundHoverColor={theme.color.secundary[0]}
                width="125px"
              >
                Vagas
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
