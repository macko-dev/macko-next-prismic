import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { MdArrowBack } from 'react-icons/md';
import { Container as ContactContainer } from '../../styles/blog';
import Footer from '../../components/home/footer';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Alert from '../../components/Alert';

import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getHomePage,
} from '../../lib/api';

export default function BlogPost({
  post,
  morePosts,
  preview,
  home,
}): JSX.Element {
  const router = useRouter();

  if (!post?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }

  const { body, title } = post;
  const { footer_list, links } = home;

  return (
    <>
      <Head>
        <title>{RichText.asText(title)} | Macko</title>
        <meta name="og:title" property="og:title" content="Macko" />
        <meta name="description" content="Macko" />
      </Head>
      <ContactContainer>
        <Container className="bg-light border-radius-15">
          <Row className="justify-content-md-center">
            <Col className="p-5 text-dark" md="8">
              <Alert preview={preview} />
              {RichText.render(title)}
              {body.map((section) => RichText.render(section.primary.text))}
            </Col>
          </Row>
        </Container>
        <Footer list={footer_list} social={links} />
      </ContactContainer>
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData);
  const home = await getHomePage(previewData);

  return {
    props: {
      preview,
      post: data?.blog_post ?? null,
      morePosts: data?.morePosts ?? [],
      home,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/blog/${node._meta.uid}`) || [],
    fallback: true,
  };
}
