import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  const response = await fetch(
    "https://news-board-mockup-api.vercel.app/getAllNews"
  );

  if (response.ok) {
    const newsArray = await response.json();
    return {
      newsList: newsArray.reverse().map((news) => news.rawHTML),
    };
  } else {
    throw error(500, "Failed to fetch news");
  }
}
