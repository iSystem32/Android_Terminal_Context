// Si usas ES Modules (import)
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const nombreArchivo = path.basename(__filename);

console.log(nombreArchivo);
