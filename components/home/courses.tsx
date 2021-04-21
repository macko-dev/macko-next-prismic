import {
  Row,
  Card,
  CardContainer,
  Title,
} from '../../styles/home/courses/styles';
import { Container, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

function CardList({ course, index }): JSX.Element {
  const mapSVG = ['weapon.svg', 'witch-hat.svg', 'coin.svg'];
  return (
    <Link href="/">
      <Card>
        <Image
          src={`/assets/${mapSVG[index]}`}
          alt="Espada"
          width={168}
          height={168}
        />
        <h3>{RichText.asText(course.page_title)}</h3>
        <p>
          <span>{RichText.asText(course.description)}</span>
        </p>
      </Card>
    </Link>
  );
}

export default function Courses({ list }): JSX.Element {
  const value = 0;
  return (
    <CardContainer id="cursos">
      <Container className="py-5">
        <Title>Cursos Disponibilizados</Title>
        <Row className="justify-content-center">
          {list.map((course, index) => (
            <Col
              key={course.node._meta.uid}
              className="pt-5 text-center"
              lg={4}
            >
              <CardList index={index} course={course.node} />
            </Col>
          ))}
          <Button
            classNames="my-4"
            link={'/'}
            backgroundColor={theme.color.primary[2]}
            backgroundHoverColor={theme.color.primary[1]}
          >
            Mais Cursos
          </Button>
        </Row>
      </Container>
    </CardContainer>
  );
}
