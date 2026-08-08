import { sendMessage } from "../telegram.js";

export async function handleCommand(message, env) {
  const chatId = message.chat.id;
  const text = message.text || "";

  if (text === "/start") {
    await sendMessage(
      env,
      chatId,
      "Hello my friend 👋\n Welcome to my personal bot!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🏠 Open Menu",
                callback_data: "menu_main",
              },
            ],
          ],
        },
      }
    );

    return true;
  }

  if (text === "/help") {
    await sendMessage(
      env,
      chatId,
      "📚 Help\n\n/start - Start bot\n/help - Show all command"
    );

    return true;
  }

  return false;
}