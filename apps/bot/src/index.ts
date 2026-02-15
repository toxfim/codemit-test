import "dotenv/config";
import { Bot } from "grammy";
import { hello, help, start, ping } from "@codemit/shared";
import { botToken } from "./configs/env";

const bot = new Bot(botToken as string);

bot.api.setMyCommands([
  { command: "/help", description: "Helping" },
  { command: "/start", description: "Starting" },
  { command: "/ping", description: "Pinging" },
]);

bot.command("start", async (ctx) => {
  await ctx.reply(hello(ctx.from?.first_name ?? "there"));
});

bot.command("ping", (ctx) => ctx.reply(ping()));

bot.command("help", (ctx) => ctx.reply(help()));

bot.start();
console.log("Bot started 🤖");
