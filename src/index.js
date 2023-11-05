const { Telegraf } = require('telegraf');

const token = '6645546714:AAHosE0btx0a8N8YfaGDr-mEUQ1ymQkDuDs'; 

const bot = new Telegraf(token);
bot.start( async (ctx) => {
  // Get the username of the current user
  const username = cx.from.username;

  // Welcome the user
  await ctx.reply(`Hello, ${username}! Welcome to my bot!`);

  // Send the user a list of commands
  await ctx.reply("/help - List of commands");
  await ctx.reply("/weather - Get the weather forecast");
  await ctx.reply("/news - Get the latest news headlines");
});
bot.command("week", async (ctx) => {

  await ctx.reply("/help - List of commands");
 
});
bot.command("stop", async (ctx) => {
    await ctx.reply("Goodbye!");
});

bot.command("strawberry", async (ctx) => {
      await ctx.reply('https://t.me/pandahikkan');
});
bot.launch();
