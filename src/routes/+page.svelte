<script>
  import TextEditor from "../components/textEditor.svelte";
  import NewsElement from "../components/newsElement.svelte";

  let newsList = [];

  function postNews() {
    const content = document.getElementById("editable-div").innerHTML;
    newsList = [content, ...newsList];
    console.log(newsList);
  }
</script>

<div class="main">
  <h1>News:</h1>
  <div id="news-list">
    {#each newsList as newsItem}
      <NewsElement htmlContent={newsItem} />
    {/each}
  </div>
  <TextEditor />
  <button on:click={postNews} id="post-bttn">Post</button>
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
