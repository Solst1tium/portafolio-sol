<template>
  <article class="bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col
           transition-all duration-300 hover:-translate-y-1 hover:shadow-card
           hover:border-primary group">
    <!-- Imagen -->
    <div class="relative h-55 overflow-hidden bg-bg-dark">
      <!-- ✅ Manejo de error de imagen -->
      <img :src="project.image" :alt="project.title" loading="lazy" @error="handleImageError"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <!-- ✅ Placeholder mientras carga o si falla la imagen -->
      <div v-if="imageError"
        class="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-bg-card to-bg-dark">
        <span class="text-6xl mb-3">{{ getProjectIcon() }}</span>
        <span class="text-text-secondary text-sm font-medium">{{ project.title }}</span>
        <span class="text-text-secondary/50 text-xs mt-1">📸 Captura próximamente</span>
        <div class="flex gap-3 mt-4">
          <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
            class="px-2 py-0.5 bg-primary/10 text-primary-light border border-primary/20 rounded text-xs">
            {{ tech }}
          </span>
          <span v-if="project.technologies.length > 3" class="text-xs text-text-secondary/50">
            +{{ project.technologies.length - 3 }}
          </span>
        </div>
      </div>

      <!-- Overlay hover (escritorio)-->
     <div   class="absolute inset-0 bg-bg-dark/85 items-center justify-center gap-4
               opacity-0 transition-opacity duration-300
               hidden md:flex md:group-hover:opacity-100">
      <a
        v-if="project.demoUrl && project.demoUrl !== '#'"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener"
        class="bg-primary text-white px-4 py-2.5 rounded-lg font-semibold text-sm
               text-center hover:bg-primary-dark transition-colors"
      >
        Ver Demo
      </a>
      <a
        :href="project.repoUrl"
        target="_blank"
        rel="noopener"
        class=" border-2 border-primary text-primary px-4 py-2.5 rounded-lg font-semibold
               text-sm text-center hover:bg-primary hover:text-white transition-colors"
      >
        Código
      </a>
    </div>

      <!-- Badge destacado -->
      <span v-if="project.featured" class="absolute top-3 right-3 bg-warning/60 text-white px-3 py-1 rounded-full
               text-xs font-semibold shadow-md">
        ⭐ Destacado
      </span>
    </div>


      <!-- Botones siempre visibles (SOLO móvil) -->
    <div class="md:hidden flex gap-3 px-6 pt-4">
      <a
        v-if="project.demoUrl && project.demoUrl !== '#'"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener"
        class="flex-1 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold text-sm
               text-center hover:bg-primary-dark transition-colors"
      >
        Ver Demo
      </a>
      <a
        :href="project.repoUrl"
        target="_blank"
        rel="noopener"
        class="flex-1 border-2 border-primary text-primary px-4 py-2.5 rounded-lg font-semibold
               text-sm text-center hover:bg-primary hover:text-white transition-colors"
      >
        Código
      </a>
    </div>




    <!-- Contenido -->
    <div class="p-6 flex flex-col flex-1">
      <h3 class="text-lg font-semibold mb-2 text-text-primary">{{ project.title }}</h3>
      <p class="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {{ project.description }}
      </p>

      <!-- Highlights -->
      <ul v-if="project.highlights" class="mb-4 space-y-1.5">
        <li v-for="h in project.highlights" :key="h" class="text-text-secondary text-[0.85rem] pl-4 relative
                 before:content-['▹'] before:absolute before:left-0 before:text-primary">
          {{ h }}
        </li>
      </ul>

      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-2 mt-auto">
        <span v-for="tech in project.technologies" :key="tech" class="px-2.5 py-1 bg-primary/10 text-primary-light border border-primary/20
                 rounded text-xs font-medium">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const imageError = ref(false)

// Manejar error de carga de imagen
const handleImageError = () => {
  imageError.value = true
}

// Obtener icono según tecnología principal
const getProjectIcon = () => {
  const tech = props.project.technologies[0] || ''
  const icons = {
    'Angular': '🅰️',
    'Vue 3': '🟢',
    'Vue': '🟢',
    'React': '⚛️',
    'HTML5': '🌐',
    'HTML': '🌐',
    'JavaScript': '🟨',
    'TypeScript': '📘',
    'Node': '🟩',
    'Python': '🐍',
    'Java': '☕',
    'PHP': '🐘',
    'Ruby': '💎',
    'Go': '🐹',
    'Rust': '🦀'
  }
  return icons[tech] || '🚀'
}
</script>

<style scoped>
/* ✅ Animación de carga suave para el placeholder */
.placeholder-enter-active,
.placeholder-leave-active {
  transition: opacity 0.3s ease;
}

.placeholder-enter-from,
.placeholder-leave-to {
  opacity: 0;
}
</style>