const { Telegraf } = require('telegraf');

const token = '6596788820:AAHG95BPmrbEkaeU7SAO_auKHaYIEpW4_T0'; 

const bot = new Telegraf(token);

const messageLimits = new Map(); // Лічильник кількості повідомлень від користувачів
const messageLimit = 3; // Максимальна кількість повідомлень на секунду
const timeout = 1000; // Тайм-аут в мілісекундах (1000 мс = 1 секунда)

bot.on('text', async (ctx) => {
  const chatId = ctx.chat.id;
  const userId = ctx.from.id;

  // Перевірка, чи є користувач в мапі лічильника
  if (!messageLimits.has(userId)) {
    messageLimits.set(userId, 0);
  }

  // Отримання поточного лічильника для користувача
  const messageCount = messageLimits.get(userId);

  // Перевірка, чи не перевищена максимальна кількість повідомлень
  if (messageCount >= messageLimit) {
    ctx.reply('Ви надіслали занадто багато повідомлень. Зачекайте трохи.');
    return;
  }

  // Збільшення лічильника для користувача
  messageLimits.set(userId, messageCount + 1);

  // Очікування тайм-ауту перед зняттям лічильника
  setTimeout(() => {
    messageLimits.set(userId, messageCount - 1);
  }, timeout);

  // Обробка повідомлення
  ctx.reply('Ваше повідомлення було оброблено.');
});

bot.launch();
