const { commandMessage , User} = require('./build/util.js');
const { Telegraf } = require('telegraf');

const token = '6645546714:AAHosE0btx0a8N8YfaGDr-mEUQ1ymQkDuDs'; 
const bot = new Telegraf(token);
let user;

bot.start( async (ctx) => {
  user = new User(ctx.from.id,ctx.from.username,ctx.from.is_bot);
  if(!user.isBot) {
    await ctx.reply(`Hello, ${user.userName}! Welcome to my bot!`);
    await ctx.reply("/help - List of commands");
    await ctx.reply("/weather - Get the weather forecast");
    await ctx.reply("/news - Get the latest news headlines");
  }else{
    console.log(commandMessage.value);
  }
  
});

bot.launch();