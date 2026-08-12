<template>
  <header class="fixed top-0 left-0 right-0 z-50 h-17.5 transition-all duration-300" :class="isScrolled
    ? 'bg-bg-dark md:bg-bg-dark/95 md:backdrop-blur-md shadow-lg border-b border-border'
    : 'bg-bg-dark/80 md:bg-transparent md:backdrop-blur-sm'">
    <div class="max-w-300 mx-auto px-6 h-full flex items-center justify-between">

      <!-- Logo -->
      <a href="#hero" class="text-xl font-extrabold font-mono text-text-primary">
        <span class="text-primary">&lt;</span>SL<span class="text-primary">/&gt;</span>
      </a>

      <!-- Links desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="font-medium text-[0.95rem] transition-colors duration-200 relative
       after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
       after:bg-warning after:transition-all after:duration-300" :class="isActive(link)
        ? 'text-warning  after:w-full'
        : 'text-text-secondary hover:text-text-primary hover:after:w-full'">
          {{ link.label }}
        </a>
        <a href="#contacto" class="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm
                 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg
                 hover:shadow-primary/25 transition-all duration-300">
          Contactar
        </a>
      </nav>

      <!-- Hamburguesa -->
      <button class="md:hidden flex flex-col gap-1.25 p-1 z-1001" @click="menuOpen = !menuOpen" aria-label="Abrir menú">
        <span class="w-6 h-0.5 bg-text-primary rounded transition-all duration-300"
          :class="{ 'rotate-45 translate-y-1.75': menuOpen }"></span>
        <span class="w-6 h-0.5 bg-text-primary rounded transition-all duration-300"
          :class="{ 'opacity-0': menuOpen }"></span>
        <span class="w-6 h-0.5 bg-text-primary rounded transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-1.75': menuOpen }"></span>
      </button>
    </div>

    <!-- Menú mobile -->
    <Transition name="slide-menu">
      <nav v-if="menuOpen" class="md:hidden fixed top-17.5 left-0 right-0 bottom-0
               bg-bg-dark flex flex-col items-center
               justify-center gap-8 z-999">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-xl font-medium transition-colors"
          :class="isActive(link) ? 'text-warning' : 'text-text-secondary hover:text-warning'" @click="menuOpen = false">
          {{ link.label }}
        </a>
        <a href="#contacto" class="bg-primary text-white px-8 py-3 rounded-lg font-semibold
                 hover:bg-primary-dark transition-colors" @click="menuOpen = false">
          Contactar
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Verifica si un link es la sección activa
const isActive = (link) => {
  return activeSection.value === link.href.substring(1)
}

let observer = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Scroll spy: detecta qué sección está visible
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-50% 0px -50% 0px'
  })

  // Observa cada sección del menú
  navLinks.forEach(link => {
    const section = document.querySelector(link.href)
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>