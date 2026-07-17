# Laboratorio de auditoría de dependencias

## Objetivo

Aprender a identificar, interpretar y corregir una vulnerabilidad conocida
sin incorporarla al paquete principal del Proyecto Kevin.

## Estado inicial

- Paquete evaluado: `minimist`
- Versión vulnerable utilizada temporalmente: `1.2.5`
- Resultado real de `npm audit`: [ESCRIBIR RESULTADO]
- Código de salida: [ESCRIBIR CÓDIGO]

## Investigación

El reporte fue revisado considerando:

- Severidad.
- Rango de versiones afectadas.
- Versión corregida.
- Relación directa o indirecta.
- Acción recomendada.

## Corrección

Comando utilizado:

```bash
npm install --save-exact minimist@latest
```

## Documentación

- [Guía de contribución](CONTRIBUTING.md)
- [ADR-0001: entorno y tooling](docs/adr/ADR-0001-entorno-y-stack-base.md)
- [Flujo Git aprendido](notes/stage-0-git-flow.md)
- [Changelog](CHANGELOG.md)

## Progreso

- [x] Etapa 0: entorno profesional, terminal y Git.
- [ ] Etapa 1: HTML semántico y accesibilidad.
