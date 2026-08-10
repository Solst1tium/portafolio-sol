<template>
  <section id="experiencia" class="py-20 bg-bg-section">
    <div class="max-w-300 mx-auto px-6">
      <h2 class="text-3xl font-bold mb-1 relative after:content-[''] after:block
                 after:w-15 after:h-0.75 after:bg-primary after:mt-2 after:rounded">
        Experiencia Profesional
      </h2>
      <p class="text-text-secondary mb-12 mt-4">Mi trayectoria en el desarrollo de software</p>

      <!-- Timeline -->
      <div class="relative pl-8 before:absolute before:left-2 before:top-0 before:bottom-0
                  before:w-0.5 before:bg-border">

        <div v-for="exp in experiences" :key="exp.id" class="relative mb-10 last:mb-0">

          <!-- Marker -->
          <div class="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary
                      border-[3px] border-bg-dark -translate-x-1.75 z-1"></div>

          <!-- Card -->
          <div class="bg-bg-card border border-border rounded-xl p-8
                      transition-all duration-300 hover:-translate-y-0.5
                      hover:shadow-lg hover:border-primary">

            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 class="text-lg font-semibold text-text-primary">{{ exp.role }}</h3>
                <p class="text-primary font-medium text-[0.95rem]">{{ exp.company }}</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-text-muted text-sm">{{ exp.period }}</span>
                <span
                  class="px-2.5 py-1 rounded text-xs font-semibold uppercase"
                  :class="{
                    'bg-success/15 text-success': exp.type === 'Desarrollo',
                    'bg-warning/15 text-warning': exp.type === 'Docencia',
                    'bg-secondary/15 text-purple-400': exp.type === 'Contenido'
                  }"
                >
                  {{ exp.type }}
                </span>
              </div>
            </div>

            <!-- Descripción -->
            <p class="text-text-secondary text-[0.95rem] mb-4">{{ exp.description }}</p>

            <!-- Highlights -->
            <ul class="mb-4 space-y-1.5">
              <li
                v-for="h in exp.highlights"
                :key="h"
                class="text-text-secondary text-sm pl-4 relative
                       before:content-['▹'] before:absolute before:left-0 before:text-primary"
              >
                {{ h }}
              </li>
            </ul>

            <!-- Tech -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="px-2.5 py-1 bg-primary/10 text-primary-light border border-primary/20
                       rounded text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '../data/experiences.js';
</script>