<template>
  <main>
    <h1>Hello world</h1>
    <button class="p-2">OK</button>
    <ul class="h-[200px] w-[200px] overflow-auto bg-white">
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>4</li>
      <li>5</li>
      <li>17</li>
      <li>13</li>
      <li class="whitespace-nowrap">
        1534 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        culpa
      </li>
      <li>154</li>
      <li>145</li>
      <li>14</li>
      <li>145</li>
      <li>145</li>
      <li>154</li>
    </ul>

    <div
      class="window"
      style="margin: 32px; width: 250px"
    >
      <div class="title-bar">
        <div class="title-bar-text">My First Program</div>

        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p>Hello, world!</p>
        <section
          class="field-row"
          style="justify-content: flex-end"
        >
          <button>OK</button>
          <button>Cancel</button>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
/* button {
  border: none;
  background: #ece9d8;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  border-radius: 0;
  min-width: 75px;
  min-height: 23px;
  padding: 0 12px;

  font-family: 'Pixelated MS Sans Serif', Arial;
  -webkit-font-smoothing: antialiased;
  font-size: 11px;
  box-sizing: border-box;
  border: 1px solid #003c74;
  background: linear-gradient(180deg, #fff, #ecebe5 86%, #d8d0c4);
  box-shadow: none;
  border-radius: 3px;
}

button:not(:disabled):hover {
  box-shadow: inset -1px 1px #fff0cf, inset 1px 2px #fdd889,
    inset -2px 2px #fbc761, inset 2px -2px #e5a01a;
}

button.focused,
button:focus {
  box-shadow: inset -1px 1px #cee7ff, inset 1px 2px #98b8ea,
    inset -2px 2px #bcd4f6, inset 1px -1px #89ade4, inset 2px -2px #89ade4;
}

button.focused,
button:focus {
  box-shadow: inset -1px 1px #cee7ff, inset 1px 2px #98b8ea,
    inset -2px 2px #bcd4f6, inset 1px -1px #89ade4, inset 2px -2px #89ade4;
}

button.focused,
button:focus {
  outline: 1px dotted #000;
  outline-offset: -4px;
} */
</style>
