import React from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import { Container as ContactContainer } from '../styles/contact';
import Footer from '../components/home/footer';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';
import Button from '../components/Button';
import theme from '../styles/theme';

import { GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

import { getHomePage, getAllJobsForHome } from '../lib/api';

function ContactForm({ home, allJobs }) {
  const { footer_list, links } = home;

  const [state, handleSubmit] = useForm('xayanjed');

  return (
    <>
      <Head>
        <title>Vagas | Macko</title>
        <meta name="og:title" property="og:title" content="Macko" />
        <meta name="description" content="Macko" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row>
            <Col className="p-5 text-dark" md="8">
              <h3 className="font-weight-bold mb-5">
                {allJobs?.length} vagas abertas
              </h3>
              <Accordion defaultActiveKey="0">
                {allJobs.map((job, index) => (
                  <Card key={job.node._meta.uid}>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="cursor-pointer text-uppercase"
                      eventKey={index + 1}
                    >
                      {RichText.asText(job.node.page_title)}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index + 1}>
                      <Card.Body className="pd-5">
                        {RichText.render(job.node.job_text)}
                        <ul>{RichText.render(job.node.required)}</ul>
                        <Button
                          link={job.node.cta_link?.url}
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

export async function getStaticProps({ preview = false, previewData }) {
  const home = await getHomePage(previewData);
  const allJobs = await getAllJobsForHome(previewData);

  return { props: { home, allJobs } };
}
