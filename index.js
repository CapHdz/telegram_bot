const TelegramBotAPI = require('node-telegram-bot-api');

// Ingresa tu token de bot de Telegram
const token = '6964071399:AAF7Uq55KkG7yAkab9u6PEP-ySGfPCvdQcM';

// Crea una instancia del bot
const bot = new TelegramBotAPI(token);

// Función para enviar mensaje de bienvenida y solicitar datos
function enviarBienvenida(msg) {
  bot.sendMessage(msg.chat.id, `
  ¡Hola!  Soy un bot para ayudarte a registrarte. 

  Para comenzar, necesito que me envíes los siguientes datos:

  Nombre,
  Apellido,
  Teléfono

  Envía la información en un solo mensaje, separando cada dato con un espacio.

  Ejemplo: Juan Pérez 1234567890
  `);
}

// Función para procesar datos del usuario
function procesarDatos(msg) {
  // Obtiene el nombre, apellido y dirección del mensaje
  const nombre = msg.text.split(' ')[0];
  const apellido = msg.text.split(' ')[1];
  const telefono = msg.text.split(' ')[2];

  // Envía un mensaje con los datos recibidos
  bot.sendMessage(msg.chat.id, `Hola ${nombre} ${apellido}.\nTu telefono es: ${telefono}`);
}

// Define la función que se ejecutará cuando el bot reciba un mensaje
bot.on('message', (msg) => {
  // Si el mensaje es "/start", envía la bienvenida y solicita datos
  if (msg.text === '/start') {
    enviarBienvenida(msg);
  } else {
    // Si el mensaje no es "/start", procesa los datos del usuario
    procesarDatos(msg);
  }
});

// Inicia el bot
bot.startPolling();
