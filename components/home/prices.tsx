import { Card, Title, Subtitle } from '../../styles/home/prices/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';

function CardPrice({ price, index }): JSX.Element {
  return (
    <Card>
      <img src={`/assets/image-${index + 1}.png`} alt="Check" />
      <Card.Box>
        <span className="text-center">
          <p className="mb-2">{price.level}</p>
          <h3 className="mb-4">R${price.price}</h3>
        </span>
        <ul>
          {price.benefits_list?.map((item, index) => (
            <li key={index}>
              <img src="/assets/check.svg" alt="Check" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Card.Box>
      <Button
        link={'/contato'}
        backgroundColor={theme.color.primary[2]}
        backgroundHoverColor={theme.color.primary[3]}
        size="sm"
        variant="normal"
        color={theme.color.white}
      >
        Saiba Mais
      </Button>
    </Card>
  );
}

export default function Prices({ list }): JSX.Element {
  return (
    <Container id="preços" className="pb-5">
      <Title>Treinamento e Desenvolvimento</Title>
      <Subtitle>
        Disponibilizamos diversas formas para que você ou seus colaboradores
        tenham o máximo de aperfeiçoamento profissional.
      </Subtitle>
      <hr className="pr-4 vertical-line mx-auto" />
      <Row className="d-flex align-content-stretch flex-wrap justify-content-center">
        {list.map((price, index) => (
          <Col key={index} lg={4} className="mb-5">
            <CardPrice index={index} price={price} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
