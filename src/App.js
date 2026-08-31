import React, { useState } from 'react';
import { Camera, Clapperboard, Mail, Instagram, X as CloseIcon, ChevronRight, Play, Film, Tv, Video, User, Trophy, Phone } from 'lucide-react';
// Cache buster: 2024-12-02-21:28 - Removed 'Todo' filters

// =========================================================================
//  ZONA DE DATOS (Puedes editar las URLs de las imágenes aquí)
// =========================================================================

const portfolioItems = [
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

  {
    id: 102,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/saZd4C_OqUw/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/saZd4C_OqUw',
    alt: 'Videoclip BLACKTAWSA, DRACO LA B - ATRACTIVA - Filmado por ROMPPAO',
    title: 'BLACKTAWSA, DRACO LA B - ATRACTIVA',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
  },
  {
    id: 95,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/kaXzWy2TaIo/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/kaXzWy2TaIo',
    alt: 'Videoclip Villaverde - MÁLAGA - Filmado por ROMPPAO',
    title: 'VILLAVERDE - MÁLAGA',
    description: 'Video Oficial. Filmado por ROMPPAO.'
  },
  {
    id: 96,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/d1wOBbh17JY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/d1wOBbh17JY',
    alt: 'Videoclip Escalabusy (ft. Jmzz) - Filmado por ROMPPAO',
    title: 'ESCALABUSY (FT. JMZZ)',
    description: 'Videoclip Oficial. Filmado por ROMPPAO.'
  },
  {
    id: 97,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/NuN29sHp0cw/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/NuN29sHp0cw',
    alt: 'Videoclip Richi Bling - ME PROBÉ - Filmado por ROMPPAO',
    title: 'RICHI BLING - ME PROBÉ',
    description: 'Official Video. Filmado por ROMPPAO.'
  },
  {
    id: 82,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/r0aQy-6RpxE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/r0aQy-6RpxE?si=eFkyzFpzM-bteCXK',
    alt: 'Videoclip UNI4 - BABY MOTION - Filmado por ROMPPAO',
    title: 'UNI4 - BABY MOTION',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
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
    id: 55,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/z__HOyy9EDk/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/z__HOyy9EDk?si=CFfTgJ_PVpAjMJOy',
    alt: 'Videoclip NOS VEMOS EN BLAI - GCD ft. Candy Live - Video musical filmado por ROMPPAO',
    title: 'GCD ft. CANDY LIVE - NOS VEMOS EN BLAI',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
  },
  {
    id: 56,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/oszaHeElRqI/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/oszaHeElRqI?si=GoPa3MeVd5HwJmHj',
    alt: 'Videoclip BENZEMA - Flame yrn - Video musical filmado por ROMPPAO',
    title: 'FLAME YRN - BENZEMA',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
  },
  {
    id: 57,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/Kqal00ww6vw/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Kqal00ww6vw?si=5zhWHZ4M-VhbEHna',
    alt: 'Videoclip JOHN CENA - Abacrime, B.O. - Video musical filmado por ROMPPAO',
    title: 'ABACRIME, B.O. - JOHN CENA',
    description: 'Video musical oficial. Filmado por ROMPPAO.'
  },
  {
    id: 59,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/GvHB-xgc-SE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/GvHB-xgc-SE?si=i-NiI5A8mTD6jRVa',
    alt: 'Videoclip QUIEN ES MÓNICA ? - B.O BEE ft. abacrime - Video musical filmado por ROMPPAO',
    title: 'B.O BEE ft. ABACRIME - QUIEN ES MÓNICA ?',
    description: 'Videoclip oficial. Filmado por ROMPPAO.'
  },
  {
    id: 60,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/TmBApAvamjI/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/TmBApAvamjI?si=x1268T-Qv4OndIUr',
    alt: 'Videoclip MI BIG BEN - Villaverde - Video musical filmado por ROMPPAO',
    title: 'VILLAVERDE - MI BIG BEN',
    description: 'Video oficial. Filmado por ROMPPAO.'
  },
  {
    id: 81,
    type: 'video',
    category: 'Videoclip',
    src: 'https://img.youtube.com/vi/FJ9u5-RiRes/hqdefault.jpg',
    videoUrl: 'https://youtu.be/FJ9u5-RiRes?si=FJeE9E-Qeinc6Ra8',
    alt: 'Videoclip BLACKTAWSA Ft. GOLDI935- PH - Filmado por ROMPPAO',
    title: 'BLACKTAWSA FT. GOLDI935 - PH',
    description: 'Official Video. Filmado por ROMPPAO.'
  },
  {
    id: 98,
    type: 'video',
    category: 'Vlogging',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bigsteppers-cup-1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bigsteppers-cup-1.mp4`,
    alt: 'Vlog BIGSTEPPERS CUP ED1 - HAKEMM - Filmado por ROMPPAO',
    title: 'BIGSTEPPERS CUP ED1 - HAKEMM',
    description: 'Vlog Oficial. Filmado por ROMPPAO.'
  },
  {
    id: 99,
    type: 'video',
    category: 'Vlogging',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bigsteppers-cup-2-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bigsteppers-cup-2.mp4`,
    alt: 'Vlog BIGSTEPPERS CUP ED2 - HAKEMM - Filmado por ROMPPAO',
    title: 'BIGSTEPPERS CUP ED2 - HAKEMM',
    description: 'Vlog Oficial. Filmado por ROMPPAO.'
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
  {
    id: 58,
    type: 'video',
    category: 'Vlogging',
    src: 'https://img.youtube.com/vi/d_8lvXGRqhM/hqdefault.jpg',
    videoUrl: 'https://youtu.be/d_8lvXGRqhM?si=igEEYfh1YmzQFjaW',
    alt: 'Vlog Relapse 01-X - Momentos previos a pelea de boxeo amateur - Filmado por ROMPPAO',
    title: 'Relapse 01-X',
    description: 'Momentos previos a mi última pelea en boxeo amateur'
  },
  {
    id: 100,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bigsteppers-cup-1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bigsteppers-cup-1.mp4`,
    alt: 'BTS BIGSTEPPERS CUP ED1 - HAKEMM - Filmado por ROMPPAO',
    title: 'BTS BIGSTEPPERS CUP ED1 - HAKEMM',
    description: 'Behind The Scenes Oficial.'
  },
  {
    id: 101,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bigsteppers-cup-2-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bigsteppers-cup-2.mp4`,
    alt: 'BTS BIGSTEPPERS CUP ED2 - HAKEMM - Filmado por ROMPPAO',
    title: 'BTS BIGSTEPPERS CUP ED2 - HAKEMM',
    description: 'Behind The Scenes Oficial.'
  },
  {
    id: 88,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bts-sativa-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bts-sativa.mp4`,
    alt: 'BTS SATIVA - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 89,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bts-villaverde-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bts-villaverde.mp4`,
    alt: 'BTS VILLAVERDE - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 90,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bts-richi-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bts-richi.mp4`,
    alt: 'BTS RICHI - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 91,
    type: 'video',
    category: 'BTS',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/bts-mmtlk-bobee-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/bts-mmtlk-bobee.mp4`,
    alt: 'BTS MMTLK B.O BEE - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 83,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-bombofire-vitoria-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-bombofire-vitoria.mp4`,
    alt: 'Contenido Artistas BOMBOFIRE Vitoria - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 84,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-mk-p1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-mk-p1.mp4`,
    alt: 'Contenido Artistas MK - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 85,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-mk-p2-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-mk-p2.mp4`,
    alt: 'Contenido Artistas MK - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 86,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-mk-p4-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-mk-p4.mp4`,
    alt: 'Contenido Artistas MK - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 61,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-vertical-ig-wg-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-vertical-ig-wg.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 62,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-tr-1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-tr-1.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 63,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-tr-10-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-tr-10.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 64,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-mk-120-1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-mk-120-1.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 65,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-kaneis-1k-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-kaneis-1k.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 66,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-kaneis-kyla-ig-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-kaneis-kyla-ig.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 67,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-kkk-y1-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-kkk-y1.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 68,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-kkk-y3-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-kkk-y3.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 69,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-mk-4-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-mk-4.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 70,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-kai-cenat-mkbloond-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-kai-cenat-mkbloond.mp4`,
    alt: 'Contenido Artistas - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 78,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-boxeo-romppao-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-boxeo-romppao.mp4`,
    alt: 'Contenido Artistas Boxeo - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
  },
  {
    id: 79,
    type: 'video',
    category: 'Contenido Artistas',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-boxeo-king-thumb.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/artistas-boxeo-king.mp4`,
    alt: 'Contenido Artistas Boxeo KING - ROMPPAO filmmaker Madrid',
    title: '',
    description: ''
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
  // =========================================================================
  // ALPHA CPO SERVICES - Videos Comerciales
  // =========================================================================
  {
    id: 71,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-1.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 77,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-7.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 72,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-2.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 73,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-3.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 74,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-4.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 75,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-5.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
  {
    id: 76,
    type: 'video',
    category: 'Comercial',
    src: `${process.env.PUBLIC_URL}/videos/thumbnails/alpha-cpo-cover.jpg`,
    videoUrl: `${process.env.PUBLIC_URL}/videos/alpha-cpo-6.mp4`,
    alt: 'Video comercial ALPHA CPO SERVICES - Producción Audiovisual - ROMPPAO filmmaker Madrid',
    title: 'ALPHA CPO SERVICES',
    description: 'Producción Audiovisual'
  },
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
  ];

// =========================================================================
//  COMPONENTE PRINCIPAL
// =========================================================================

const App = () => {
  const [view, setView] = useState('home');
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState('video');
  const [cat, setCat] = useState('Videoclip');
  const [sel, setSel] = useState(null);
  const [openService, setOpenService] = useState('01');
  const [clock, setClock] = useState('');
  
  const [heroIndex, setHeroIndex] = useState(0);
  const videoRef = React.useRef(null);

  // Reloj
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = n => String(n).padStart(2, '0');
      setClock(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  // Efecto Grano (Noise)
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = 180; c.height = 180;
    let raf;
    let last = 0;
    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 120) return;
      last = t;
      const img = ctx.createImageData(180, 180);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = d[i+1] = d[i+2] = v; d[i+3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [view]);

  // Items para el hero animado
  const heroItems = React.useMemo(() => {
    return [
      { type: 'photo', src: `${process.env.PUBLIC_URL}/images/boxeo-1.jpg`, title: 'FRAME 001' },
      { type: 'photo', src: `${process.env.PUBLIC_URL}/images/boxeo-2.jpg`, title: 'FRAME 002' },
      { type: 'video', src: `${process.env.PUBLIC_URL}/videos/artistas-boxeo-romppao.mp4`, poster: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-boxeo-romppao-thumb.jpg`, title: 'BOXEO' },
      { type: 'photo', src: `${process.env.PUBLIC_URL}/images/boxeo-3.jpg`, title: 'FRAME 003' },
      { type: 'video', src: `${process.env.PUBLIC_URL}/videos/artistas-boxeo-king.mp4`, poster: `${process.env.PUBLIC_URL}/videos/thumbnails/artistas-boxeo-king-thumb.jpg`, title: 'KING' },
    ];
  }, []);

  // Slideshow logic
  React.useEffect(() => {
    if (view !== 'home' || menu || sel) return;
    let timer;
    const current = heroItems[heroIndex];
    if (current.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        timer = setTimeout(() => setHeroIndex(i => (i + 1) % heroItems.length), 4000);
      });
      videoRef.current.onended = () => {
        setHeroIndex(i => (i + 1) % heroItems.length);
      };
      const checkTime = () => {
        if (videoRef.current && videoRef.current.currentTime >= 12) {
           videoRef.current.pause();
           setHeroIndex(i => (i + 1) % heroItems.length);
        }
      };
      videoRef.current.ontimeupdate = checkTime;
    } else {
      timer = setTimeout(() => {
        setHeroIndex(i => (i + 1) % heroItems.length);
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.onended = null;
        videoRef.current.ontimeupdate = null;
      }
    };
  }, [heroIndex, heroItems, view, menu, sel]);

  const isFoto = (category) => category === 'Boxeo';
  
  const MODES = [
    { key: 'foto', label: 'Fotografía' },
    { key: 'video', label: 'Vídeo' }
  ];

  const getSubcats = (m) => {
    if (m === 'foto') return ['Boxeo'];
    return ['Videoclip', 'Contenido Artistas', 'BTS', 'Comercial', 'Vlogging'];
  };

  const handleMode = (m) => {
    setMode(m);
    setCat(getSubcats(m)[0]);
  };

  const filteredItems = portfolioItems.filter(item => item.category === cat);
  const totalItems = portfolioItems.length;
  const currentHero = heroItems[heroIndex];

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0] || null;
    if (url.includes('watch?v=')) return url.split('v=')[1]?.split('&')[0] || null;
    if (url.includes('embed/')) return url.split('embed/')[1]?.split('?')[0] || null;
    return null;
  };

  const isYouTubeVideo = (url) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  return (
    <div className="bg-[#0B0B0C] text-[#F4F3F1] min-h-screen font-['Archivo'] selection:bg-[#FF4A1C] selection:text-[#0B0B0C]">
      
      {/* Grano / Ruido Visual */}
      <canvas ref={canvasRef} className="fixed inset-0 z-40 pointer-events-none opacity-[0.026] mix-blend-screen w-full h-full"></canvas>

      {/* Navegación superior */}
      <div className="sticky top-0 z-50">
        <div className="bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#F4F3F1]/10">
          <div className="max-w-[1440px] mx-auto px-5 md:px-14 h-[74px] flex items-center justify-between">
            <div className="font-bold text-[17px] tracking-[0.06em] font-['Archivo'] cursor-pointer" onClick={() => setView('home')}>
              ROMPPAO
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="font-['Space_Mono'] text-[11px] tracking-[0.14em] text-[#F4F3F1]/40 hidden md:block">
                MADRID {clock}
              </div>
              <div 
                onClick={() => setMenu(!menu)} 
                className="font-['Space_Mono'] font-medium text-[11px] tracking-[0.18em] px-4 py-3 border border-[#F4F3F1]/20 cursor-pointer hover:bg-[#F4F3F1] hover:text-[#0B0B0C] hover:border-[#F4F3F1] transition-all"
              >
                {menu ? 'CERRAR' : 'MENÚ'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú Fullscreen */}
      {menu && (
        <div className="fixed inset-0 z-[60] bg-[#0B0B0C] flex flex-col p-6 md:p-16 overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="font-bold text-[17px] tracking-[0.06em]">ROMPPAO</div>
            <div onClick={() => setMenu(false)} className="font-['Space_Mono'] font-medium text-[11px] tracking-[0.18em] px-4 py-3 border border-[#F4F3F1]/20 cursor-pointer hover:bg-[#F4F3F1] hover:text-[#0B0B0C]">
              CERRAR
            </div>
          </div>
          <div className="flex flex-col gap-1 my-8 md:my-12">
            {[
              { num: '01', name: 'Portada', link: '#portada' },
              { num: '02', name: 'Trabajo', link: '#trabajo' },
              { num: '03', name: 'Sobre mí', link: '#sobre' },
              { num: '04', name: 'Servicios', link: '#servicios' },
              { num: '05', name: 'Contacto', link: '#contacto' }
            ].map(item => (
              <a key={item.num} href={item.link} onClick={() => { setView('home'); setMenu(false); }} className="flex gap-6 items-baseline py-3 border-t border-[#F4F3F1]/10 text-[#F4F3F1] hover:text-[#FF4A1C] transition-colors group">
                <span className="font-['Space_Mono'] text-[12px] text-[#FF4A1C] min-w-[34px]">[{item.num}]</span>
                <span className="font-['Anton'] text-4xl md:text-6xl tracking-tight">{item.name}</span>
              </a>
            ))}
            <div onClick={() => { setView('archivo'); setMenu(false); window.scrollTo(0,0); }} className="flex gap-6 items-baseline py-3 border-y border-[#F4F3F1]/10 text-[#F4F3F1] hover:text-[#FF4A1C] transition-colors cursor-pointer">
              <span className="font-['Space_Mono'] text-[12px] text-[#FF4A1C] min-w-[34px]">[06]</span>
              <span className="font-['Anton'] text-4xl md:text-6xl tracking-tight">Archivo completo</span>
            </div>
          </div>
          <div className="mt-auto flex gap-10 flex-wrap font-['Archivo'] text-[13px] text-[#F4F3F1]/50">
            <a href="mailto:rompaoondo@gmail.com" className="hover:text-[#F4F3F1]">rompaoondo@gmail.com</a>
            <a href="https://wa.me/34602360254" className="hover:text-[#F4F3F1]">+34 602 360 254</a>
            <a href="https://www.instagram.com/romppao" className="hover:text-[#F4F3F1]">@romppao</a>
            <span>Madrid, España</span>
          </div>
        </div>
      )}

      {view === 'home' && (
        <>
          {/* Sección Portada: Hero C - Líquido */}
          <section id="portada" className="relative h-[min(88vh,860px)] min-h-[600px] overflow-hidden bg-[#141416]">
            {heroItems.map((item, idx) => (
              item.type === 'photo' ? (
                <img 
                  key={idx}
                  src={item.src} 
                  alt="ROMPPAO" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ) : null
            ))}
            <video 
              ref={videoRef}
              muted playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${currentHero.type === 'video' ? 'opacity-100' : 'opacity-0'}`}
              src={currentHero.type === 'video' ? currentHero.src : ''}
              poster={currentHero.type === 'video' ? currentHero.poster : ''}
            ></video>
            
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.22)_0_1px,transparent_1px_3px)] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_45%,transparent_40%,rgba(11,11,12,0.86)_100%)]"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-[1440px] mx-auto px-6 py-12 overflow-hidden">
              <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.28em] text-[#FF4A1C] mb-4">REEL EN REPRODUCCIÓN</div>
              <h1 className="font-['Anton'] text-5xl md:text-[130px] leading-[0.92] tracking-tight mb-6 max-w-[14ch]">
                Capturando la esencia en cada frame.
              </h1>
              <p className="font-['Archivo'] text-[15px] md:text-[18px] text-[#F4F3F1]/70 mb-8 max-w-[40ch]">
                Transformando lo cotidiano en momentos inolvidables. Fotografía y Filmmaking desde Madrid.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="#trabajo" className="bg-[#F4F3F1] text-[#0B0B0C] font-semibold text-[14px] px-8 py-5 hover:bg-[#FF4A1C] hover:text-[#F4F3F1] transition-colors">
                  Ver portfolio
                </a>
                <a href="#contacto" className="border border-[#F4F3F1]/30 text-[#F4F3F1] font-semibold text-[14px] px-8 py-5 backdrop-blur-md hover:border-[#F4F3F1] transition-colors">
                  Contactar
                </a>
              </div>
            </div>
            
            <div className="absolute left-0 right-0 bottom-0 p-4 md:p-6 flex justify-between items-center gap-4 font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.16em] text-[#F4F3F1]/60 pointer-events-none">
              <span>{currentHero.title} {currentHero.type === 'video' ? '— CLIP' : `/ ${heroItems.length}`}</span>
              <span>{clock}</span>
            </div>
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#F4F3F1]/10 pointer-events-none">
              <div className="h-full bg-[#FF4A1C] transition-all duration-500 ease-linear" style={{ width: `${((heroIndex + 1) / heroItems.length) * 100}%` }}></div>
            </div>
          </section>

          {/* Marquee (Cinta de texto) */}
          <div className="overflow-hidden border-y border-[#F4F3F1]/10 py-4 md:py-6 bg-[#0B0B0C]">
            <div className="flex gap-6 md:gap-12 whitespace-nowrap font-semibold text-[14px] md:text-[21px] tracking-tight text-[#F4F3F1]/40" style={{ animation: 'mq 34s linear infinite' }}>
              <span>CREADOR VISUAL · FOTÓGRAFO · FILMMAKER INDEPENDIENTE CON BASE EN MADRID</span><span className="text-[#FF4A1C]">◆</span>
              <span>CREADOR VISUAL · FOTÓGRAFO · FILMMAKER INDEPENDIENTE CON BASE EN MADRID</span><span className="text-[#FF4A1C]">◆</span>
              <span>CREADOR VISUAL · FOTÓGRAFO · FILMMAKER INDEPENDIENTE CON BASE EN MADRID</span><span className="text-[#FF4A1C]">◆</span>
              <span>CREADOR VISUAL · FOTÓGRAFO · FILMMAKER INDEPENDIENTE CON BASE EN MADRID</span><span className="text-[#FF4A1C]">◆</span>
            </div>
          </div>

          {/* Sección Trabajo */}
          <section id="trabajo" className="max-w-[1440px] mx-auto px-5 md:px-14 py-16 md:py-24">
            <div className="flex justify-between items-baseline gap-5 flex-wrap mb-10">
              <div>
                <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-4">[02] TRABAJO</div>
                <h2 className="font-['Anton'] text-4xl md:text-[80px] tracking-tight m-0">Lo que he rodado</h2>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="font-['Space_Mono'] text-[10.5px] leading-[1.7] tracking-[0.14em] text-[#F4F3F1]/40 text-right hidden sm:block">
                  ALPHA-CPO-1.MP4<br/>BTS-SATIVA.MP4
                </div>
                <div onClick={() => { setView('archivo'); window.scrollTo(0,0); }} className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.16em] px-4 py-3 border border-[#F4F3F1]/20 cursor-pointer hover:bg-[#F4F3F1] hover:text-[#0B0B0C] transition-all whitespace-nowrap">
                  VER ARCHIVO COMPLETO →
                </div>
              </div>
            </div>

            <div className="border-y border-[#F4F3F1]/10 mb-8 md:mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#F4F3F1]/10">
                {MODES.map((m, k) => {
                  const on = m.key === mode;
                  const modeItemsCount = portfolioItems.filter(i => (m.key === 'foto' ? isFoto(i.category) : !isFoto(i.category))).length;
                  return (
                    <div key={m.key} onClick={() => handleMode(m.key)} className={`cursor-pointer p-6 transition-colors ${on ? 'bg-[#FF4A1C]' : 'bg-[#0B0B0C]'}`}>
                      <div className={`font-['Space_Mono'] font-medium text-[9.5px] tracking-[0.2em] mb-3 ${on ? 'text-[#0B0B0C]/50' : 'text-[#FF4A1C]'}`}>[ 0{k + 1} ]</div>
                      <div className={`font-['Anton'] text-3xl md:text-[39px] tracking-tight ${on ? 'text-[#0B0B0C]' : 'text-[#F4F3F1]'}`}>{m.label}</div>
                      <div className={`font-['Space_Mono'] text-[10.5px] tracking-[0.14em] mt-3 ${on ? 'text-[#0B0B0C]/60' : 'text-[#F4F3F1]/40'}`}>{modeItemsCount} PIEZAS</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 flex-wrap py-4">
                {getSubcats(mode).map(c => {
                  const on = c === cat;
                  return (
                    <div key={c} onClick={() => setCat(c)} className={`font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.14em] px-4 py-3 cursor-pointer transition-all border ${on ? 'bg-[#FF4A1C] text-[#0B0B0C] border-[#FF4A1C]' : 'bg-transparent text-[#F4F3F1]/50 border-[#F4F3F1]/10 hover:border-[#F4F3F1]/30'}`}>
                      {c.toUpperCase()}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`grid gap-4 md:gap-5 ${cat === 'Videoclip' || cat === 'Comercial' || cat === 'Vlogging' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
              {filteredItems.map(it => {
                const isWide = cat === 'Videoclip' || cat === 'Comercial' || cat === 'Vlogging';
                return (
                  <div key={it.id} onClick={() => setSel(it)} className={`relative overflow-hidden bg-[#141416] cursor-pointer group ${isWide ? 'aspect-video' : 'aspect-[4/5] sm:aspect-[9/16]'}`}>
                    <img src={it.src} alt={it.title} loading="lazy" className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${!isWide ? 'grayscale-[0.35] contrast-105 group-hover:grayscale-0' : ''}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 to-[#0B0B0C]/0 pointer-events-none"></div>
                    <div className={`absolute left-0 right-0 bottom-0 pointer-events-none flex justify-between items-end gap-3 ${isWide ? 'p-4 md:p-5' : 'p-3 md:p-4'}`}>
                      <div>
                        <div className="font-['Space_Mono'] font-medium text-[9.5px] tracking-[0.18em] text-[#FF4A1C] mb-2 uppercase">{it.category}</div>
                        <div className="font-semibold text-[14px] md:text-[16px] leading-[1.15] tracking-tight">{it.title || 'Sin Título'}</div>
                      </div>
                      {isWide && (
                        <div className="font-['Space_Mono'] font-medium text-[10px] border border-[#F4F3F1]/30 px-3 py-2 whitespace-nowrap text-[#F4F3F1]/70 group-hover:text-[#F4F3F1] transition-colors">▶</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sección Sobre Mí */}
          <section id="sobre" className="max-w-[1440px] mx-auto px-5 md:px-14 py-16 md:py-24 border-t border-[#F4F3F1]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="relative overflow-hidden aspect-square rounded-full bg-[#141416] w-[80%] max-w-[400px] mx-auto md:ml-0 md:mr-auto">
                <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="ROMPPAO" className="w-full h-full object-cover grayscale-[0.3] contrast-105" />
              </div>
              <div>
                <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-4">[03] SOBRE MÍ</div>
                <h2 className="font-['Anton'] text-4xl md:text-[66px] tracking-tight mb-8">Sobre mi</h2>
                <p className="font-['Archivo'] text-[16px] md:text-[20px] leading-[1.6] text-[#F4F3F1]/70 mb-10 max-w-[46ch]">
                  Soy un creador visual, fotógrafo, filmmaker independiente con base en Madrid. Mi trabajo es más que sujetar una cámara y darle a un botón, intento transformar lo más cotidiano en momentos inolvidables.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-[#F4F3F1]/10">
                  <div className="bg-[#0B0B0C] py-5 pr-4">
                    <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">ZONA</div>
                    <div className="font-semibold text-[15px] leading-[1.3]">Madrid y alrededores</div>
                  </div>
                  <div className="bg-[#0B0B0C] p-5">
                    <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">ENTREGA</div>
                    <div className="font-semibold text-[15px] leading-[1.3]">1–2 semanas foto<br/>2 semanas vídeo</div>
                  </div>
                  <div className="bg-[#0B0B0C] p-5 col-span-2 sm:col-span-1">
                    <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">EXPRESS</div>
                    <div className="font-semibold text-[15px] leading-[1.3]">Con coste adicional</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección Servicios */}
          <section id="servicios" className="max-w-[1440px] mx-auto px-5 md:px-14 py-16 md:py-24 border-t border-[#F4F3F1]/10">
            <div className="flex justify-between items-baseline gap-5 flex-wrap mb-10 md:mb-12">
              <div>
                <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-4">[04] SERVICIOS</div>
                <h2 className="font-['Anton'] text-4xl md:text-[80px] tracking-tight m-0">Servicios</h2>
              </div>
            </div>
            
            <div className="border-t border-[#F4F3F1]/10">
              {[
                { num: '01', name: 'Fotografía', body: 'Retratos\nFotografía deportiva (boxeo, eventos deportivos)\nCobertura de eventos y celebraciones\nFotografía de paisajes', vidSrc: `${process.env.PUBLIC_URL}/videos/el-bus.mov` },
                { num: '02', name: 'Videografía', body: 'Vlogs y contenido deportivo\nAftermovies de eventos\nVídeos promocionales y redes sociales\nProyectos creativos personalizados', vidSrc: `${process.env.PUBLIC_URL}/videos/cap1-esto-es-boxeo.mp4` },
                { num: '03', name: 'Edición y postproducción', body: 'Color grading\nEdición de vídeo\nRetoque fotográfico\nEdición y diseño de sonido', vidSrc: `${process.env.PUBLIC_URL}/videos/buena-intro.mp4` },
                { num: '04', name: 'Disponibilidad', body: 'Zona: Madrid y alrededores\nHorarios: tardes/noches entre semana, fines de semana completos\nSesiones: hasta 3h entre semana / 6h fin de semana', vidSrc: `${process.env.PUBLIC_URL}/videos/romppao-x-urko.mov` }
              ].map(s => (
                <div key={s.num} className="border-b border-[#F4F3F1]/10">
                  <div onClick={() => setOpenService(openService === s.num ? null : s.num)} className="flex gap-4 md:gap-9 items-center py-6 md:py-8 cursor-pointer hover:bg-[#141416]/50 transition-colors">
                    <div className="font-['Space_Mono'] text-[12px] text-[#FF4A1C] min-w-[30px] md:min-w-[44px]">{s.num}</div>
                    <h3 className="font-['Anton'] text-2xl md:text-[44px] tracking-tight m-0 flex-1">{s.name}</h3>
                    <div className="font-['Space_Mono'] text-[22px] text-[#F4F3F1]/50">{openService === s.num ? '−' : '+'}</div>
                  </div>
                  {openService === s.num && (
                    <div className="pb-10 md:pb-16 pl-12 md:pl-20 flex flex-col md:flex-row gap-10 md:gap-16 items-center animate-fade-in">
                      <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8">
                        {s.body.split('\n').map((line, i) => (
                          <div key={i} className="flex items-start gap-4 group cursor-default">
                            <div className="font-['Space_Mono'] text-[#FF4A1C] text-[13px] md:text-[15px] pt-2 opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                            <div className="font-['Archivo'] font-medium text-[18px] md:text-[24px] lg:text-[26px] text-[#F4F3F1]/80 leading-snug group-hover:text-[#F4F3F1] group-hover:translate-x-1 transition-all">
                              {line}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-full md:w-2/3">
                        <div className="relative w-full bg-transparent overflow-hidden group">
                          {s.vidSrc ? (
                            <video src={s.vidSrc} autoPlay loop muted playsInline className="w-full h-auto block object-contain grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700" />
                          ) : (
                            <img src={s.img} alt={s.name} loading="lazy" className="w-full h-auto block object-contain grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="font-['Archivo'] text-[15px] leading-[1.7] text-[#F4F3F1]/50 mt-8 md:mt-11 max-w-[52ch]">
              Para información detallada sobre disponibilidad específica y presupuestos personalizados, contáctame por correo o WhatsApp.
            </p>
          </section>

          {/* Sección Reservas */}
          <section id="reservas" className="border-t border-[#F4F3F1]/10 bg-[#141416]">
            <div className="max-w-[1440px] mx-auto px-5 md:px-14 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-4">RESERVAS · WHATSAPP.LNK</div>
                <h2 className="font-['Anton'] text-4xl md:text-[68px] tracking-tight mb-6">Reserva tu sesión</h2>
                <p className="font-['Archivo'] text-[15px] md:text-[18px] leading-[1.65] text-[#F4F3F1]/60 mb-8 max-w-[42ch]">
                  Escríbeme por WhatsApp con la fecha, el tipo de sesión y la zona. Te confirmo disponibilidad y presupuesto en el mismo hilo.
                </p>
                <a href="https://wa.me/34602360254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#FF4A1C] text-[#0B0B0C] font-bold text-[15px] px-8 py-5 hover:bg-[#F4F3F1] transition-colors">
                  Solicitar presupuesto por WhatsApp <span className="font-['Space_Mono'] font-normal text-[16px]">→</span>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-[1px] bg-[#F4F3F1]/10">
                <div className="bg-[#141416] py-5">
                  <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">HORARIOS</div>
                  <div className="font-['Archivo'] text-[15.5px] leading-[1.5] text-[#F4F3F1]/80">Tardes/noches entre semana, fines de semana completos</div>
                </div>
                <div className="bg-[#141416] py-5">
                  <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">SESIONES</div>
                  <div className="font-['Archivo'] text-[15.5px] leading-[1.5] text-[#F4F3F1]/80">Hasta 3h entre semana / 6h fin de semana</div>
                </div>
                <div className="bg-[#141416] py-5">
                  <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-2.5">DISPONIBILIDAD</div>
                  <div className="font-['Archivo'] text-[15.5px] leading-[1.5] text-[#F4F3F1]/80">Aceptando proyectos para finales de 2025</div>
                </div>
              </div>
            </div>
          </section>

          {/* Banner Animado Inferior */}
          <a href="https://wa.me/34602360254" target="_blank" rel="noopener noreferrer" className="block overflow-hidden border-y border-[#F4F3F1]/10 py-6 md:py-8 text-[#F4F3F1] hover:text-[#F4F3F1]">
            <div className="flex gap-6 md:gap-10 whitespace-nowrap font-['Anton'] text-3xl md:text-[74px] tracking-tight" style={{ animation: 'mqs 26s linear infinite' }}>
              <span>RESERVAR SESIÓN</span><span className="text-[#FF4A1C]">—</span><span>VER PORTFOLIO</span><span className="text-[#FF4A1C]">—</span><span>ESCRÍBEME</span><span className="text-[#FF4A1C]">—</span>
              <span>RESERVAR SESIÓN</span><span className="text-[#FF4A1C]">—</span><span>VER PORTFOLIO</span><span className="text-[#FF4A1C]">—</span><span>ESCRÍBEME</span><span className="text-[#FF4A1C]">—</span>
              <span>RESERVAR SESIÓN</span><span className="text-[#FF4A1C]">—</span><span>VER PORTFOLIO</span><span className="text-[#FF4A1C]">—</span><span>ESCRÍBEME</span><span className="text-[#FF4A1C]">—</span>
            </div>
          </a>
        </>
      )}

      {view === 'archivo' && (
        <section id="trabajo" className="max-w-[1440px] mx-auto px-5 md:px-14 py-12 md:py-24">
          <div className="flex justify-between items-baseline gap-5 flex-wrap mb-8 md:mb-10">
            <div>
              <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-4">[06] ARCHIVO COMPLETO</div>
              <h2 className="font-['Anton'] text-4xl md:text-[80px] tracking-tight m-0">Archivo</h2>
            </div>
            <div onClick={() => { setView('home'); window.scrollTo(0,0); }} className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.16em] px-4 py-3 border border-[#F4F3F1]/20 cursor-pointer hover:bg-[#F4F3F1] hover:text-[#0B0B0C] transition-all">
              ← VOLVER A LA PORTADA
            </div>
          </div>
          <div className="font-['Space_Mono'] text-[11px] leading-[1.6] tracking-[0.12em] text-[#F4F3F1]/40 border-y border-[#F4F3F1]/10 py-4 mb-6 md:mb-7">
            {totalItems} PIEZAS · FOTOGRAFÍA, VIDEOCLIP, CONTENIDO ARTISTAS, BTS, COMERCIAL, VLOGGING
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {portfolioItems.map(it => {
              const isWide = !isFoto(it.category);
              return (
                <div key={it.id} onClick={() => setSel(it)} className={`relative overflow-hidden bg-[#141416] cursor-pointer group ${isWide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                  <img src={it.src} alt={it.title} loading="lazy" className="w-full h-full object-cover grayscale-[0.4] contrast-105 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 to-[#0B0B0C]/0 pointer-events-none"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-3 md:p-3.5 pointer-events-none">
                    <div className="font-['Space_Mono'] font-medium text-[9.5px] tracking-[0.18em] text-[#FF4A1C] mb-1.5 uppercase">{it.category}</div>
                    <div className="font-semibold text-[13px] md:text-[14px] leading-[1.2] tracking-tight truncate">{it.title || 'Sin Título'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="contacto" className="max-w-[1440px] mx-auto px-5 md:px-14 py-16 md:py-24">
        <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.2em] text-[#FF4A1C] mb-5">[05] CONTACTO</div>
        <h2 className="font-['Anton'] text-5xl md:text-[108px] leading-[0.98] tracking-tight mb-6">¿Trabajamos juntos?</h2>
        <p className="font-['Archivo'] text-[16px] md:text-[20px] leading-[1.6] text-[#F4F3F1]/60 mb-10 md:mb-14 max-w-[40ch]">
          Actualmente aceptando proyectos para finales de 2025.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#F4F3F1]/10 mb-10 md:mb-14">
          <a href="mailto:rompaoondo@gmail.com" className="bg-[#0B0B0C] p-6 hover:bg-[#141416] transition-colors">
            <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-3">CORREO</div>
            <div className="font-semibold text-[15px] md:text-[19px] leading-[1.3] break-all">rompaoondo@gmail.com</div>
          </a>
          <a href="https://wa.me/34602360254" className="bg-[#0B0B0C] p-6 hover:bg-[#141416] transition-colors">
            <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-3">WHATSAPP</div>
            <div className="font-semibold text-[15px] md:text-[19px] leading-[1.3]">+34 602 360 254</div>
          </a>
          <a href="https://www.instagram.com/romppao" className="bg-[#0B0B0C] p-6 hover:bg-[#141416] transition-colors">
            <div className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-[#F4F3F1]/40 mb-3">INSTAGRAM</div>
            <div className="font-semibold text-[15px] md:text-[19px] leading-[1.3]">@romppao</div>
          </a>
        </div>
        <div className="flex justify-between gap-5 flex-wrap pt-6 border-t border-[#F4F3F1]/10 font-['Space_Mono'] text-[11px] leading-[1.6] tracking-[0.1em] text-[#F4F3F1]/40">
          <span>© 2025 ROMPPAO. Todos los derechos reservados.</span>
          <span>MADRID · {clock}</span>
        </div>
      </footer>

      {/* Lightbox / Modal */}
      {sel && (
        <div onClick={() => setSel(null)} className="fixed inset-0 z-[125] bg-[#0B0B0C]/95 backdrop-blur-lg flex flex-col p-4 md:p-10">
          <div className="flex justify-between items-center gap-4 mb-5">
            <div className="font-['Space_Mono'] font-medium text-[10.5px] tracking-[0.18em] text-[#FF4A1C] uppercase">{sel.category}</div>
            <div onClick={() => setSel(null)} className="font-['Space_Mono'] font-medium text-[11px] tracking-[0.18em] px-4 py-3 border border-[#F4F3F1]/20 cursor-pointer hover:bg-[#F4F3F1] hover:text-[#0B0B0C]">
              CERRAR ✕
            </div>
          </div>
          <div className="flex-1 min-h-0 flex items-center justify-center">
            {sel.type === 'video' ? (
              <div className="w-full max-w-[1180px] aspect-video bg-black rounded-sm overflow-hidden shadow-2xl">
                {isYouTubeVideo(sel.videoUrl) ? (
                  <iframe
                    width="100%" height="100%" frameBorder="0" allowFullScreen
                    title={sel.title || 'Video'} src={`https://www.youtube.com/embed/${getYouTubeVideoId(sel.videoUrl)}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : (
                  <video controls autoPlay className="w-full h-full object-contain" poster={sel.src}>
                    <source src={sel.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
            ) : (
              <img src={sel.src} alt={sel.alt} className="max-w-full max-h-full object-contain rounded-sm shadow-2xl" />
            )}
          </div>
          <div className="mt-6 text-center">
            <div className="font-semibold text-xl md:text-3xl tracking-tight">{sel.title}</div>
            <div className="font-['Archivo'] text-[14.5px] text-[#F4F3F1]/55 mt-2">{sel.description}</div>
          </div>
        </div>
      )}

      {/* Botón Flotante de WhatsApp */}
      <a 
        href={`https://wa.me/34602360254?text=${encodeURIComponent('Hola ROMPPAO! 👋 Mi nombre es [Escribe aquí tu nombre]. He visto tu portafolio y me gustaría pedirte información/presupuesto.\n\n*El proyecto sería para:* [EJ. Videoclip, Evento, Sesión de fotos...]\n*Fecha aproximada:* [Indicar fecha o mes]\n*Más detalles:* [Escribe aquí lo que necesites...]\n\nQuedo a la espera de tu respuesta. ¡Gracias!')}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;