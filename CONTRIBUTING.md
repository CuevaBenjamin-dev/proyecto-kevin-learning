# Guía de contribución

Esta guía describe el proceso recomendado para realizar cambios en el proyecto.

## Requisitos

- Git.
- Node.js [versión].
- npm.
- Herramientas adicionales necesarias.

## Preparación del proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
npm ci
```

Comprueba que el proyecto funciona:

```bash
npm run doctor
```

## Flujo de trabajo

1. Cambiar a la rama principal.
2. Descargar los últimos cambios.
3. Crear una rama nueva.
4. Realizar cambios relacionados con una sola tarea.
5. Revisar y validar los cambios.
6. Crear commits descriptivos.
7. Publicar la rama.
8. Abrir un Pull Request.

Ejemplo:

```bash
git switch main
git pull --ff-only
git switch -c feature/nombre-del-cambio
```

## Nombres de ramas

Utiliza nombres breves y descriptivos:

```text
feature/descripcion
fix/descripcion
docs/descripcion
test/descripcion
chore/descripcion
```

## Commits

Formato recomendado:

```text
tipo: descripción breve
```

Ejemplos:

```text
feat: add user registration
fix: correct login validation
docs: explain local installation
chore: update dependencies
```

## Validaciones mínimas

Antes de publicar una rama:

```bash
npm run doctor
git diff --check
git status
```

Añade aquí las pruebas específicas del proyecto cuando existan.

## Información sensible

No deben confirmarse en Git:

- Archivos `.env`.
- Tokens.
- Contraseñas.
- Claves privadas.
- Credenciales de servicios.
- Datos personales reales.

Utiliza `.env.example` para mostrar los nombres de las variables sin incluir valores sensibles.

## Pull Requests

El Pull Request debe indicar:

- Qué se modificó.
- Por qué se realizó el cambio.
- Cómo se validó.
- Qué riesgos podría tener.

## Definición de terminado

Un cambio está terminado cuando:

- Cumple el objetivo de la tarea.
- Ha sido probado.
- No contiene información sensible.
- La documentación fue actualizada cuando era necesario.
- Se integró mediante Pull Request.
