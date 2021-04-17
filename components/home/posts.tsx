import { Card, Row, Title } from '../../styles/home/posts/styles';
import { Container, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

function CardContainer({ post }): JSX.Element {
  return (
    <Card>
      <img src="/assets/Item.svg" alt="Espada" className="d-none d-md-block" />
      <div className="description">
        <h3>{RichText.asText(post.data.title)}</h3>
        <p className="mb-1">
          <span>{post.data.description}</span>
        </p>
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
      </div>
    </Card>
  );
}

export default function Courses({ list }): JSX.Element {
  return (
    <Container>
      <Title>Últimas Postagens</Title>
      <Row>
        {list.map((post) => (
          <Col key={post.uid} lg={7}>
            <CardContainer post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
