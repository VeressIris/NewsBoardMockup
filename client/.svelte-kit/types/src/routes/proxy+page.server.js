// @ts-nocheck
import { error } from "@sveltejs/kit";
/** */

export async function load() {
  const response = await fetch(
    "https://news-board-mockup-api.vercel.app/getAllNews"
  );

  const newsArray = await response.json();
  return {
    newsList: await newsArray.reverse().map((news) => news.rawHTML),
  };
}
