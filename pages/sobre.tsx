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
import { getHomePage, getAboutPage } from '../lib/api';

function ContactForm({ home, about }) {
  const { footer_list, links } = home;

  const [state, handleSubmit] = useForm('xayanjed');

  return (
    <>
      <Head>
        <title>Sobre | Macko</title>
        <meta name="og:title" property="og:title" content="Macko" />
        <meta name="description" content="Macko" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row>
            <Col className="p-5 text-dark">
              <h2 className="font-weight-bold">
                {RichText.asText(about.page_title)}
              </h2>
              <p className="pt-2">{RichText.asText(about.text_about)}</p>
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
  const about = await getAboutPage(previewData);

  return { props: { home, about } };
}
