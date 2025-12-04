# Sistema de Videos Locales - Configuración Completada ✅

## 📁 Estructura creada

```
portafolio-romppao/
└── public/
    └── videos/
        ├── README.md              # Guía completa
        ├── thumbnails/            # Miniaturas de videos
        │   └── (tus-miniaturas.jpg)
        └── (tus-videos.mp4)
```

## 🎬 Cómo añadir un video comercial

### Paso 1: Preparar archivos
- **Video**: Formato MP4 (H.264) recomendado
- **Miniatura**: JPG/PNG de 1280x720px

### Paso 2: Subir archivos
1. Coloca el video en: `public/videos/mi-video.mp4`
2. Coloca la miniatura en: `public/videos/thumbnails/mi-video-thumb.jpg`

### Paso 3: Editar App.js
Abre `src/App.js` y busca el comentario:
```javascript
// EJEMPLO: Cómo añadir un video LOCAL en la sección COMERCIAL
```

Descomenta y personaliza el código de ejemplo:

```javascript
{
  id: 38,  // Usa el siguiente ID disponible
  type: 'video',
  category: 'Comercial',
  src: `${process.env.PUBLIC_URL}/videos/thumbnails/mi-video-thumb.jpg`,
  videoUrl: `${process.env.PUBLIC_URL}/videos/mi-video.mp4`,
  alt: 'Video comercial para [Cliente] - ROMPPAO filmmaker Madrid',
  title: 'Cliente o Proyecto',
  description: 'Campaña comercial 2024.'
}
```

### Paso 4: Verificar
1. Guarda el archivo
2. Recarga la página en el navegador
3. Ve a **Filmmaking** → **Comercial**
4. Haz clic en la miniatura para ver el video

## ✨ Características

- ✅ Soporte para videos locales (MP4, WebM)
- ✅ Soporte para videos de YouTube
- ✅ Detección automática del tipo de video
- ✅ Reproductor HTML5 nativo para videos locales
- ✅ Iframe de YouTube para videos externos
- ✅ Miniaturas personalizadas
- ✅ Aspect ratio 16:9 correcto

## 📝 Notas importantes

- Los videos locales se reproducen automáticamente al abrir el modal
- Usa nombres sin espacios: `mi-video.mp4` ✅ no `mi video.mp4` ❌
- Comprime los videos antes de subirlos para mejor rendimiento
- Las miniaturas deben estar en formato 16:9 (1280x720 o 1920x1080)

## 🔧 Sistema técnico

El código detecta automáticamente si un video es de YouTube o local:

- **YouTube**: URLs que contienen `youtube.com` o `youtu.be` → iframe
- **Local**: URLs que apuntan a archivos locales → `<video>` HTML5

No necesitas hacer nada especial, el sistema lo maneja automáticamente.
