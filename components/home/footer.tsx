import { Footer as FooterContainer } from '../../styles/home/footer/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';

export default function Footer({ list, social }): JSX.Element {
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
              {social?.map((item, index) => (
                <li key={index}>
                  <a href={item.url.url}>
                    <Image
                      src={`/assets/${item.social_type}.svg`}
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-center">©{new Date().getUTCFullYear()} - mako</p>
          </Col>
          <Col
            lg={6}
            className="d-none d-lg-flex justify-content-center flex-column"
          >
            <Row>
              {list?.map((item, index) => (
                <Col key={index} lg={4}>
                  <ul className="menu-footer mt-5 ml-3">
                    {item.list?.map((item, inx) => (
                      <li key={inx}>{item.text}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}
