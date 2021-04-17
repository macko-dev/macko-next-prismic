import { Footer as FooterContainer } from '../../styles/home/footer/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';

export default function Footer({ list }): JSX.Element {
  return (
    <FooterContainer className="d-flex align-content-center flex-wrap">
      <Container>
        <Row>
          <Col
            lg={5}
            className="d-flex justify-content-center flex-column footer-logo"
          >
            <Image
              src="/assets/logo-dark.svg"
              alt="Logo"
              width={168}
              height={52}
            />
            <ul className="mx-auto mt-4">
              <li>
                <Image
                  src="/assets/twitter.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image
                  src="/assets/facebook.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image
                  src="/assets/instagram.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image
                  src="/assets/linkedin.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </li>
            </ul>
            <p className="text-center">©{new Date().getUTCFullYear()} - mako</p>
          </Col>
          <Col
            lg={6}
            className="d-none d-lg-flex justify-content-center flex-column"
          >
            <Row>
              <Col lg={4}>
                <ul className="menu-footer mt-5 ml-3">
                  <li>Produto</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="menu-footer mt-5 ml-3">
                  <li>Produto</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="menu-footer mt-5 ml-3">
                  <li>Produto</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}
