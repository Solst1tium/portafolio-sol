<template>
  <Transition name="fade">
    <button
      v-show="visible"
      class="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-primary text-white
             flex items-center justify-center text-lg shadow-lg z-998
             hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>