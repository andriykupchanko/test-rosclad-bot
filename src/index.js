const { commandMessage,timeOut,messageLimit,User} = require('./build/util.js');
const { Telegraf } = require('telegraf');
const { replaceUnderscore } = require('./build/common.js');

const token = '6645546714:AAHosE0btx0a8N8YfaGDr-mEUQ1ymQkDuDs'; 
const bot = new Telegraf(token);
const messageLimits = new Map(); 
let user;

bot.start( async (ctx) => {
  if(!ctx.from.is_bot) {
      user = new User(ctx.from.id,ctx.from.username,ctx.from.is_bot,ctx.from.language_code);
      await ctx.reply(`Hello, ${replaceUnderscore(user.userName)}!\nSchedule of the Chernivtsi National University`);
  }else{

  }
});

bot.command ('help',async (ctx)=>{

  let languageCode = ctx.from.language_code;

  if(languageCode ==='en'){
    await ctx.reply(commandMessage.helpMsg.helpMainMsgEn);
  }else if(languageCode ==='uk'){
      await ctx.reply(commandMessage.helpMsg.helpMainMsgUk);
  }
});

 bot.on('text', async (ctx) => {
  const userId = ctx.from.id;

  // Перевірка, чи є користувач в мапі лічильника
  if (!messageLimits.has(userId)) {
    messageLimits.set(userId, 0);
  }

  // Отримання поточного лічильника для користувача
  const messageCount = messageLimits.get(userId);

 // Перевірка, чи не перевищена максимальна кількість повідомлень
  if (messageCount >= messageLimit) {
    ctx.reply('Ви надіслали занадто багато повідомлень. Зачекайте трох.');
    return;
  }

  // Збільшення лічильника для к
  messageLimits.set(userId, messageCount + 1);

  // Очікування тайм-ауту перед зняттям лічильника
  setTimeout(() => {
    messageLimits.set(userId, messageCount - 1);
  }, timeOut);

});

bot.launch();