# ADR-0001: Entorno y tooling base del repositorio

- Estado: Aceptado
- Fecha: 2026-07-16

## Contexto

El Proyecto Kevin necesita un entorno reproducible para el aprendizaje,
la colaboración, las pruebas y los futuros despliegues.

Las diferencias de versiones, gestores y flujos Git pueden producir
resultados inconsistentes y dificultar la reproducción de errores.

## Decisión

Se utilizará:

- Node.js 24 LTS.
- `.nvmrc` con la línea principal `24`.
- npm como único gestor de paquetes.
- `package-lock.json` versionado.
- `npm ci` para instalaciones limpias.
- GitHub como repositorio remoto.
- Ramas breves y Pull Requests antes de integrar en `main`.
- Commits pequeños y descriptivos.
- `.env.example` sin secretos reales.

## Alternativas consideradas

### Node.js Current

Descartado como base porque se prioriza una línea LTS para estabilidad.

### Múltiples gestores de paquetes

Descartado porque mezclar npm, pnpm o Yarn produciría lockfiles y procesos
de instalación distintos.

### Trabajar directamente en main

Descartado porque elimina el punto de revisión y aumenta el riesgo de
integrar trabajo incompleto.

## Consecuencias positivas

- Instalaciones más reproducibles.
- Historial revisable.
- Menor riesgo de publicar secretos.
- Flujo compatible con trabajo profesional.

## Consecuencias negativas

- Cada cambio requiere una rama y revisión.
- Las actualizaciones de Node y dependencias deben planificarse.
- El equipo debe mantener el lockfile coherente.

## Cuándo revisar esta decisión

- Cuando Node.js 24 deje de estar soportado.
- Cuando el equipo necesite otro gestor por una razón técnica demostrable.
- Cuando la arquitectura del repositorio cambie.
