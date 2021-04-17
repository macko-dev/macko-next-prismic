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
          <Navbar.Brand href="#home">
            <Link href="/">
              <Image
                src="/assets/logo-dark.svg"
                alt="Picture of the author"
                width={250}
                height={77.73}
                className="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="mt-3 flex-grow-0" id="basic-navbar-nav">
            <Nav className="d-flex align-items-center font-weight-bold menu-mobile">
              <Link href="/">
                <Nav.Link className="pr-4" href="#como-funciona">
                  Blog
                </Nav.Link>
              </Link>
              <Link href="/">
                <Nav.Link className="pr-4" href="#preços">
                  Preços
                </Nav.Link>
              </Link>
              <Link href="/">
                <Nav.Link className="pr-5" href="#cursos">
                  Cursos
                </Nav.Link>
              </Link>
              <hr className="pr-4 line" />
              <Link href="/">
                <Nav.Link className="pr-5" href="#sobre">
                  Sobre
                </Nav.Link>
              </Link>
              <Button
                link={'/'}
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
