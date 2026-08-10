<template>
  <section id="sobre-mi" class="py-20">
    <div class="max-w-300 mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- Texto -->
        <div class="lg:col-span-2">
          <h2 class="text-3xl font-bold mb-1 relative after:content-[''] after:block
                     after:w-15 after:h-0.75 after:bg-primary after:mt-2 after:rounded">
            Sobre Mí
          </h2>
          <p class="text-text-secondary mb-8 mt-4">Conóceme un poco más</p>

          <div class="space-y-4">
            <p class="text-text-secondary text-[1.05rem] leading-relaxed">
              Ingeniera en Computación e Informática con experiencia en desarrollo Front-End
              utilizando <strong class="text-text-primary font-semibold">Angular</strong>,
              <strong class="text-text-primary font-semibold">Vue.js</strong>,
              <strong class="text-text-primary font-semibold">TypeScript</strong> y
              <strong class="text-text-primary font-semibold">JavaScript</strong>.
            </p>
            <p class="text-text-secondary text-[1.05rem] leading-relaxed">
              Me especializo en la construcción de interfaces modernas, componentes
              reutilizables y soluciones orientadas a una buena experiencia de usuario.
              He desarrollado dashboards interactivos, integrado APIs REST y trabajado
              con visualización de datos mediante consultas SQL.
            </p>
            <p class="text-text-secondary text-[1.05rem] leading-relaxed">
              Destaco por mi aprendizaje continuo y adaptación a nuevas tecnologías,
              así como por mi experiencia formando y acompañando a otros desarrolladores.
            </p>
          </div>

          <div class="flex flex-wrap gap-4 mt-8">
            <a href="/CV-Solange-Leiva2026Desarrollador.pdf" download
               class="bg-primary text-white px-6 py-3 rounded-lg font-semibold
                      hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg
                      hover:shadow-primary/30 transition-all duration-300">
              📄 Descargar CV
            </a>
            <a href="#contacto"
               class="border border-border text-text-secondary px-6 py-3 rounded-lg
                      font-semibold hover:border-primary hover:text-primary
                      transition-all duration-300">
              Hablemos →
            </a>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-bg-card border border-border rounded-xl p-6 text-center
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                      hover:border-primary">
            <span class="block text-3xl font-extrabold text-primary mb-1">5+</span>
            <span class="text-text-secondary text-sm">Años de experiencia</span>
          </div>
          <div class="bg-bg-card border border-border rounded-xl p-6 text-center
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                      hover:border-primary">
            <span class="block text-3xl font-extrabold text-primary mb-1">4+</span>
            <span class="text-text-secondary text-sm">Empresas</span>
          </div>
          <div class="bg-bg-card border border-border rounded-xl p-6 text-center
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                      hover:border-primary">
            <span class="block text-3xl font-extrabold text-primary mb-1">2</span>
            <span class="text-text-secondary text-sm">Frameworks dominados</span>
          </div>
          <div class="bg-bg-card border border-border rounded-xl p-6 text-center
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                      hover:border-primary">
            <span class="block text-3xl font-extrabold text-primary mb-1">10+</span>
            <span class="text-text-secondary text-sm">Cursos impartidos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>