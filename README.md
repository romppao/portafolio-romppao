# 📸 ROMPPAO - Portfolio Profesional

> Portfolio web profesional de fotografía y filmmaking creado y diseñado completamente por **ROMPPAO** en 2025.

![Portfolio Preview](https://img.shields.io/badge/Estado-Activo-success)
![Diseñado por](https://img.shields.io/badge/Diseñado%20por-ROMPPAO-red)
![Tecnología](https://img.shields.io/badge/React-18-blue)

---

## 🎨 Sobre este Proyecto

Este es mi portfolio profesional como fotógrafo y filmmaker en Madrid. El sitio web fue **diseñado, desarrollado y optimizado completamente por mí (ROMPPAO)** mostrando mis mejores trabajos en fotografía (11 retratos urbanos, 10 fotos B&N, 5 fotos de boxeo, 2 paisajes) y 6 videoclips musicales para artistas como KANEIS, MKBLOOND, Vare Gang, Bad Key y más.

**Características principales:**
- ✨ Diseño moderno y elegante con animaciones
- 📱 Totalmente responsive (se adapta a móviles, tablets y PC)
- 🚀 Optimizado para velocidad de carga
- 🔍 SEO optimizado para aparecer en Google
- 🎬 Integración con YouTube para videoclips
- 🖼️ Galería de imágenes con filtros por categoría
- 🎥 Sistema de reproducción de videos en modal

---

## 📋 Tabla de Contenidos

1. [Cómo Ver tu Portfolio](#-cómo-ver-tu-portfolio)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Guía Completa para Editar tu Portfolio](#-guía-completa-para-editar-tu-portfolio)
   - [Cambiar Textos y Títulos](#1-cambiar-textos-y-títulos)
   - [Agregar o Eliminar Imágenes](#2-agregar-o-eliminar-imágenes)
   - [Agregar o Eliminar Videos](#3-agregar-o-eliminar-videos)
   - [Cambiar Redes Sociales](#4-cambiar-redes-sociales)
   - [Cambiar Favicon](#5-cambiar-favicon)
   - [Cambiar Colores del Diseño](#6-cambiar-colores-del-diseño)
4. [Cómo Optimizar Imágenes](#-cómo-optimizar-imágenes)
5. [Cómo Publicar en Internet](#-cómo-publicar-en-internet)
6. [Solución de Problemas](#-solución-de-problemas)

---

## 🌐 Cómo Ver tu Portfolio

### En tu Ordenador (Local)

1. **Abrir la terminal/PowerShell** en la carpeta del proyecto
2. **Ejecutar**: `npm start`
3. **Abrir en el navegador**: http://localhost:3000/portafolio-romppao

El sitio se abrirá automáticamente y se actualizará cada vez que guardes cambios.

### En Internet

Una vez publicado, tu portfolio estará disponible en:
**https://romppao.es/**

---

## 📁 Estructura del Proyecto

```
portafolio-romppao/
│
├── public/                    # Archivos públicos
│   ├── images/               # 📸 TUS IMÁGENES AQUÍ (28 imágenes totales)
│   │   ├── profile.jpg       # Foto de perfil
│   │   ├── retrato-1.jpg     # 11 fotos de retratos urbanos
│   │   ├── retrato-11.jpg    # (retrato-1 a retrato-11)
│   │   ├── blancoynegro-1.jpg # 10 fotos en blanco y negro
│   │   ├── blancoynegro-10.jpg # (blancoynegro-1 a blancoynegro-10)
│   │   ├── boxeo-1.jpg       # 5 fotos de boxeo
│   │   ├── boxeo-5.jpg       # (boxeo-1 a boxeo-5)
│   │   ├── paisaje-1.jpg     # 2 fotos de paisaje
│   │   └── paisaje-2.jpg     # (paisaje-1 y paisaje-2)
│   │
│   ├── index.html            # HTML principal (SEO)
│   ├── favicon.jpg           # Icono del navegador
│   ├── robots.txt            # Para Google
│   └── sitemap.xml           # Mapa del sitio
│
├── src/                      # Código fuente
│   ├── App.js                # 🎯 ARCHIVO PRINCIPAL (EDITA AQUÍ)
│   └── index.css             # Estilos CSS
│
├── optimize-images.js        # Script para optimizar imágenes
├── optimize-single-image.js  # Script para optimizar una imagen
├── README.md                 # Este archivo
└── package.json              # Configuración del proyecto
```

---

## 📝 Guía Completa para Editar tu Portfolio

### 1️⃣ Cambiar Textos y Títulos

**Archivo**: `src/App.js`

#### a) Cambiar el Título Principal del Hero

```javascript
// 📍 UBICACIÓN: Línea 169-172

<h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
  Capturando la esencia <br />
  en cada frame.
</h1>
```

**Cómo cambiar**: Edita el texto entre `<h1>` y `</h1>`. Puedes escribir lo que quieras.

#### b) Cambiar el Subtítulo

```javascript
// 📍 UBICACIÓN: Línea 174

<p className="text-neutral-400 text-base md:text-xl mb-8 max-w-2xl mx-auto">
  Fotógrafo y filmmaker profesional en Madrid especializado en retratos, paisajes y videoclips musicales.
</p>
```

**Cómo cambiar**: Edita el texto entre `<p>` y `</p>`.

#### c) Cambiar Texto del Footer

```javascript
// 📍 UBICACIÓN: Línea 290-293

<p className="text-neutral-500 text-sm">
  © 2025 ROMPPAO. Todos los derechos reservados.
</p>
```

---

### 2️⃣ Agregar o Eliminar Imágenes

**Archivos**: 
- Imágenes: `public/images/`
- Código: `src/App.js` (líneas 9-293)

#### Paso 1: Agregar la Imagen a la Carpeta

1. Copia tu imagen (formato JPG recomendado)
2. Pégala en la carpeta `public/images/`
3. **Nombre recomendado**: `categoria-numero.jpg` (ejemplo: `retrato-2.jpg`)

#### Paso 2: Agregar el Código

```javascript
// 📍 UBICACIÓN: Línea 9-293 en src/App.js
// Busca el array 'portfolioItems' y agrega esto AL FINAL, ANTES del corchete de cierre:

{
  id: 37,                                      // Número único (incrementa el último - actualmente hasta 36)
  type: 'photo',                               // 'photo' o 'video'
  category: 'Retrato',                         // Categoría del filtro
  src: `${process.env.PUBLIC_URL}/images/tu-imagen.jpg`,  // Nombre de tu archivo
  alt: 'Descripción SEO de tu imagen',        // Para Google
  title: 'Título de la Imagen',                // Título que se mostrará
  description: 'Descripción corta de la foto.' // Descripción
},
```

#### Categorías Disponibles:
- `'Retrato'` - Fotografía de retratos
- `'Paisaje'` - Fotografía de paisajes  
- `'Blanco y Negro'` - Fotografía B&N
- `'Boxeo'` - Fotografía deportiva

**💡 Para crear una NUEVA categoría**, simplemente escribe un nuevo nombre en `category`.

#### Ejemplo Completo:

```javascript
{
  id: 37,
  type: 'photo',
  category: 'Retrato',
  src: `${process.env.PUBLIC_URL}/images/retrato-12.jpg`,
  alt: 'Fotografía de retrato en estudio Madrid - ROMPPAO',
  title: 'Sesión de Estudio',
  description: 'Retrato profesional en estudio natural.'
},
```

---

### 3️⃣ Agregar o Eliminar Videos

**Archivo**: `src/App.js` (líneas 120-178)

**Videoclips actuales**: 6 videoclips (KANEIS - LAKYLA, KANEIS - GENES, BAD KEY - PASO DE ELLA, VARE GANG - NO WORRIES, MKBLOOND - MALA, KANEIS - SOUVENIR)

#### Paso 1: Subir Video a YouTube

1. Sube tu videoclip a YouTube
2. Copia el enlace (puede ser cualquier formato):
   - `https://www.youtube.com/watch?v=ABC123`
   - `https://youtu.be/ABC123`

#### Paso 2: Agregar el Código

```javascript
// 📍 UBICACIÓN: Entre las líneas 120-178 (sección de videos)
// El próximo ID sería 37 (actualmente hay hasta el 36)

{
  id: 37,                                      // Número único (incrementa el último)
  type: 'video',                               // DEBE ser 'video'
  category: 'Videoclip',                       // O 'Comercial', 'Vlogging'
  src: 'https://img.youtube.com/vi/ABC123/maxresdefault.jpg',  // Miniatura automática
  videoUrl: 'https://youtu.be/ABC123',         // Tu enlace de YouTube
  alt: 'Videoclip [TÍTULO] - [ARTISTA] - Video musical filmado por ROMPPAO',
  title: 'ARTISTA - TÍTULO',
  description: 'Video musical oficial. Filmado por ROMPPAO.'
},
```

#### Cómo Obtener la Miniatura Automática:

Reemplaza `ABC123` con el ID de tu video de YouTube:
```
https://img.youtube.com/vi/ABC123/maxresdefault.jpg
```

**Ejemplo Real**: Video de "KANEIS - SOUVENIR" (`https://youtu.be/NWiLvYD6t4c`)
```
https://img.youtube.com/vi/NWiLvYD6t4c/maxresdefault.jpg
```

**Todos los videoclips actuales**:
- KANEIS, AITOR - LAKYLA (lEz1hHGvNMc)
- KANEIS - GENES (SnJWY2C5VKs)
- BAD KEY - PASO DE ELLA (CWED5hhsGu0)
- VARE GANG, MKBLOOND, KXNNZ - NO WORRIES (RS-8J4NYboc)
- MKBLOOND - MALA (1e4-du2hsR4)
- KANEIS - SOUVENIR (NWiLvYD6t4c)

---

### 4️⃣ Cambiar Redes Sociales

**Archivo**: `src/App.js` (líneas 486-513)

```javascript
// 📍 Instagram - Línea 200-209
<a 
  href="https://instagram.com/romppao"    // 👈 CAMBIA ESTE ENLACE
  target="_blank" 
  rel="noopener noreferrer"
>
  <Instagram className="w-5 h-5" />
  <span>Instagram</span>
</a>

// 📍 Email - Línea 211-220  
<a href="mailto:tuemail@gmail.com">       // 👈 CAMBIA ESTE EMAIL
  <Mail className="w-5 h-5" />
  <span>Email</span>
</a>
```

---

### 5️⃣ Cambiar Favicon

El **favicon** es el icono que aparece en la pestaña del navegador.

**Pasos**:

1. **Prepara tu imagen**:
   - Formato: JPG o PNG
   - Tamaño recomendado: 512x512 píxeles
   - Debe ser cuadrada

2. **Guárdala como**: `favicon.jpg` en la carpeta `public/`

3. **Ya está listo** - El código ya está configurado para usar `favicon.jpg`

---

### 6️⃣ Cambiar Colores del Diseño

**Archivo**: `src/index.css`

Los colores principales están definidos al inicio del archivo. Aquí están los más importantes:

```css
/* 📍 UBICACIÓN: Líneas aproximadas en src/index.css */

/* Color principal (rojo) */
.text-red-500 { color: #ef4444; }      /* 👈 Cambiar para texto rojo */
.bg-red-500 { background: #ef4444; }   /* 👈 Cambiar para fondo rojo */

/* Fondo oscuro */
.bg-black { background: #000000; }     /* Fondo negro */
.bg-neutral-900 { background: #171717; } /* Gris muy oscuro */

/* Texto */
.text-white { color: #ffffff; }        /* Texto blanco */
.text-neutral-400 { color: #a3a3a3; }  /* Texto gris claro */
```

**Para cambiar el color principal (rojo)** a otro color:

1. Busca todos los lugares con `red-500` en `src/App.js`
2. Reemplázalos por otro color, por ejemplo:
   - `blue-500` (azul)
   - `purple-500` (morado)
   - `green-500` (verde)
   - `orange-500` (naranja)

**Ejemplo**: Cambiar de rojo a azul:
```
Buscar:     text-red-500
Reemplazar: text-blue-500
```

---

## 🖼️ Cómo Optimizar Imágenes

Las imágenes grandes hacen que tu web cargue lenta. Antes de subir imágenes, optimízalas:

### Opción 1: Usar el Script Automático (Recomendado)

```bash
node optimize-images.js
```

Este script:
- ✅ Redimensiona a 1200px de ancho
- ✅ Comprime a calidad 85%
- ✅ Reduce el tamaño en ~90%

### Opción 2: Optimizar Manualmente

**Herramientas recomendadas**:
- [TinyPNG](https://tinypng.com/) - Online, gratis
- [Squoosh](https://squoosh.app/) - Google, muy bueno
- Photoshop: Exportar → Guardar para web

**Configuración recomendada**:
- Formato: **JPEG**
- Ancho máximo: **1200-1920px**
- Calidad: **80-85%**
- Progressive: **Sí**

---

## 🚀 Cómo Publicar en Internet

### Método 1: GitHub Pages (Gratis)

1. **Asegúrate de tener Git instalado**

2. **Ejecuta estos comandos** en la terminal:

```bash
# 1. Configurar Git (primera vez)
git config user.name "ROMPPAO"
git config user.email "tuemail@gmail.com"

# 2. Publicar
npm run deploy
```

3. **Espera 2-3 minutos** y tu sitio estará en:
   `https://romppao.es/`

### Método 2: Vercel (Alternativa)

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Haz clic en "Deploy"
4. ¡Listo! Te dan un enlace como `romppao.vercel.app`

---

## 🔧 Solución de Problemas

### ❌ La página no carga después de cambios

**Solución**:
```bash
# 1. Detén el servidor (Ctrl + C)
# 2. Limpia la caché
rm -rf node_modules package-lock.json
npm install
# 3. Inicia de nuevo
npm start
```

### ❌ Las imágenes no aparecen

**Verifica**:
1. ✅ La imagen está en `public/images/`
2. ✅ El nombre del archivo coincide exactamente (mayúsculas/minúsculas)
3. ✅ La extensión es `.jpg` (todo en minúsculas)
4. ✅ No hay espacios en el nombre del archivo

**Ejemplo correcto**: `paisaje-1.jpg`  
**Incorrecto**: `Paisaje 1.JPG`

### ❌ Los videos de YouTube no se reproducen

**Verifica**:
1. ✅ El video es **público** en YouTube
2. ✅ El enlace es correcto
3. ✅ Usaste `videoUrl` (no `src`)

### ❌ Error al hacer `npm start`

```bash
# Reinstala las dependencias
npm install
```

### ❌ Error al hacer `npm run deploy`

**Verifica**:
1. ✅ Tienes Git instalado: `git --version`
2. ✅ La configuración en `package.json` es correcta
3. ✅ Tu repositorio está en GitHub

---

## 📞 Información de Contacto

**ROMPPAO**
- 📍 Madrid, España
- 📸 Instagram: [@romppao](https://instagram.com/romppao)
- 🎬 YouTube: [@romppao](https://youtube.com/@romppao)
- ✉️ Email: tu email aquí

---

## 📄 Licencia

Este proyecto fue creado y diseñado por **ROMPPAO** en 2025. Todos los derechos reservados.

**Tecnologías utilizadas**:
- React 18
- Tailwind CSS (via raw CSS)
- Lucide Icons
- Sharp (optimización de imágenes)

---

## 🎯 Checklist de Personalización

Usa esta lista para asegurarte de que personalizaste todo:

- [ ] Cambiado textos del hero (título y descripción)
- [ ] Agregadas tus propias imágenes
- [ ] Agregados tus videoclips
- [ ] Actualizado enlace de Instagram
- [ ] Actualizado email de contacto
- [ ] Cambiado el favicon
- [ ] Optimizadas todas las imágenes
- [ ] Publicado en GitHub Pages
- [ ] Compartido en redes sociales

---

## 🔄 Actualizaciones

**Versión actual**: 1.0.0  
**Última actualización**: Diciembre 2025

### Changelog:
- ✅ Diseño inicial completo con animaciones
- ✅ 28 fotografías del portfolio:
  - 11 retratos urbanos
  - 10 fotos en blanco y negro
  - 5 fotos de boxeo
  - 2 paisajes de La Pedriza
- ✅ 6 videoclips musicales integrados:
  - KANEIS, AITOR - LAKYLA
  - KANEIS - GENES
  - BAD KEY - PASO DE ELLA
  - VARE GANG, MKBLOOND, KXNNZ - NO WORRIES
  - MKBLOOND - MALA
  - KANEIS - SOUVENIR
- ✅ SEO optimizado con meta tags y structured data
- ✅ Todas las imágenes optimizadas
- ✅ Responsive design premium
- ✅ Favicon personalizado
- ✅ Sistema de filtros por categorías
- ✅ Modal para reproducción de videos

---

**¿Tienes dudas?** Revisa esta guía paso a paso. Cada sección está diseñada para que puedas editar tu portfolio fácilmente, ¡incluso si nunca has programado antes!

---

**Creado con ❤️ por ROMPPAO**
