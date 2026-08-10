<template>
  <div class="min-h-screen bg-bg-dark text-text-primary">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
  
    </main>
    <FooterBar />
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar from  './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import BackToTop from './components/BackToTop.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'

</script>