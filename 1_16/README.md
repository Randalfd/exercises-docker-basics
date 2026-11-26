# Astro + Vercel — deploy de prueba

Aplicación web mínima en [Astro](https://astro.build): **una sola página**, con
contenido irrelevante. El único objetivo es tener algo para desplegar en Vercel y
verificar que el flujo de deploy funciona.

## Requisitos

- Node.js **>= 22** (probado con 22.23.1)
- npm **>= 9.6.5** (incluido en Node 22)

## Dependencias

Una sola dependencia de runtime:

| Paquete | Versión           | Motivo                                                                                                  |
| ------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `astro` | `5.18.2` (fijada) | Framework y build estático. No se usa adaptador: la salida es HTML estático y Vercel la sirve tal cual. |

No hay Tailwind, ni frameworks de UI, ni variables de entorno. Los estilos están
escritos inline en `src/pages/index.astro`.

## Cómo levantar la aplicación

```bash
# 1. instalar dependencias
npm install

# 2. entorno de desarrollo (http://localhost:4321)
npm run dev

# 3. build de producción -> carpeta dist/
npm run build

# 4. servir el build localmente (http://localhost:4321)
npm run preview
```

## Estructura

```
.
├── astro.config.mjs     # configuración (output: 'static')
├── package.json
├── public/              # (vacío) archivos estáticos
└── src/
    └── pages/
        └── index.astro  # la única página
```

## Deploy en Vercel

1. Subí el proyecto a un repositorio Git (GitHub/GitLab/Bitbucket).
2. En Vercel: **Add New → Project** e importá el repo.
3. Vercel detecta Astro automáticamente. Si pide confirmar:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. No hace falta configurar variables de entorno.
5. Deploy.

También sirve `vercel` desde la terminal (`npx vercel`), sin config adicional.

## Scripts

| Script            | Acción                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga |
| `npm run build`   | Build estático a `dist/`           |
| `npm run preview` | Sirve el build localmente          |
| `npm run astro`   | CLI de Astro                       |
