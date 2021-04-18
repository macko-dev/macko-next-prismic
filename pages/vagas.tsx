import React from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import { Container as ContactContainer } from '../styles/contact';
import Footer from '../components/home/footer';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';
import Button from '../components/Button';
import theme from '../styles/theme';

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic-configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

function ContactForm({ home, jobs }) {
  const { footer_list, links } = home.data;
  const { results } = jobs;

  const [state, handleSubmit] = useForm('xayanjed');

  return (
    <>
      <Head>
        <title>Vagas | Mako</title>
        <meta name="og:title" property="og:title" content="Mako" />
        <meta name="description" content="Mako" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row>
            <Col className="p-5 text-dark" md="8">
              <h3 className="font-weight-bold mb-5">
                {results?.length} vagas abertas
              </h3>
              <Accordion defaultActiveKey="0">
                {results.map((job, index) => (
                  <Card key={job.id}>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="cursor-pointer text-uppercase"
                      eventKey={index + 1}
                    >
                      {RichText.asText(job.data.page_title)}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index + 1}>
                      <Card.Body className="pd-5">
                        <p>{RichText.asText(job.data.description)}</p>
                        <ul>{RichText.render(job.data.required)}</ul>
                        <Button
                          link={job.data.cta_link.url}
                          backgroundColor={theme.color.primary[2]}
                          backgroundHoverColor={theme.color.primary[3]}
                          size="sm"
                          variant="normal"
                          color={theme.color.white}
                          classNames="mr-3 mb-lg-2"
                        >
                          Candidatar
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Col>
            <Col className="p-5" md="4"></Col>
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
  const jobs = await client.query(
    Prismic.Predicates.at('document.type', 'jobs_post'),
    { orderings: '[my.jobs.date desc]' }
  );

  return { props: { home, jobs } };
}
