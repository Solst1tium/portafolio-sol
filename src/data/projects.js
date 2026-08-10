export const projects = [
  {
    id: 1,
    title: 'Dashboard de Indicadores',
    description: 'Dashboard interactivo para monitoreo de indicadores operacionales y comerciales con filtros avanzados, gráficos dinámicos, rango de fechas y tablas con PrimeNG.',
    image: './images/project-dashboard.svg',
    technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Chart.js', 'SCSS'],
    demoUrl: 'https://solst1tium.github.io/dashboard-indicadores/dashboard',
    repoUrl: 'https://github.com/Solst1tium/dashboard-indicadores',
    featured: true,
    highlights: [
      'Filtros avanzados con búsqueda y rango de fechas',
      'Gráficos interactivos con Chart.js',
      'Tabla con paginación, ordenamiento y tags'
    ]
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Aplicación CRUD de gestión de tareas con Vue 3, Composition API, Pinia para manejo de estado y Vue Router. Persistencia con LocalStorage.',
    image: './images/project-taskmanager.svg',
    technologies: ['Vue 3', 'Pinia', 'Vue Router', 'Composition API'],
    demoUrl: 'https://tu-usuario.github.io/task-manager/',
    repoUrl: 'https://github.com/tu-usuario/task-manager',
    featured: true,
    highlights: [
      'CRUD completo con Pinia',
      'Filtros por estado (todas, pendientes, completadas)',
      'Animaciones con TransitionGroup'
    ]
  },
  {
    id: 3,
    title: 'Catálogo de Productos',
    description: 'Tienda online con carrito de compras, filtros por categoría, búsqueda en tiempo real y diseño responsive mobile-first.',
    image: './images/project-catalog.png',
    technologies: ['Vue 3', 'TypeScript', 'API REST', 'CSS'],
    demoUrl: '#',
    repoUrl: 'https://github.com/tu-usuario/product-catalog',
    featured: false,
    highlights: [
      'Carrito de compras con estado global',
      'Búsqueda y filtros en tiempo real'
    ]
  },
  {
    id: 4,
    title: 'Landing Page Corporativa',
    description: 'Sitio web responsivo con animaciones CSS, formulario de contacto, diseño mobile-first y optimización de rendimiento.',
    image: '/images/project-landing.png',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Responsive'],
    demoUrl: '#',
    repoUrl: 'https://github.com/tu-usuario/landing-page',
    featured: false,
    highlights: [
      'Diseño mobile-first',
      'Animaciones CSS puras',
      'Score Lighthouse > 95'
    ]
  }
]