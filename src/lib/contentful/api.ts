const ARTICLE_GRAPHQL_FIELDS = `
  id
  title
  slug
  author
  description
  views
  likes
  readTime
  image {
    url
  }
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["articles"] },
    },
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse: {
  data: { articlesCollection: { items: any } };
}) {
  return fetchResponse?.data?.articlesCollection?.items;
}

export async function getAllArticles(isDraftMode = false) {
  const articles = await fetchGraphQL(
    `query {
      articlesCollection(where: {slug_exists: true}, order: views_DESC, preview: ${isDraftMode}) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `,
    isDraftMode,
  );
  return extractArticleEntries(articles);
}

export async function getArticle(slug: any, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
      articlesCollection(where: {slug: "${slug}"}, preview: ${isDraftMode}) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
    `,
    isDraftMode,
  );
  return extractArticleEntries(article)[0];
}
