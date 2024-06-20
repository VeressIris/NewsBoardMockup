<script>
  import TextEditor from "../components/textEditor.svelte";
  import NewsElement from "../components/newsElement.svelte";
  import { onMount } from "svelte";

  let newsList = [];

  async function fetchAllNews() {
    try {
      const response = await fetch("http://127.0.0.1:3000/getAllNews");
      if (response.ok) {
        const newsArray = await response.json();
        newsList = newsArray.map((news) => news.rawHTML);
      } else {
        console.error("Failed to fetch news");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function postNews() {
    const content = document.getElementById("editable-div").innerHTML;
    newsList = [content, ...newsList];
    console.log(newsList);
  }

  async function addNewsToDB() {
    postNews();
    const content = document.getElementById("editable-div").innerHTML;
    try {
      const response = await fetch("http://127.0.0.1:3000/addNews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ innerHTML: content }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`News added successfully with ID: ${data.id}`);
      } else {
        alert("Failed to add news");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add news");
    }
  }

  onMount(() => {
    fetchAllNews();
  });
</script>

<div class="main">
  <h1>News:</h1>
  <div id="news-list">
    {#each newsList as newsItem}
      <NewsElement htmlContent={newsItem} />
    {/each}
  </div>
  <TextEditor />
  <button on:click={addNewsToDB} id="post-bttn">Post</button>
</div>

<style>
  .main {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  button {
    background-color: rgb(194, 217, 255);
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  button:hover {
    background-color: rgb(174, 197, 235);
  }
</style>
