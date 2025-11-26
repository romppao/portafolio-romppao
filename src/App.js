import React, { useState } from 'react';
import { Camera, Clapperboard, Mail, Instagram, X as CloseIcon, ChevronRight, Play, Film, Tv, Video, User, Moon, Mountain, Trophy, Phone } from 'lucide-react';

// =========================================================================
//  ZONA DE DATOS (Puedes editar las URLs de las imágenes aquí)
// =========================================================================

const portfolioItems = [
  {
    id: 1,
    type: 'photo',
    category: 'Retrato',
    src: 'https://unsplash.com/es/fotos/a1hBFKBzqWk',
    title: 'Mirada Urbana',
    description: 'Sesión de moda en Madrid centro.'
  },
  {
    id: 2,
    type: 'video',
    category: 'Comercial',
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    title: 'Campaña Nike',
    description: 'Dirección de fotografía para spot publicitario.'
  },
  {
    id: 3,
    type: 'photo',
    category: 'Paisaje',
    src: 'https://unsplash.com/es/fotos/4FEgXdHQswA',
    title: 'Amanecer en la pedriza',
    description: 'Fotografía de paisaje.'
  },
  {
    id: 5,
    type: 'video',
    category: 'Videoclip',
    src: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://youtu.be/lEz1hHGvNMc?si=2xUl1TSNYtzkTvJp',
    title: 'KANEIS - LAKYLA',
    description: 'Video musical oficial para el artista KANEIS.'
  },
  {
    id: 4,
    type: 'photo',
    category: 'Blanco y Negro',
    src: 'https://unsplash.com/es/fotos/7y_LsKNWAuA',
    title: 'Sombras',
    description: 'La elegancia no tiene color.'
  },
  {
    id: 7,
    type: 'video',
    category: 'Vlogging',
    src: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=1000',
    videoUrl: '#',
    title: 'Diario de Rodaje: Marruecos',
    description: 'Behind the scenes del viaje y proceso creativo.'
  },
  {
    id: 8,
    type: 'photo',
    category: 'Boxeo',
    src: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1000',
    title: 'El Último Round',
    description: 'Documentando el entrenamiento previo al campeonato.'
  },
  {
    id: 6,
    type: 'photo',
    category: 'Paisaje',
    src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1000',
    title: 'Luces de Noche',
    description: 'Fotografía nocturna urbana.'
  }
];

// =========================================================================
//  COMPONENTE PRINCIPAL
// =========================================================================

const App = () => {
  const [filter, setFilter] = useState('all');
  const [videoSubFilter, setVideoSubFilter] = useState('all');
  const [photoSubFilter, setPhotoSubFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = portfolioItems.filter(item => {
    if (filter !== 'all' && item.type !== filter) return false;
    if (filter === 'video' && videoSubFilter !== 'all') {
      return item.category === videoSubFilter;
    }
    if (filter === 'photo' && photoSubFilter !== 'all') {
      return item.category === photoSubFilter;
    }
    return true;
  });

  const handleMainFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (newFilter !== 'video') setVideoSubFilter('all');
    if (newFilter !== 'photo') setPhotoSubFilter('all');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-500 selection:text-white">
      
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
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
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-10 rounded-full bg-neutral-900 border-[3px] border-dashed border-neutral-500 ring-4 ring-neutral-900 shadow-2xl p-1.5 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-neutral-800">
              <img 
                src="https://unsplash.com/es/fotos/wkIf1LRAye4" 
                alt="ROMPPAO Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Capturando la esencia <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              en cada frame.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformando lo cotidiano en momentos inolvidables. Fotografía y Filmmaking desde Madrid.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth'})}
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
              onClick={() => handleMainFilterChange('all')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${filter === 'all' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white'}`}
            >
              Todo
            </button>
            <button 
              onClick={() => handleMainFilterChange('photo')}
              className={`px-6 py-2 rounded-full text-sm flex items-center transition-all ${filter === 'photo' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white'}`}
            >
              <Camera className="w-4 h-4 mr-2" /> Fotografía
            </button>
            <button 
              onClick={() => handleMainFilterChange('video')}
              className={`px-6 py-2 rounded-full text-sm flex items-center transition-all ${filter === 'video' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white'}`}
            >
              <Clapperboard className="w-4 h-4 mr-2" /> Filmmaking
            </button>
          </div>

          {filter === 'video' && (
            <div className="flex justify-center flex-wrap gap-2 animate-[fadeIn_0.5s_ease-out]">
              <button onClick={() => setVideoSubFilter('all')} className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${videoSubFilter === 'all' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                Todos los videos
              </button>
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
              <button onClick={() => setPhotoSubFilter('all')} className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${photoSubFilter === 'all' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                Todas las fotos
              </button>
              <button onClick={() => setPhotoSubFilter('Retrato')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Retrato' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <User className="w-3 h-3 mr-1.5" /> Retrato
              </button>
              <button onClick={() => setPhotoSubFilter('Blanco y Negro')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Blanco y Negro' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Moon className="w-3 h-3 mr-1.5" /> B&N
              </button>
              <button onClick={() => setPhotoSubFilter('Boxeo')} className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all ${photoSubFilter === 'Boxeo' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}>
                <Trophy className="w-3 h-3 mr-1.5" /> Boxeo
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
              <div key={item.id} className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg bg-neutral-900" onClick={() => setSelectedItem(item)}>
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
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
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Soy un creador visual, fotógrafo, filmmaker independiente con base en Madrid. Mi trabajo es más que sujetar una cámara y darle a un botón, intento transformar lo más cotidiano en momentos inolvidables.
          </p>
        </div>
      </section>

      <footer id="contact" className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="text-neutral-400 mb-8">Actualmente aceptando proyectos para finales de 2025.</p>
          
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
          <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors" onClick={() => setSelectedItem(null)}>
            <CloseIcon className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src={`https://www.youtube.com/embed/${selectedItem.videoUrl.split('v=')[1] || 'dQw4w9WgXcQ'}`} 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                 ></iframe>
              </div>
            ) : (
              <img src={selectedItem.src} alt={selectedItem.title} className="max-h-[80vh] w-auto rounded shadow-2xl" />
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