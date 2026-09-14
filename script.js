// Configuración defensiva de variables de entorno
const config = {
  env: process.env.APP_ENV || 'sandbox',
  isSimulation: process.env.SIMULATION_MODE === 'true',
  isDryRun: process.env.DRY_RUN === 'true',
  memoryLimit: parseInt(process.env.MAX_MEMORY_ALLOCATION_MB, 10) || 512,
  
  // Asignación segura de secretos con fallback simulado
  credentials: {
    clientId: process.env.OAUTH_CLIENT_ID || 'mock_client_id',
    clientSecret: process.env.OAUTH_CLIENT_SECRET || 'mock_client_secret',
    hmacKey: process.env.HMAC_SIGNING_KEY || 'default_dev_hmac_key_32_bytes',
  },
  
  endpoints: {
    apiBase: process.env.API_BASE_URL || 'http://localhost:8080/mock-api',
  }
};

// Guardarraíl de ejecución: Si está en modo simulación, omite validaciones estrictas de red
if (config.isSimulation) {
  console.log('[SYSTEM]: Modo simulación activo. Omite llamadas a red externa e interacciones reales.');
}
