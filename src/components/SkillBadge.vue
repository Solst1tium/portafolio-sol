<template>
  <span
    class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 cursor-default"
    :class="skill.level === 'advanced'
      ? 'bg-primary/15 text-blue-400 border border-primary/30 hover:bg-primary/25'
      : 'bg-secondary/15 text-purple-400 border border-secondary/30 hover:bg-secondary/25'"
  >
    {{ skill.name }}
  </span>
</template>

<script setup>
defineProps({
  skill: { type: Object, required: true }
})
</script>