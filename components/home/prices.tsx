import { Card, Title, Subtitle } from '../../styles/home/prices/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';

export default function Prices({ list }): JSX.Element {
  return (
    <Container className="pb-5">
      <Title>Treinamento e Desenvolvimento</Title>
      <Subtitle>
        Disponibilizamos diversas formas para que você ou seus colaboradores
        tenham o máximo de aperfeiçoamento profissional.
      </Subtitle>
      <hr className="pr-4 vertical-line mx-auto" />
      <Row className="d-flex align-content-stretch flex-wrap justify-content-center">
        <Col lg={4} className="mb-5">
          <Card>
            <img src="/assets/image-1.png" alt="Check" />
            <Card.Box>
              <span className="text-center">
                <p className="mb-2">Inciante</p>
                <h3 className="mb-4">R$50</h3>
              </span>
              <ul>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
              </ul>
            </Card.Box>
            <Button
              link={'/'}
              backgroundColor={theme.color.primary[2]}
              backgroundHoverColor={theme.color.primary[3]}
              size="sm"
              variant="normal"
              color={theme.color.white}
            >
              Saiba Mais
            </Button>
          </Card>
        </Col>
        <Col lg={4} className="mb-5">
          <Card>
            <img src="/assets/image-2.png" alt="Check" />
            <Card.Box>
              <span className="text-center">
                <p className="mb-2">Regular</p>
                <h3 className="mb-4">R$70</h3>
              </span>
              <ul>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
              </ul>
              <Button
                link={'/'}
                backgroundColor={theme.color.primary[2]}
                backgroundHoverColor={theme.color.primary[3]}
                size="sm"
                variant="normal"
                color={theme.color.white}
              >
                Saiba Mais
              </Button>
            </Card.Box>
          </Card>
        </Col>
        <Col lg={4} className="mb-5">
          <Card>
            <img src="/assets/image-3.png" alt="Check" />
            <Card.Box>
              <span className="text-center">
                <p className="mb-2">Profissional</p>
                <h3 className="mb-4">R$100</h3>
              </span>
              <ul>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Lorem Ipsum</p>
                </li>
              </ul>
              <Button
                link={'/'}
                backgroundColor={theme.color.primary[2]}
                backgroundHoverColor={theme.color.primary[3]}
                size="sm"
                variant="normal"
                color={theme.color.white}
              >
                Saiba Mais
              </Button>
            </Card.Box>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
