// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */

export async function load({ fetch }) {
  const response = await fetch(
    "https://news-board-mockup-api.vercel.app/getAllNews"
  );

  const newsArray = await response.json();
  return {
    newsList: await newsArray.reverse().map((news) => news.rawHTML),
  };
}
