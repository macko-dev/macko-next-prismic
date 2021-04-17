import { Card, Title, Subtitle } from '../../styles/home/jobs/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';

export default function Jobs(): JSX.Element {
  return (
    <Container className="pb-5">
      <Title>Vagas em destaque</Title>
      <Subtitle>
        Colaboramos para o sucesso da empresa e de profissionais, através da
        compreensão dos objetivos e valores
      </Subtitle>
      <hr className="pr-4 vertical-line mx-auto" />
      <Row className="d-flex align-content-stretch flex-wrap  justify-content-center">
        <Col lg={5}>
          <Card>
            <img src="/assets/Image@16_9.svg" alt="Item" />
            <Card.Box>
              <h3 className="pb-3">Analista de Treinamento</h3>
              <p>
                Atuar com a elaboração de programas desenvolvimento e
                treinamento interno
              </p>
              <ul>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>Atuar com a elaboração de programas desenvolvimento</p>
                </li>
                <li>
                  <img src="/assets/check.svg" alt="Check" />
                  <p>
                    Simplesmente uma simulação de texto da indústria tipográfica
                    e de impressos
                  </p>
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
                classNames="mr-3 mb-lg-2"
              >
                Candidatar
              </Button>
              <Button
                link={'/'}
                backgroundColor={theme.color.primary[4]}
                backgroundHoverColor={theme.color.primary[4]}
                size="sm"
                variant="ghost"
                color={theme.color.primary[4]}
              >
                Leia Mais
              </Button>
            </Card.Box>
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <img src="/assets/Image@16_9.svg" alt="Item" />
            <Card.Box>
              <h3 className="pb-3">Analista de Treinamento</h3>
              <p className="pb-3">
                Atuar com a elaboração de programas desenvolvimento e
                treinamento interno
              </p>
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
                classNames="mr-3 mb-lg-2"
              >
                Candidatar
              </Button>
              <Button
                link={'/'}
                backgroundColor={theme.color.primary[4]}
                backgroundHoverColor={theme.color.primary[4]}
                size="sm"
                variant="ghost"
                color={theme.color.primary[4]}
              >
                Leia Mais
              </Button>
            </Card.Box>
          </Card>
        </Col>
        <Button
          classNames="mt-5"
          link={'/'}
          backgroundColor={theme.color.primary[2]}
          backgroundHoverColor={theme.color.primary[3]}
        >
          Mais Vagas
        </Button>
      </Row>
    </Container>
  );
}
