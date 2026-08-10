<template>
  <section id="habilidades" class="py-20 bg-bg-section">
    <div class="max-w-300 mx-auto px-6">
      <h2 class="text-3xl font-bold mb-1 relative after:content-[''] after:block
                 after:w-15 after:h-0.75 after:bg-primary after:mt-2 after:rounded">
        Habilidades Técnicas
      </h2>
      <p class="text-text-secondary mb-12 mt-4">Tecnologías y herramientas que utilizo</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="cat in skillCategories"
          :key="cat.title"
          class="bg-bg-card border border-border rounded-xl p-8
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                 hover:border-primary"
        >
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ cat.icon }}</span>
            <h3 class="text-xl font-semibold text-text-primary">{{ cat.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="skill in cat.skills" :key="skill.name" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillCategories } from '../data/skills.js';
import SkillBadge from './SkillBadge.vue';
</script>