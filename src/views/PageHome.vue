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

</style>
