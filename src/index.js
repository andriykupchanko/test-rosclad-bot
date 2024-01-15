const { Telegraf, Markup, Extra } = require("telegraf");
const { replaceUnderscore } = require("./build/common.js");
const {
  commandMessage,
  timeOut,
  messageLimit,
  buttonGroup,
  User
} = require("./build/util.js");

const token = "6645546714:AAHosE0btx0a8N8YfaGDr-mEUQ1ymQkDuDs";
const bot = new Telegraf(token);
const messageLimits = new Map();
let user = new User();

bot.start(async ctx => {
  user.isBot = ctx.from.is_bot;
  user.id = ctx.from.id;
  user.userName = ctx.from.username;

  if (!ctx.from.is_bot) {
    if (user.userLaguage === "en") {
      await ctx.reply(
        `Hello, ${replaceUnderscore(user.userName)}\n` +
          `${commandMessage.startMsg.startWelcomeMsgEn}\n\n` +
          `${commandMessage.startMsg.startListCommandMsgEn}`
      );
    } else {
      await ctx.reply(
        `Привіт, ${replaceUnderscore(user.userName)}\n` +
          `${commandMessage.startMsg.startWelcomeMsgUk}\n\n` +
          `${commandMessage.startMsg.startListCommandMsgUk}`
      );
    }
  } else {
  }
});

bot.command("help", async ctx => {
  user.userLaguage = ctx.from.language_code;

  if (user.userLaguage === "en") {
    await ctx.reply(commandMessage.helpMsg.helpMainMsgEn);
  } else if (user.userLaguage === "uk") {
    await ctx.reply(commandMessage.helpMsg.helpMainMsgUk);
  }
});

bot.command("group", ctx => {
  const buttons = buttonGroup.buttons;
  const rows = [];

  for (let i = 0; i < buttons.length; i++) {
    if (i % 3 === 0) {
      rows.push([]);
    }

    const button = {
      text: buttons[i].group,
      callback_data: buttons[i].callbackFunction
    };

    rows[rows.length - 1].push(button);
  }

  ctx.reply("Select a group:", {
    reply_markup: {
      inline_keyboard: rows.map(row => [...row])
    }
  });
  console.log(rows);
});
bot.action("output", ctx => {
  // Отримати текст кнопки з callback_data
  const buttonText = ctx.callbackQuery.data;

  // Вивести ім'я кнопки в консоль
  console.log(`Натиснута кнопка: ${buttonText}`);

  // Ваш код тут

  // Видалити клавіатуру після натискання
  ctx.deleteMessage();
});
bot.on("text", async ctx => {
  // Перевірка, чи є користувач в мапі лічильника
  if (!messageLimits.has(user.id)) {
    messageLimits.set(user.id, 0);
  }

  // Отримання поточного лічильника для користувача
  const messageCount = messageLimits.get(user.id);

  // Перевірка, чи не перевищена максимальна кількість повідомлень
  if (messageCount >= messageLimit) {
    ctx.reply("Ви надіслали занадто багато повідомлень. Зачекайте трох.");
    return;
  }

  // Збільшення лічильника для к
  messageLimits.set(user.id, messageCount + 1);

  // Очікування тайм-ауту перед зняттям лічильника
  setTimeout(() => {
    messageLimits.set(user.id, messageCount - 1);
  }, timeOut);
});

bot.launch();
