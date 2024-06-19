<script>
  import { onMount } from "svelte";
  function bold() {
    document.execCommand("bold");
  }

  function italicize() {
    document.execCommand("italic");
  }

  function underline() {
    document.execCommand("underline");
  }

  let selectedColor = "#000000";
  function applyColor() {
    document.execCommand("foreColor", false, selectedColor);
  }

  let fontSize = 16;
  function changeFontSize() {
    let editableDiv = document.getElementById("editable-div");
    editableDiv.style.fontSize = fontSize + "px";
  }
</script>

<div>
  <div class="buttons-container">
    <input
      bind:value={fontSize}
      on:input={changeFontSize}
      id="font-size"
      type="number"
      min="1"
      max="160"
    />
    <button on:click={bold} id="bold-bttn"><b>B</b></button>
    <button on:click={italicize} id="italic-bttn"><i>I</i></button>
    <button on:click={underline} id="underline-bttn"><u>U</u></button>
    <input
      bind:value={selectedColor}
      on:input={applyColor}
      id="pick-color"
      type="color"
    />
  </div>
  <div contenteditable="true" id="editable-div"></div>
</div>

<style>
  .buttons-container {
    background-color: rgb(237, 242, 250);
    display: flex;
    justify-content: center;
    padding: 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-top: 8px;
  }
  button {
    background-color: white;
    margin: 0;
    padding: 6px 8px;
  }
  button:hover,
  input:hover {
    background-color: rgb(223, 223, 223);
  }
  input,
  button {
    border-radius: 4px;
    border: none;
    margin: 0 3px;
  }
  #font-size {
    width: 40px;
    padding-left: 10px;
  }
  #editable-div {
    font-size: 16px;
    padding: 10px;
    width: 700px;
    height: 400px;
    border: 1px solid rgb(223, 223, 223);
  }
</style>
