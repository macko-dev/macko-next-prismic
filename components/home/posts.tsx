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
        <h3>{RichText.asText(post.title)}</h3>
        <p className="mb-1">
          <span>{post.description}</span>
        </p>
        <Button
          link={'/blog/' + post._meta.uid}
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
    <Container id="blog">
      <Title>Últimas Postagens</Title>
      <Row>
        {list.map((post) => (
          <Col key={post.node._meta.uid} lg={7}>
            <CardContainer post={post.node} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
