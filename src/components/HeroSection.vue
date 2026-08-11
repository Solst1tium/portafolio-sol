<template>
  <section id="hero" class="min-h-screen flex items-center pt-17.5 relative">
    <div class="max-w-300 mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Texto -->
      <div class="text-center lg:text-left">
        <p class="text-primary font-semibold font-mono text-lg mb-2">¡Hola! Soy</p>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3
                   bg-linear-to-r from-text-primary to-primary-light bg-clip-text text-transparent">
          Solange Leiva
        </h1>

        <h2 class="text-xl sm:text-2xl font-semibold text-text-secondary mb-6">
          Desarrolladora <span class="text-primary">Front-End</span>
        </h2>

        <!-- Descripción (texto secundario) -->
        <p class="text-text-secondary text-lg leading-relaxed max-w-lg">
          Ingeniera en Computación e Informática. Trabajo con
          <strong class="text-text-primary font-semibold">Angular</strong>,
          <strong class="text-text-primary font-semibold">Vue.js</strong> y
          <strong class="text-text-primary font-semibold">TypeScript</strong>
          para crear dashboards interactivos e interfaces funcionales,
          integrando APIs REST y visualizando datos. Mi enfoque: componentes
          reutilizables, código limpio y mejora continua.
        </p>

       <!-- Botones -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 mb-8">
          <a href="#proyectos" class="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center
                    hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg
                    hover:shadow-primary/30 transition-all duration-300">
            Ver Proyectos ↓
          </a>
        </div>

        <!-- Social -->
        <div class="flex gap-4 justify-center lg:justify-start">
          <a href="https://github.com/Solst1tium" target="_blank" class="text-text-secondary hover:text-primary hover:-translate-y-1
                    transition-all duration-300 p-2" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/solange-l-26802b6b/" target="_blank" class="text-text-secondary hover:text-primary hover:-translate-y-1
                    transition-all duration-300 p-2" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Code Card -->
      <div class="hidden lg:block">
        <div class="bg-bg-card border border-border rounded-xl overflow-hidden
                    shadow-card">
          <div class="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-border">
            <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span class="w-3 h-3 rounded-full bg-[#27ca3f]"></span>
            <span class="ml-auto text-xs text-text-muted font-mono">developer.js</span>
          </div>
          <pre class="p-6 font-mono text-sm leading-[1.8] overflow-x-auto"><code><span class="text-[#c678dd]">const</span> <span class="text-[#e06c75]">developer</span> = {
  <span class="text-[#61afef]">name</span>: <span class="text-[#98c379]">'Solange Leiva'</span>,
  <span class="text-[#61afef]">role</span>: <span class="text-[#98c379]">'Desarrolladora Front-End'</span>,
  <span class="text-[#61afef]">location</span>: <span class="text-[#98c379]">'Chile'</span>,
  <span class="text-[#61afef]">openTo</span>: [
    <span class="text-[#98c379]">'Remoto'</span>,
    <span class="text-[#98c379]">'Proyectos'</span>
  ],
  <span class="text-[#61afef]">passion</span>: <span class="text-[#98c379]">'Clean Code'</span>,
  <span class="text-[#61afef]">available</span>: <span class="text-[#c678dd]">true</span>
};</code></pre>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a href="#sobre-mi"
        class="flex flex-col items-center gap-2 text-text-muted text-xs hover:text-primary transition-colors">
        <span>Scroll</span>
        <div class="w-5 h-8 border-2 border-text-muted rounded-full relative">
          <div class="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-bounce"></div>
        </div>
      </a>
    </div>
  </section>
</template>