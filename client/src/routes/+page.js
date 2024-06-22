/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const response = await fetch(
    "https://news-board-mockup-api.vercel.app/getAllNews"
  );

  const newsArray = await response.json();
  return {
    newsList: await newsArray.reverse().map((news) => news.rawHTML),
  };
}
