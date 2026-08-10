<template>
  <footer class="border-t border-border py-8 bg-bg-dark/50">
    <div class="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-center md:text-left">
        <p class="text-text-secondary text-sm">© {{ currentYear }} Solange Leiva Antillanca</p>
        <p class="text-text-muted text-xs mt-1">Hecho con 💙 y Vue.js</p>
      </div>
      <div class="flex gap-6">
        <a href="https://github.com/tu-usuario" target="_blank"
           class="text-text-secondary hover:text-primary text-sm transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/tu-usuario" target="_blank"
           class="text-text-secondary hover:text-primary text-sm transition-colors">
          LinkedIn
        </a>
        <a href="mailto:solange.leiva@mayor.com"
           class="text-text-secondary hover:text-primary text-sm transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>