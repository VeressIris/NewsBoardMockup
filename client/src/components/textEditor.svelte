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

  function indent() {
    document.execCommand("indent");
  }

  function insertOrderedList() {
    document.execCommand("insertOrderedList");
  }

  function insertUnorderedList() {
    document.execCommand("insertUnorderedList");
  }

  function setHeading(heading) {
    console.log(heading);
    document.execCommand("formatBlock", false, heading);
  }

  function removeIndent() {
    document.execCommand("outdent");
  }

  function center() {
    document.execCommand("justifyCenter");
  }

  function leftAlign() {
    document.execCommand("justifyLeft");
  }

  function rightAlign() {
    document.execCommand("justifyRight");
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
      style="height: 27px"
    />
    <button on:click={bold} id="bold-bttn"><b>B</b></button>
    <button on:click={italicize} id="italic-bttn"><i>I</i></button>
    <button on:click={underline} id="underline-bttn"><u>U</u></button>
    <button on:click={() => setHeading("H1")} id="heading1">H1</button>
    <button on:click={() => setHeading("H2")} id="heading2">H2</button>
    <button on:click={() => setHeading("H3")} id="heading3">H3</button>
    <input
      bind:value={selectedColor}
      on:input={applyColor}
      id="pick-color"
      type="color"
    />
    <button
      on:click={insertUnorderedList}
      id="insert-bullet-list"
      style="font-size:large; width:25px; height: 28px"><li></li></button
    >
    <button
      on:click={insertOrderedList}
      id="insert-number-list"
      style="font-weight:bold">1.</button
    >
    <button on:click={indent} id="indent" style="font-size:larger; height: 28px"
      >→</button
    >
    <button
      on:click={removeIndent}
      id="remove-ident"
      style="font-size:larger; height: 28px">←</button
    >
    <button on:click={center} id="center">Center</button>
    <button on:click={leftAlign} id="align-left">Left align</button>
    <button on:click={rightAlign} id="align-right">Right align</button>
  </div>
  <div contenteditable="true" id="editable-div"></div>
</div>

<style>
  .buttons-container {
    background-color: rgb(237, 242, 250);
    display: flex;
    justify-content: center;
    align-items: center;
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
  input[type="color"] {
    width: 30px;
    height: 28px;
    background-color: white;
  }
</style>
