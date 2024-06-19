<script>
  export let htmlContent;
</script>

<div class="main-body">{@html htmlContent}</div>

<style>
  .main-body {
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
    margin: 5px;
    width: 700px;
  }
</style>
