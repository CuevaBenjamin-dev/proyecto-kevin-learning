const nodeMajor = Number(process.versions.node.split(".")[0]);

if (nodeMajor !== 24) {
  console.error(
    `Entorno incorrecto: se esperaba Node.js 24 LTS, pero se encontró ${process.version}.`,
  );
  process.exit(1);
}

console.log(`Entorno correcto: Node.js ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Arquitectura: ${process.arch}`);
