import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(
  query,
  { previewData = undefined, variables = undefined } = {}
) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allBlog_posts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data?.allBlog_posts?.edges;
}

export async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(
    `
    {
      allBlog_posts(sortBy: release_date_DESC) {
        edges {
          node {
            title
            description
            body {
              ... on Blog_postBodyText {
                type
                primary {
                  text
                }
              }
              ... on Blog_postBodyImage {
                type
                primary {
                  image
                  caption
                }
              }
              ... on Blog_postBodyQuote {
                type
                primary {
                  quote
                }
              }
              __typename
            }
            _meta {
              uid
            }
          }
        }
      }
    }
    
  `,
    { previewData }
  );

  return data.allBlog_posts.edges.slice(0, 3);
}

export async function getAllCoursesForHome(previewData) {
  const data = await fetchAPI(
    `
    {
      allCourses_posts {
        edges {
          node {
            page_title
            description
            cta_link {
              ... on _ExternalLink {
                url
              }
              _linkType
            }
            time_and_date
            _meta {
              uid
            }
          }
        }
      }
    }
    
  `,
    { previewData }
  );

  return data.allCourses_posts.edges.slice(0, 3);
}

export async function getAllJobsForHome(previewData) {
  const data = await fetchAPI(
    `
    {
      allJobs_posts{
        edges {
          node {
            cover
            page_title
            description
            job_text
            required
            localization_job
            time_and_date
            cta_link {
              ... on _ExternalLink{
                url
              }
              _linkType
            }
            _meta {
              uid
            }
            _linkType
          }
        }
      }
    }
    
    
  `,
    { previewData }
  );

  return data.allJobs_posts.edges.slice(0, 2);
}

export async function getHomePage(previewData) {
  const data = await fetchAPI(
    `
    {
      allHome_pages {
        edges {
          node {
            title_header
            sub_title_header
            card_prices {
              level
              price
              benefits_list
            }
            footer_list {
              list
            }
            links {
              ...on Home_pageLinks{
                social_type
                url {
                  ... on _ExternalLink{
                    url
                  }
                  __typename
                  _linkType
                }
              }
              social_type
            }
            _linkType
          }
        }
      }
    }
  `,
    { previewData }
  );

  return data.allHome_pages.edges[0].node;
}

export async function getAboutPage(previewData) {
  const data = await fetchAPI(
    `
    {
      allAbout_pages {
        edges {
          node {
            page_title
            text_about
            _linkType
          }
        }
      }
    }
  `,
    { previewData }
  );

  return data.allAbout_pages.edges[0].node;
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
      query PostBySlug($slug: String!, $lang: String!) {
        blog_post(uid: $slug, lang: $lang) {
          title
          description
          body {
            ... on Blog_postBodyText {
              type
              primary {
                text
              }
            }
            ... on Blog_postBodyImage {
              type
              primary {
                image
                caption
              }
            }
            ... on Blog_postBodyQuote {
              type
              primary {
                quote
              }
            }
            __typename
          }
          _meta {
            uid
          }
  }
  morePosts: allBlog_posts(sortBy: release_date_DESC, first: 3) {
    edges {
      node {
        title
        description
        body {
          ... on Blog_postBodyText {
            type
            primary {
              text
            }
          }
          ... on Blog_postBodyImage {
            type
            primary {
              image
              caption
            }
          }
          ... on Blog_postBodyQuote {
            type
            primary {
              quote
            }
          }
          __typename
        }
        _meta {
          uid
        }
      }
    }
  }
      
    }    
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  );

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2);

  return data;
}
