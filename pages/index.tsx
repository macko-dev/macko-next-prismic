import Head from 'next/head';
import Header from '../components/home/header';
import Courses from '../components/home/courses';
import Posts from '../components/home/posts';
import Jobs from '../components/home/jobs';
import Prices from '../components/home/prices';
import Footer from '../components/home/footer';

import { GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import {
  getAllPostsForHome,
  getHomePage,
  getAllCoursesForHome,
  getAllJobsForHome,
} from '../lib/api';

export default function Home({
  allPosts,
  allCourses,
  allJobs,
  home,
}): JSX.Element {
  const {
    title_header,
    sub_title_header,
    card_prices,
    footer_list,
    links,
  } = home;

  return (
    <>
      <Head>
        <title>Macko</title>
        <meta name="og:title" property="og:title" content="Macko" />
        <meta name="description" content="Macko" />
      </Head>
      <Header title={title_header} subTitle={sub_title_header} />
      <Courses list={allCourses} />
      <Posts list={allPosts} />
      <Jobs list={allJobs} />
      <Prices list={card_prices} />
      <Footer list={footer_list} social={links} />
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  const allCourses = await getAllCoursesForHome(previewData);
  const allJobs = await getAllJobsForHome(previewData);
  const home = await getHomePage(previewData);
  return {
    props: { preview, allPosts, allCourses, allJobs, home },
  };
}
