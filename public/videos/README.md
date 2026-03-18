# Carpeta de Videos

Esta carpeta almacena los videos locales que se mostrarán en la sección **Comercial** del portafolio.

## Estructura

```
videos/
├── README.md (este archivo)
├── thumbnails/          # Miniaturas de los videos
│   └── ejemplo.jpg
└── ejemplo.mp4          # Videos en formato MP4
```

## Cómo añadir un nuevo video comercial

### 1. Preparar los archivos

- **Video**: Formato recomendado MP4 (H.264)
- **Miniatura**: Imagen JPG o PNG (recomendado 1280x720px)

### 2. Subir los archivos

1. Coloca el video en esta carpeta: `public/videos/`
2. Coloca la miniatura en: `public/videos/thumbnails/`

### 3. Añadir entrada en App.js

Abre `src/App.js` y añade un nuevo objeto en el array `portfolioItems`:

```javascript
{
  id: XX, // Número único incremental
  type: 'video',
  category: 'Comercial',
  src: `${process.env.PUBLIC_URL}/videos/thumbnails/nombre-miniatura.jpg`,
  videoUrl: `${process.env.PUBLIC_URL}/videos/nombre-video.mp4`,
  alt: 'Descripción del video comercial - ROMPPAO',
  title: 'Nombre del Cliente o Proyecto',
  description: 'Breve descripción del proyecto comercial.'
}
```

### Ejemplo completo

Si tienes un video llamado `coca-cola-2024.mp4` con miniatura `coca-cola-thumb.jpg`:

```javascript
{
  id: 38,
  type: 'video',
  category: 'Comercial',
  src: `${process.env.PUBLIC_URL}/videos/thumbnails/coca-cola-thumb.jpg`,
  videoUrl: `${process.env.PUBLIC_URL}/videos/coca-cola-2024.mp4`,
  alt: 'Video comercial Coca-Cola 2024 - ROMPPAO filmmaker Madrid',
  title: 'Coca-Cola',
  description: 'Campaña publicitaria verano 2024.'
}
```

## Formatos soportados

- **Video**: MP4 (H.264), WebM
- **Miniatura**: JPG, PNG, WebP

## Notas importantes

- Los videos locales se reproducen con el reproductor HTML5 nativo
- Los videos de YouTube (Videoclips, Vlogging) funcionan independientemente
- Mantén los nombres de archivo sin espacios (usa guiones: `mi-video.mp4`)
- Comprime los videos antes de subirlos para mejor rendimiento web
