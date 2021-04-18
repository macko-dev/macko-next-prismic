import { Header as HeaderContainer } from '../../styles/home/header/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import { RichText } from 'prismic-reactjs';

export default function Header({ title, subTitle }): JSX.Element {
  return (
    <HeaderContainer>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="py-md-5" lg={5}>
            <h2 className="font-weight-bold">{RichText.asText(title)}</h2>
            <h5 className="w-75">{RichText.asText(subTitle)}</h5>
            <Button
              classNames="my-4"
              link={'/contato'}
              backgroundColor={theme.color.secundary[1]}
              backgroundHoverColor={theme.color.secundary[0]}
              width="168px"
            >
              Saiba Mais
            </Button>
          </Col>
          <Col lg={6}>
            <Image
              src="/assets/hero.svg"
              alt="Picture of the author"
              width={550}
              height={460}
              className="d-none d-lg-block"
            />
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
}
