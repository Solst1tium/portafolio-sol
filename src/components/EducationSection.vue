<template>
  <section id="educacion" class="py-20">
    <div class="max-w-300 mx-auto px-6">
      <h2 class="text-3xl font-bold mb-1 relative after:content-[''] after:block
                 after:w-15 after:h-0.75 after:bg-primary after:mt-2 after:rounded">
        Educación
      </h2>
      <p class="text-text-secondary mb-12 mt-4">Mi formación académica</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="edu in education"
          :key="edu.id"
          class="bg-bg-card border border-border rounded-xl p-8
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                 hover:border-primary"
        >
          <span class="text-3xl block mb-4">{{ edu.icon }}</span>
          <h3 class="text-lg font-semibold text-text-primary mb-2">{{ edu.title }}</h3>
          <p class="text-primary font-medium text-[0.95rem] mb-1">{{ edu.institution }}</p>
          <span class="text-text-muted text-sm block mb-4">{{ edu.period }}</span>
          <p class="text-text-secondary text-[0.95rem]">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/education.js';
</script>