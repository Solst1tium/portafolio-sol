<template>
  <section id="proyectos" class="py-20">
    <div class="max-w-300 mx-auto px-6">
      <h2 class="text-3xl font-bold mb-1 relative after:content-[''] after:block
                 after:w-15 after:h-0.75 after:bg-primary after:mt-2 after:rounded">
        Proyectos
      </h2>
      <p class="text-text-secondary mb-12 mt-4">Una selección de mis trabajos más destacados</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>

      <div class="text-center mt-12">
        <a href="https://github.com/Solst1tium" target="_blank" rel="noopener"
           class="inline-flex items-center gap-2 border border-border text-text-secondary
                  px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary
                  transition-all duration-300">
          Ver más en GitHub →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.vue';
</script>