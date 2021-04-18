import React from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import { Container as ContactContainer } from '../styles/contact';
import Footer from '../components/home/footer';
import { Container, Col, Row, Form, Alert } from 'react-bootstrap';
import Button from '../components/Button';
import theme from '../styles/theme';

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic-configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

function ContactForm({ home, about }) {
  const { footer_list, links } = home.data;

  const [state, handleSubmit] = useForm('xayanjed');

  return (
    <>
      <Head>
        <title>Sobre | Mako</title>
        <meta name="og:title" property="og:title" content="Mako" />
        <meta name="description" content="Mako" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row>
            <Col className="p-5 text-dark">
              <h2 className="font-weight-bold">
                {RichText.asText(about.data.page_title)}
              </h2>
              <p className="pt-2">{RichText.asText(about.data.text_about)}</p>
            </Col>
          </Row>
        </Container>
        <Footer list={footer_list} social={links} />
      </ContactContainer>
    </>
  );
}

export default ContactForm;

export async function getServerSideProps() {
  const home = await client.getSingle('home_page', {});
  const about = await client.getSingle('about_page', {});

  return { props: { home, about } };
}