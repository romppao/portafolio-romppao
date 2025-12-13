import React, { useState } from 'react';
import { Camera, Clapperboard, Mail, Instagram, X as CloseIcon, ChevronRight, Play, Film, Tv, Video, User, Moon, Mountain, Trophy, Phone } from 'lucide-react';
// Cache buster: 2024-12-02-21:28 - Removed 'Todo' filters

// =========================================================================
//  ZONA DE DATOS (Puedes editar las URLs de las imágenes aquí)
// =========================================================================

const portfolioItems = [
  {
    id: 1,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-1.jpg`,
    alt: 'Fotografía de retrato urbano en Madrid - Sesión de moda profesional por ROMPPAO',
    title: 'Mirada Urbana',
    description: 'Sesión de moda en Madrid centro.'
  },
  {
    id: 42,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-12.jpg`,
    alt: 'Fotografía de retrato urbano - Sonrisa auténtica con gorro - ROMPPAO fotógrafo Madrid',
    title: 'Sonrisa Radiante',
    description: 'La luz del momento capturada.'
  },
  {
    id: 43,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-13.jpg`,
    alt: 'Fotografía de retrato urbano - Mirada intensa con gorro - ROMPPAO fotógrafo Madrid',
    title: 'Actitud Serena',
    description: 'Confianza y estilo urbano.'
  },
  {
    id: 44,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-14.jpg`,
    alt: 'Fotografía de retrato urbano - Vista superior con líneas arquitectónicas - ROMPPAO fotógrafo Madrid',
    title: 'Perspectiva Única',
    description: 'Geometría urbana y carácter.'
  },
  {
    id: 45,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-15.jpg`,
    alt: 'Fotografía de retrato urbano - Mirada pensativa desde arriba - ROMPPAO fotógrafo Madrid',
    title: 'Contemplación Urbana',
    description: 'El momento antes del siguiente paso.'
  },
  {
    id: 46,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-16.jpg`,
    alt: 'Fotografía de retrato urbano - Pose dinámica con líneas arquitectónicas - ROMPPAO fotógrafo Madrid',
    title: 'Geometría en Movimiento',
    description: 'Arquitectura y actitud en armonía.'
  },
  {
    id: 47,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-17.jpg`,
    alt: 'Fotografía de retrato urbano - Mirada directa en ascensor - ROMPPAO fotógrafo Madrid',
    title: 'Mirada Directa',
    description: 'Confianza en espacios cerrados.'
  },
  {
    id: 48,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-18.jpg`,
    alt: 'Fotografía de retrato urbano - Mirada contemplativa hacia abajo - ROMPPAO fotógrafo Madrid',
    title: 'Introspección',
    description: 'Momentos de reflexión urbana.'
  },
  {
    id: 49,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-19.jpg`,
    alt: 'Fotografía de retrato urbano - Perfil lateral con mirada intensa - ROMPPAO fotógrafo Madrid',
    title: 'Visión Lateral',
    description: 'Perspectiva y carácter.'
  },
  {
    id: 50,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-20.jpg`,
    alt: 'Fotografía de retrato urbano - Figura anónima con gorro - ROMPPAO fotógrafo Madrid',
    title: 'Misterio Urbano',
    description: 'La identidad tras la capucha.'
  },
  {
    id: 51,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-21.jpg`,
    alt: 'Fotografía de retrato urbano - Pose con capucha y actitud - ROMPPAO fotógrafo Madrid',
    title: 'Estilo Urbano',
    description: 'Actitud y confianza callejera.'
  },
  {
    id: 52,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-22.jpg`,
    alt: 'Fotografía de retrato urbano - Vista cenital con gesto distintivo - ROMPPAO fotógrafo Madrid',
    title: 'Perspectiva Cenital',
    description: 'Ángulos únicos, expresión auténtica.'
  },
  {
    id: 20,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-2.jpg`,
    alt: 'Fotografía de retrato urbano - Sesión callejera con grupo - ROMPPAO fotógrafo Madrid',
    title: 'Energía Colectiva',
    description: 'Actitud urbana, miradas auténticas.'
  },
  {
    id: 21,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-3.jpg`,
    alt: 'Fotografía de retrato urbano - Perspectiva desde primer plano - ROMPPAO fotógrafo Madrid',
    title: 'Perspectivas',
    description: 'Lo que está detrás también cuenta.'
  },
  {
    id: 22,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-4.jpg`,
    alt: 'Fotografía de retrato urbano desde ángulo bajo - Grupo street style - ROMPPAO fotógrafo Madrid',
    title: 'Desde Abajo',
    description: 'Ángulos que elevan la escena.'
  },
  {
    id: 23,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-5.jpg`,
    alt: 'Fotografía de retrato urbano - Expresión vibrante con colores amarillos - ROMPPAO fotógrafo Madrid',
    title: 'Vibra Dorada',
    description: 'Color, actitud y luz urbana.'
  },
  {
    id: 24,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-6.jpg`,
    alt: 'Fotografía de retrato urbano - Mirada hacia arriba con gorra LA - ROMPPAO fotógrafo Madrid',
    title: 'Elevación',
    description: 'Mirando hacia donde vamos.'
  },
  {
    id: 25,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-7.jpg`,
    alt: 'Fotografía de retrato urbano frontal - Expresión intensa con ATM de fondo - ROMPPAO fotógrafo Madrid',
    title: 'Presencia',
    description: 'Cuando la mirada dice todo.'
  },
  {
    id: 26,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-8.jpg`,
    alt: 'Fotografía de retrato urbano doble - Camiseta amarilla con diseño gráfico - ROMPPAO fotógrafo Madrid',
    title: 'Dualidad Urbana',
    description: 'Dos energías, un mismo espacio.'
  },
  {
    id: 27,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-9.jpg`,
    alt: 'Fotografía de retrato urbano lateral - Perfil con cadenas y gorra LA - ROMPPAO fotógrafo Madrid',
    title: 'Líneas y Cadenas',
    description: 'Perfil que marca estilo.'
  },
  {
    id: 28,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-10.jpg`,
    alt: 'Fotografía de retrato urbano lateral - Fondo ATM camiseta deportiva - ROMPPAO fotógrafo Madrid',
    title: 'Mirada Lateral',
    description: 'Perfil urbano, fondo metropolitano.'
  },
  {
    id: 29,
    type: 'photo',
    category: 'Retrato',
    src: `${process.env.PUBLIC_URL}/images/retrato-11.jpg`,
    alt: 'Fotografía de retrato urbano frontal - Brazos cruzados con camiseta deportiva - ROMPPAO fotógrafo Madrid',
    title: 'Actitud Deportiva',
    description: 'Confianza, estilo y carácter.'
  },

  {
    id: 3,
    type: 'photo',
    category: 'Paisaje',
    src: `${process.env.PUBLIC_URL}/images/paisaje-1.jpg`,
    alt: 'Fotografía de paisaje al amanecer en La Pedriza, Madrid - ROMPPAO',
    title: 'Amanecer en la pedriza',
    description: 'Fotografía de paisaje.'
  },
  {
    id: 5,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/lEz1hHGvNMc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/lEz1hHGvNMc?si=2xUl1TSNYtzkTvJp',
    alt: 'Videoclip LAKYLA - KANEIS, AITOR - Video musical filmado por ROMPPAO',
    title: 'KANEIS, AITOR - LAKYLA',
    description: 'Video musical oficial. Filmado por ROMPPAO.'
  },
  {
    id: 9,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/SnJWY2C5VKs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/SnJWY2C5VKs?si=2a9OXhHKFpNin1NA',
    alt: 'Videoclip GENES - KANEIS - Video musical filmado por ROMPPAO',
    title: 'KANEIS - GENES',
    description: 'Video musical oficial. Filmado por ROMPPAO.'
  },
  {
    id: 10,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/CWED5hhsGu0/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/CWED5hhsGu0?si=_lzqrTpYlgLRnUmi',
    alt: 'Videoclip PASO DE ELLA - Bad Key - Video musical filmado por ROMPPAO',
    title: 'BAD KEY - PASO DE ELLA',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
  },
  {
    id: 34,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/RS-8J4NYboc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/RS-8J4NYboc?si=gBUuW7XiQM6549iF',
    alt: 'Videoclip NO WORRIES - Vare Gang ft. Mkbloond, KXNNZ - Video musical filmado por ROMPPAO',
    title: 'VARE GANG, MKBLOOND, KXNNZ - NO WORRIES',
    description: 'Video musical oficial. Filmado por ROMPPAO.'
  },
  {
    id: 35,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/1e4-du2hsR4/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/1e4-du2hsR4?si=ClkFdAy2Q3fMn7Hk',
    alt: 'Videoclip MALA - MKBLOOND - Video musical filmado por ROMPPAO',
    title: 'MKBLOOND - MALA',
    description: 'Video musical oficial. Filmado por ROMPPAO.'
  },
  {
    id: 36,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/NWiLvYD6t4c/hqdefault.jpg',
    videoUrl: 'https://youtu.be/NWiLvYD6t4c?si=5kJx8eLrQd_vXWgP',
    alt: 'Videoclip Souvenir - Kaneis - Video musical filmado por ROMPPAO',
    title: 'KANEIS - SOUVENIR',
    description: 'Video oficial. Filmado por ROMPPAO.'
  },
  {
    id: 37,
    type: 'video',
    category: 'Vlogging',
    src: 'https://img.youtube.com/vi/sJ7J5kEa2pE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/sJ7J5kEa2pE?si=dvTr4n_FnZ1j1vMx',
    alt: 'Vlog Gudus Live - ME INFILTRO EN CASA DE THEGREFG| 48H EN ANDORRA - Filmado por ROMPPAO',
    title: 'Gudus Live',
    description: 'ME INFILTRO EN CASA DE THEGREFG| 48H EN ANDORRA'
  },
  // =========================================================================
  // EJEMPLO: Cómo añadir un video LOCAL en la sección COMERCIAL
  // =========================================================================
  // Descomenta y personaliza este ejemplo cuando subas tu primer video:
  // 
  // {
  //   id: 38,
  //   type: 'video',
  //   category: 'Comercial',
  //   src: `${process.env.PUBLIC_URL}/videos/thumbnails/nombre-miniatura.jpg`,
  //   videoUrl: `${process.env.PUBLIC_URL}/videos/nombre-video.mp4`,
  //   alt: 'Video comercial [nombre del cliente] - ROMPPAO filmmaker Madrid',
  //   title: 'Nombre del Cliente o Proyecto',
  //   description: 'Breve descripción del proyecto comercial.'
  // },
  // 
  // INSTRUCCIONES:
  // 1. Sube tu video a: public/videos/nombre-video.mp4
  // 2. Sube la miniatura a: public/videos/thumbnails/nombre-miniatura.jpg
  // 3. Descomenta el código de arriba y personaliza los valores
  // 4. Cambia el ID por el siguiente número disponible
  // =========================================================================
  {
    id: 38,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/layali-clip-1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/layali-clip-1.mp4`,
    alt: 'Video comercial LAYALI - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'LAYALI',
    description: 'Producción Audiovisual'
  },
  {
    id: 39,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/layali-clip-2-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/layali-clip-2.mp4`,
    alt: 'Video comercial LAYALI - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'LAYALI',
    description: 'Producción Audiovisual'
  },
  {
    id: 40,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/layali-clip-3-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/layali-clip-3.mp4`,
    alt: 'Video comercial LAYALI - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'LAYALI',
    description: 'Producción Audiovisual'
  },
  {
    id: 41,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/layali-clip-4-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/layali-clip-4.mp4`,
    alt: 'Video comercial LAYALI - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'LAYALI',
    description: 'Producción Audiovisual'
  },
  {
    id: 4,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-1.jpg`,
    alt: 'Fotografía artística en blanco y negro - Sombras - ROMPPAO fotógrafo Madrid',
    title: 'Sombras',
    description: 'La elegancia no tiene color.'
  },
  {
    id: 11,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-2.jpg`,
    alt: 'Retrato urbano en blanco y negro - Confianza - ROMPPAO fotógrafo Madrid',
    title: 'Confianza Urbana',
    description: 'Mirada directa, actitud firme.'
  },
  {
    id: 12,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-3.jpg`,
    alt: 'Retrato de perfil en blanco y negro - Contemplación - ROMPPAO fotógrafo Madrid',
    title: 'Contemplación',
    description: 'El momento antes del siguiente paso.'
  },
  {
    id: 13,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-4.jpg`,
    alt: 'Retrato urbano con brazos cruzados en blanco y negro - ROMPPAO fotógrafo Madrid',
    title: 'Actitud',
    description: 'Seguridad en cada gesto.'
  },
  {
    id: 14,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-5.jpg`,
    alt: 'Retrato de espaldas en blanco y negro - Perspectiva - ROMPPAO fotógrafo Madrid',
    title: 'Perspectiva',
    description: 'Lo que no se ve, también cuenta.'
  },
  {
    id: 15,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-6.jpg`,
    alt: 'Retrato sonriente en blanco y negro - Alegría Natural - ROMPPAO fotógrafo Madrid',
    title: 'Alegría Natural',
    description: 'La luz que nace desde dentro.'
  },
  {
    id: 16,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-7.jpg`,
    alt: 'Fotografía de estilo urbano en blanco y negro - Hermandad - ROMPPAO fotógrafo Madrid',
    title: 'Hermandad',
    description: 'Dos mundos, un mismo camino.'
  },
  {
    id: 17,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-8.jpg`,
    alt: 'Retrato nocturno urbano en blanco y negro - Noche en la Ciudad - ROMPPAO fotógrafo Madrid',
    title: 'Noche en la Ciudad',
    description: 'Cuando las luces cuentan historias.'
  },
  {
    id: 18,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-9.jpg`,
    alt: 'Retrato de perfil con gafas en blanco y negro - Visión Lateral - ROMPPAO fotógrafo Madrid',
    title: 'Visión Lateral',
    description: 'Detalles que definen.'
  },
  {
    id: 19,
    type: 'photo',
    category: 'Blanco y Negro',
    src: `${process.env.PUBLIC_URL}/images/blancoynegro-10.jpg`,
    alt: 'Retrato frontal con gafas redondas en blanco y negro - Mirada Intelectual - ROMPPAO',
    title: 'Mirada Intelectual',
    description: 'Estilo que trasciende el tiempo.'
  },

  {
    id: 8,
    type: 'photo',
    category: 'Boxeo',
    src: `${process.env.PUBLIC_URL}/images/boxeo-1.jpg`,
    alt: 'Fotografía de boxeo profesional - Saul instantes previos al combate - ROMPPAO',
    title: 'Saul',
    description: 'Instantes previos a la guerra.'
  },
  {
    id: 30,
    type: 'photo',
    category: 'Boxeo',
    src: `${process.env.PUBLIC_URL}/images/boxeo-2.jpg`,
    alt: 'Fotografía de boxeo - Entrenamiento en el ring con su entrenador - ROMPPAO fotógrafo Madrid',
    title: 'Bajo las Cuerdas',
    description: 'Intensidad desde el ángulo del combate.'
  },
  {
    id: 31,
    type: 'photo',
    category: 'Boxeo',
    src: `${process.env.PUBLIC_URL}/images/boxeo-3.jpg`,
    alt: 'Fotografía de boxeo - Boxeador en guardia frontal - ROMPPAO fotógrafo Madrid',
    title: 'En Guardia',
    description: 'Concentración antes del primer golpe.'
  },
  {
    id: 32,
    type: 'photo',
    category: 'Boxeo',
    src: `${process.env.PUBLIC_URL}/images/boxeo-4.jpg`,
    alt: 'Fotografía de boxeo - Retrato de perfil de boxeador concentrado - ROMPPAO fotógrafo Madrid',
    title: 'Mentalidad de Campeón',
    description: 'La concentración lo es todo.'
  },
  {
    id: 33,
    type: 'photo',
    category: 'Boxeo',
    src: `${process.env.PUBLIC_URL}/images/boxeo-5.jpg`,
    alt: 'Fotografía de boxeo - Boxer con su entrenador en esquina del ring - ROMPPAO fotógrafo Madrid',
    title: 'La Esquina',
    description: 'Consejos que cambian el rumbo.'
  },
  {
    id: 6,
    type: 'photo',
    category: 'Paisaje',
    src: `${process.env.PUBLIC_URL}/images/paisaje-2.jpg`,
    alt: 'Fotografía de paisaje bosques de La Pedriza, Madrid - Lejos del ruido - ROMPPAO',
    title: 'Lejos del ruido',
    description: 'Refugio, en los bosques de la pedriza.'
  }
];

// =========================================================================
//  COMPONENTE PRINCIPAL
// =========================================================================

const App = () => {
  const [filter, setFilter] = useState('photo');
  const [videoSubFilter, setVideoSubFilter] = useState('Videoclip');
  const [photoSubFilter, setPhotoSubFilter] = useState('Boxeo');
  const [selectedItem, setSelectedItem] = useState(null);

  // Helper function to check if video is from YouTube
  const isYouTubeVideo = (url) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Helper function to extract YouTube video ID from different URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;

    // Handle youtu.be/VIDEO_ID format
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return id || null;
    }

    // Handle youtube.com/watch?v=VIDEO_ID format
    if (url.includes('watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return id || null;
    }

    // Handle youtube.com/embed/VIDEO_ID format
    if (url.includes('embed/')) {
      const id = url.split('embed/')[1]?.split('?')[0];
      return id || null;
    }

    return null;
  };

  const filteredItems = portfolioItems.filter(item => {
    if (item.type !== filter) return false;
    if (filter === 'video') {
      return item.category === videoSubFilter;
    }
    if (filter === 'photo') {
      return item.category === photoSubFilter;
    }
    return true;
  });

  const handleMainFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (newFilter !== 'video') setVideoSubFilter('Videoclip');
    if (newFilter !== 'photo') setPhotoSubFilter('Boxeo');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-500 selection:text-white">
      {/* Skip to main content for keyboard users */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-xl"
      >
        Saltar al contenido principal
      </a>

      <nav role="navigation" aria-label="Navegación principal" className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase text-white">
            ROMPPAO
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#work" className="hover:text-red-500 transition-colors">Trabajo</a>
            <a href="#about" className="hover:text-red-500 transition-colors">Sobre Mí</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mx-auto w-40 h-40 md:w-52 md:h-52 mb-10 rounded-full overflow-hidden border-[3px] border-orange-600 shadow-2xl">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="ROMPPAO - Fotógrafo y filmmaker profesional en Madrid"
              fetchPriority="high"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Capturando la esencia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              en cada frame.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformando lo cotidiano en momentos inolvidables. Fotografía y Filmmaking desde Madrid.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-transform hover:scale-105 flex items-center"
            >
              Ver Portfolio <ChevronRight className="ml-2 w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border border-neutral-700 rounded-full hover:border-white hover:text-white transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
            <button
              onClick={() => handleMainFilterChange('photo')}
              aria-label="Filtrar por fotografías"
              aria-pressed={filter === 'photo'}
              className={`px-6 py-2 rounded-full text-sm flex items-center transition-all ${filter === 'photo' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white'}`}
            >
              <Camera className="w-4 h-4 mr-2" /> Fotografía
            </button>
            <button
              onClick={() => handleMainFilterChange('video')}
              aria-label="Filtrar por filmmaking"
              aria-pressed={filter === 'video'}
              className={`px-6 py-2 rounded-full text-sm flex items-center transition-all ${filter === 'video' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white'}`}
            >
              <Clapperboard className="w-4 h-4 mr-2" /> Filmmaking
            </button>
          </div>

          {filter === 'video' && (
            <div className="flex justify-center flex-wrap gap-2 animate-[fadeIn_0.5s_ease-out]">
              <button onClick={() => setVideoSubFilter('Videoclip')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${videoSubFilter === 'Videoclip' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Film className="w-3 h-3 mr-1.5" /> Videoclips
              </button>
              <button onClick={() => setVideoSubFilter('Comercial')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${videoSubFilter === 'Comercial' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Tv className="w-3 h-3 mr-1.5" /> Comercial
              </button>
              <button onClick={() => setVideoSubFilter('Vlogging')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${videoSubFilter === 'Vlogging' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Video className="w-3 h-3 mr-1.5" /> Vlogging
              </button>
            </div>
          )}

          {filter === 'photo' && (
            <div className="flex justify-center flex-wrap gap-2 animate-[fadeIn_0.5s_ease-out]">
              <button onClick={() => setPhotoSubFilter('Boxeo')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Boxeo' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Trophy className="w-3 h-3 mr-1.5" /> Boxeo
              </button>
              <button onClick={() => setPhotoSubFilter('Blanco y Negro')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Blanco y Negro' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Moon className="w-3 h-3 mr-1.5" /> B&N
              </button>
              <button onClick={() => setPhotoSubFilter('Retrato')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Retrato' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <User className="w-3 h-3 mr-1.5" /> Retrato
              </button>
              <button onClick={() => setPhotoSubFilter('Paisaje')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Paisaje' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Mountain className="w-3 h-3 mr-1.5" /> Paisaje
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative cursor-pointer overflow-hidden rounded-lg bg-neutral-900 ${item.type === 'video' ? 'aspect-video' : 'aspect-[4/5]'
                  }`}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 ${item.type === 'video' ? 'object-cover' : 'object-cover'
                    }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-neutral-300 text-sm mt-1">{item.description}</p>
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-neutral-500">
              <p>No hay proyectos en esta categoría todavía.</p>
            </div>
          )}
        </div>
      </section>


      <section id="about" className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Sobre mi</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-16">
            Soy un creador visual, fotógrafo, filmmaker independiente con base en Madrid. Mi trabajo es más que sujetar una cámara y darle a un botón, intento transformar lo más cotidiano en momentos inolvidables.
          </p>

          {/* Sección de Servicios */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-12">Servicios</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              {/* Fotografía */}
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <Camera className="w-6 h-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">Fotografía</h4>
                </div>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Retratos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Fotografía deportiva (boxeo, eventos deportivos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Cobertura de eventos y celebraciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Fotografía de paisajes</span>
                  </li>
                </ul>
              </div>

              {/* Videografía */}
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <Clapperboard className="w-6 h-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">Videografía</h4>
                </div>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Vlogs y contenido deportivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Aftermovies de eventos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Vídeos promocionales y redes sociales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Proyectos creativos personalizados</span>
                  </li>
                </ul>
              </div>

              {/* Edición y postproducción */}
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <Film className="w-6 h-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">Edición y postproducción</h4>
                </div>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Color grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Edición de vídeo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Retoque fotográfico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Edición y diseño de sonido</span>
                  </li>
                </ul>
              </div>

              {/* Disponibilidad */}
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold text-white">Disponibilidad</h4>
                </div>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Zona:</strong> Madrid y alrededores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Horarios:</strong> Tardes/noches entre semana, fines de semana completos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Sesiones:</strong> Hasta 3h (entre semana) / 6h (fin de semana)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Entrega:</strong> 1-2 semanas (foto), 2 semanas (vídeo)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Express:</strong> Disponible con coste adicional</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Información adicional y botón */}
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-800/50 p-6 rounded-lg border border-neutral-700 mb-8">
              <p className="text-neutral-300 text-sm mb-6">
                Para información detallada sobre disponibilidad específica y presupuestos personalizados, contáctame por correo o WhatsApp.
              </p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 inline-flex items-center"
              >
                Solicitar presupuesto
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="text-neutral-300 mb-8">Actualmente aceptando proyectos para finales de 2025.</p>

          <div className="flex flex-col items-center gap-4 mb-12">
            <a href="mailto:rompaoondo@gmail.com" className="inline-flex items-center text-2xl font-bold text-white hover:text-red-500 transition-colors">
              <Mail className="w-6 h-6 mr-3" />
              rompaoondo@gmail.com
            </a>
            <a href="https://wa.me/34602360254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-2xl font-bold text-white hover:text-green-500 transition-colors">
              <Phone className="w-6 h-6 mr-3" />
              +34 602 360 254
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/romppao?igsh=dW42aHJvb3hvY2g0" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all flex items-center gap-2 px-6">
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@romppao</span>
            </a>
          </div>

          <div className="mt-16 text-neutral-600 text-sm">
            © 2025 ROMPPAO. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {selectedItem && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors" onClick={() => setSelectedItem(null)} aria-label="Cerrar">
            <CloseIcon className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
                {isYouTubeVideo(selectedItem.videoUrl) ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedItem.videoUrl) || 'dQw4w9WgXcQ'}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    poster={selectedItem.src}
                  >
                    <source src={selectedItem.videoUrl} type="video/mp4" />
                    <source src={selectedItem.videoUrl} type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                )}
              </div>
            ) : (
              <img src={selectedItem.src} alt={selectedItem.alt} className="max-h-[80vh] w-auto rounded shadow-2xl" />
            )}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
              <p className="text-neutral-400 mt-2">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;