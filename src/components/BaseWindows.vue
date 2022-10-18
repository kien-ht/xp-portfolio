<template>
  <div
    ref="windowRef"
    class="window w-[250px] fixed"
    :style="{
      top: windowPosition.y,
      left: windowPosition.x
    }"
  >
    <div
      class="title-bar"
      ref="titleBarRef"
    >
      <div class="title-bar-text pointer-events-none">My First Program</div>

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
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'

const windowRef = ref<HTMLDivElement | null>(null)
const titleBarRef = ref<HTMLDivElement | null>(null)
const cursorInWindowPosition = reactive({
  x: 0,
  y: 0
})
const cursorEndPosition = reactive({
  x: 0,
  y: 0
})
const windowPosition = computed(() => {
  const x = cursorEndPosition.x - cursorInWindowPosition.x
  const y = cursorEndPosition.y - cursorInWindowPosition.y
  return {
    x: x + 'px',
    y: y + 'px'
  }
})

function savecursorEndPosition({ x, y }: { x: number; y: number }): void {
  cursorEndPosition.x = x
  cursorEndPosition.y = y
}

onMounted(() => {
  titleBarRef.value?.addEventListener('mousedown', (e) => {
    const { top, left } = windowRef.value?.getBoundingClientRect() || {
      left: 0,
      top: 0
    }
    cursorInWindowPosition.x = e.x - left
    cursorInWindowPosition.y = e.y - top
    savecursorEndPosition(e)
    document.body.addEventListener('mousemove', savecursorEndPosition)
  })

  titleBarRef.value?.addEventListener('mouseup', () => {
      document.body.removeEventListener('mousemove', savecursorEndPosition)
  })
})
</script>

<style scoped></style>
