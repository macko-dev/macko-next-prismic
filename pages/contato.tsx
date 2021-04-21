import React from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import { Container as ContactContainer } from '../styles/contact';
import Footer from '../components/home/footer';
import { Container, Col, Row, Form, Alert } from 'react-bootstrap';
import Button from '../components/Button';
import theme from '../styles/theme';

import { GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

import { getHomePage } from '../lib/api';

function ContactForm({ home }) {
  const { footer_list, links } = home;

  const [state, handleSubmit] = useForm('xayanjed');

  return (
    <>
      <Head>
        <title>Contato | Macko</title>
        <meta name="og:title" property="og:title" content="Macko" />
        <meta name="description" content="Macko" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row>
            <Col className="p-5 text-dark" md="6">
              <h4 className="font-weight-bold">
                QUESTÕES? NOS ENVIE UMA MENSAGEM!
              </h4>
              <p className="pt-2">
                A Mako Consultoria e Treinamento aguarda o seu contato. Escolha
                o assunto de seu interesse e deixe sua mensagem que em breve
                retornaremos.
              </p>
            </Col>
            <Col className="p-5" md="6">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <Form.Control name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Mensagem</Form.Label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <Form.Control name="message" as="textarea" rows={3} />
                </Form.Group>
                {state.succeeded && (
                  <Alert variant="success">Mesagem enviada com sucesso</Alert>
                )}
                <Button
                  type="submit"
                  backgroundColor={theme.color.secundary[1]}
                  backgroundHoverColor={theme.color.secundary[0]}
                  width="100%"
                >
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer list={footer_list} social={links} />
      </ContactContainer>
    </>
  );
}

export default ContactForm;

export async function getStaticProps({ params, preview = false, previewData }) {
  const home = await getHomePage(previewData);

  return { props: { home } };
}
