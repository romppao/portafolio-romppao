# 📸 Portfolio Web ROMPPAO - Guía de Funcionamiento

## 🎯 ¿Qué es este proyecto?

Este es un **portafolio web personal** para mostrar fotografías y videos de manera profesional. Funciona como una galería interactiva donde los visitantes pueden filtrar contenido por tipo (fotos/videos) y categorías específicas.

---

## 🛠️ Tecnologías Utilizadas

### **React**
- Framework de JavaScript para crear páginas web interactivas
- Permite que la página cambie sin necesidad de recargar el navegador

### **Tailwind CSS**
- Sistema de estilos que hace la página responsive (se adapta a móviles, tablets y ordenadores)
- Estilo "Dark Mode" con diseño minimalista

### **Lucide React**
- Colección de iconos modernos (cámara, Instagram, teléfono, etc.)

---

## 📁 Estructura del Código

### **1. Sistema de Datos (portfolioItems)**

Los proyectos se guardan en una lista de objetos. Cada proyecto tiene:

```javascript
{
  id: 1,                          // Número único identificador
  type: 'photo',                  // Tipo: 'photo' o 'video'
  category: 'Retrato',            // Subcategoría del proyecto
  src: 'url-de-la-imagen.jpg',    // Enlace de la imagen
  videoUrl: 'enlace-youtube',     // (Solo videos) URL del video
  title: 'Título del proyecto',   // Nombre que aparece al pasar el ratón
  description: 'Descripción breve' // Texto descriptivo
}
```

#### **Categorías disponibles:**
- **Fotos**: Retrato, Blanco y Negro, Boxeo, Paisaje
- **Videos**: Videoclip, Comercial, Vlogging

---

## ⚙️ Cómo Funciona la Página

### **Sistema de Filtros**

La página tiene 3 "estados" que controlan lo que ves:

1. **filter**: Qué tipo de contenido mostrar
   - `'all'` → Muestra todo
   - `'photo'` → Solo fotos
   - `'video'` → Solo videos

2. **selectedCategory**: Subcategoría seleccionada
   - Ejemplo: 'Retrato', 'Boxeo', 'Videoclip'

3. **selectedItem**: Proyecto abierto en pantalla completa
   - `null` → Galería normal
   - `objeto` → Modal con proyecto ampliado

### **Flujo de Funcionamiento:**

```
1. Usuario entra a la página
2. Se muestran TODOS los proyectos
3. Usuario hace clic en "FOTOS" → filter cambia a 'photo'
4. Página filtra y muestra solo fotos
5. Usuario selecciona "Boxeo" → selectedCategory = 'Boxeo'
6. Página muestra solo fotos de boxeo
7. Usuario hace clic en una foto → selectedItem guarda ese proyecto
8. Se abre modal en pantalla completa
```

---

## 🎨 Secciones de la Página

### **1. Hero Section (Cabecera)**
- Título grande: "ROMPPAO"
- Subtítulo: "FOTOGRAFÍA Y FILMMAKING"
- Botones para contacto e Instagram

### **2. Barra de Filtros**
- Botones: TODO / FOTOS / VIDEOS
- Al hacer clic, cambia qué proyectos se muestran

### **3. Subcategorías**
- Aparecen según el filtro activo
- Permiten filtrar aún más específicamente

### **4. Galería de Proyectos**
- Cuadrícula responsive (1-4 columnas según pantalla)
- Al pasar el ratón: muestra título y descripción
- Al hacer clic: abre el proyecto en grande

### **5. Modal (Ventana emergente)**
- Muestra proyecto seleccionado a pantalla completa
- Videos: reproduce embed de YouTube
- Fotos: imagen ampliada
- Botón X para cerrar

---

## 🔧 Cómo Añadir Contenido Nuevo

### **Agregar una Foto:**

1. Ve al bloque `portfolioItems`
2. Copia un objeto existente
3. Pega al final del array
4. Modifica:
   ```javascript
   {
     id: 99,                    // Cambia por número nuevo
     type: 'photo',
     category: 'Retrato',       // Elige categoría válida
     src: 'TU-ENLACE-AQUI.jpg', // URL de tu imagen
     title: 'Título nuevo',
     description: 'Descripción'
   }
   ```

### **Agregar un Video:**

```javascript
{
  id: 100,
  type: 'video',
  category: 'Videoclip',              // Videoclip/Comercial/Vlogging
  src: 'miniatura-del-video.jpg',     // Imagen de portada
  videoUrl: 'ENLACE-DE-YOUTUBE',      // URL completa del video
  title: 'Nombre del video',
  description: 'Descripción'
}
```

---

## 🎨 Personalización de Colores

Los colores principales se controlan con clases de Tailwind:

- **Fondo oscuro**: `bg-neutral-950` (negro suave)
- **Texto principal**: `text-white`
- **Acentos rojos**: `red-500`, `red-600` (para botones hover)
- **Fondos suaves**: `bg-neutral-900` (para tarjetas)

**Para cambiar el color principal:**
- Busca todas las clases `red-XXX`
- Reemplaza por otro color: `blue-500`, `green-600`, etc.

---

## 📱 Responsive Design

La página se adapta automáticamente:

- **Móvil**: 1 columna
- **Tablet**: 2 columnas  
- **Portátil**: 3 columnas
- **Escritorio grande**: 4 columnas

Clases Tailwind que controlan esto:
```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```

---

## 🚀 Resumen de Funcionamiento

1. **Carga inicial**: Se muestran todos los proyectos
2. **Filtro por tipo**: Al hacer clic en FOTOS/VIDEOS, se filtran por `type`
3. **Filtro por categoría**: Filtra dentro del tipo seleccionado
4. **Abrir proyecto**: Al hacer clic en una imagen, se guarda en `selectedItem` y se muestra el modal
5. **Cerrar modal**: Se resetea `selectedItem` a `null`

---

## 📝 Notas Importantes

- Todos los enlaces de imágenes deben ser URLs válidas
- Videos solo funcionan con enlaces de YouTube
- Las categorías deben coincidir exactamente (mayúsculas/minúsculas)
- Cada proyecto necesita un `id` único

---

**Creado por ROMPPAO** | Fotografía y Filmmaking
