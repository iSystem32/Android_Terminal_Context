// Si usas CommonJS (require)
const path = require('path');

const rutaCompleta = __filename;                      // Ruta absoluta completa
const nombreArchivo = path.basename(__filename);      // "mi-script.js"

console.log(nombreArchivo);
