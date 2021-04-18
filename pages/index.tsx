import Head from 'next/head';
import Header from '../components/home/header';
import Courses from '../components/home/courses';
import Posts from '../components/home/posts';
import Jobs from '../components/home/jobs';
import Prices from '../components/home/prices';
import Footer from '../components/home/footer';

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic-configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

export default function Home({ home, courses, posts, jobs }): JSX.Element {
  const {
    title_header,
    sub_title_header,
    card_prices,
    footer_list,
    links,
  } = home.data;

  return (
    <>
      <Head>
        <title>Mako</title>
        <meta name="og:title" property="og:title" content="Mako" />
        <meta name="description" content="Mako" />
      </Head>
      <Header title={title_header} subTitle={sub_title_header} />
      <Courses list={courses.results} />
      <Posts list={posts.results} />
      <Jobs list={jobs.results} />
      <Prices list={card_prices} />
      <Footer list={footer_list} social={links} />
    </>
  );
}

export async function getServerSideProps() {
  const home = await client.getSingle('home_page', {});

  const courses = await client.query(
    Prismic.Predicates.at('document.type', 'courses_post')
  );

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]', pageSize: 3 }
  );

  const jobs = await client.query(
    Prismic.Predicates.at('document.type', 'jobs_post'),
    { orderings: '[my.jobs.date desc]', pageSize: 2 }
  );

  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  posts.results.map((post) => {
    const dateArray = post.data.release_date.split('-');
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;
  });

  return { props: { home, courses, posts, jobs } };
}
