/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Article } from "~/types/articles/articleType";

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
  createdAt
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
  data: { articlesCollection: { items: Article[] } };
}) {
  return fetchResponse?.data?.articlesCollection?.items;
}

export async function getAllArticles({
  isDraftMode = false,
  search = null,
  filter = "Terbaru",
  randomize = false,
  offset = 0,
  limit = 16,
}: {
  isDraftMode?: boolean;
  search?: string | null;
  filter?: "Terbaru" | "Rekomendasi" | "A-Z" | "Z-A";
  randomize?: boolean;
  offset?: number;
  limit?: number;
}) {
  const searchQuery = search
    ? `OR: [
    { title_contains: "${search}" },
    { author_contains: "${search}" },
    { description_contains: "${search}" },
  ]`
    : "";

  let orderBy = "createdAt_DESC";
  switch (filter) {
    case "Terbaru":
      orderBy = "createdAt_DESC";
      break;
    case "Rekomendasi":
      orderBy = "views_DESC";
      break;
    case "A-Z":
      orderBy = "title_ASC";
      break;
    case "Z-A":
      orderBy = "title_DESC";
      break;
  }

  const articles = await fetchGraphQL(
    `query {
      articlesCollection(
          where: {${searchQuery} slug_exists: true},
          order: ${orderBy},
          preview: ${isDraftMode},
          skip: ${offset},
          limit: ${limit}
        ) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `,
    isDraftMode,
  );
  const articlesEntries = extractArticleEntries(articles);

  if (randomize) {
    return articlesEntries.sort(() => Math.random() - 0.5);
  }

  return articlesEntries;
}

export async function getArticle({
  slug,
  isDraftMode = false,
}: {slug: string, isDraftMode?: boolean}) {
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
  console.log(article);
  return extractArticleEntries(article)[0];
}
