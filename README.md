# AAPOS Potosí — Sistema completo (React)

Réplica del sitio de AAPOS Potosí con 4 páginas: Inicio, Sobre nosotros,
Servicios y Contactos. Organizado para que un equipo trabaje sin pisarse
los archivos.

## Estructura de carpetas

```
aapos-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── img/                     # todas las imágenes van aquí
└── src/
    ├── main.jsx                  # punto de entrada (no tocar)
    ├── App.jsx                   # rutas de todas las páginas (ver regla abajo)
    ├── api/                       # una API por página, separada
    │   ├── inicioApi.js
    │   ├── sobreNosotrosApi.js
    │   ├── serviciosApi.js
    │   └── contactosApi.js        # además la usa el Footer
    ├── components/                 # compartidos entre páginas
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── Carousel.jsx
    ├── pages/                       # una página por integrante
    │   ├── Inicio.jsx
    │   ├── SobreNosotros.jsx
    │   ├── Servicios.jsx
    │   └── Contactos.jsx
    └── styles/                       # un CSS por página/componente
        ├── theme.css
        ├── Navbar.css
        ├── Footer.css
        ├── Carousel.css
        ├── Inicio.css
        ├── SobreNosotros.css
        ├── Servicios.css
        └── Contactos.css
```

## Regla de asignación por integrante (para evitar conflictos de Git)

Cada persona del grupo trabaja SOLO en sus 3 archivos:

| Integrante | Página | API | Estilos |
|---|---|---|---|
| Persona 1 | `pages/Inicio.jsx` | `api/inicioApi.js` | `styles/Inicio.css` |
| Persona 2 | `pages/SobreNosotros.jsx` | `api/sobreNosotrosApi.js` | `styles/SobreNosotros.css` |
| Persona 3 | `pages/Servicios.jsx` | `api/serviciosApi.js` | `styles/Servicios.css` |
| Persona 4 | `pages/Contactos.jsx` | `api/contactosApi.js` | `styles/Contactos.css` |

Archivos **compartidos** (`App.jsx`, `Navbar.jsx`, `Footer.jsx`, `theme.css`):
edítenlos solo si es estrictamente necesario, avisando al resto del grupo
antes, ya que cualquier cambio ahí puede generar conflicto con todos.

## Flujo de Git recomendado

1. Cada integrante crea su propia rama:
   ```bash
   git checkout -b pagina-inicio
   ```
2. Trabaja SOLO en sus archivos asignados.
3. Antes de subir, actualiza con lo último de `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout pagina-inicio
   git merge main
   ```
4. Sube sus cambios y abre el Pull Request:
   ```bash
   git add .
   git commit -m "Agrega página de Inicio"
   git push origin pagina-inicio
   ```
5. Como cada uno tocó archivos distintos, el merge no debería generar
   conflictos. Si dos personas SÍ editaron el mismo archivo compartido,
   resuelvan el conflicto línea por línea conservando el trabajo de ambos.

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` en el navegador.

## Conectar con la API real

Cada archivo en `src/api/` intenta llamar primero a `VITE_API_URL` (definido
en un `.env`), y si falla, usa datos de respaldo (mock) con el contenido real
del sitio. Cuando el backend esté listo, solo crea un `.env`:

```
VITE_API_URL=https://tu-api-real.com
```
