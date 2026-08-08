import { sendMessage } from "../telegram.js";

export async function handleCommand(message, env) {
  const chatId = message.chat.id;
  const text = message.text || "";

  if (text === "/start") {
    await sendMessage(
      env,
      chatId,
      "سلام رفیق 👋\nیکی از گزینه‌ها رو انتخاب کن:",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "👋 سلام",
                callback_data: "hello",
              },
              {
                text: "📚 راهنما",
                callback_data: "help",
              },
            ],
            [
              {
                text: "ℹ️ درباره بات",
                callback_data: "about",
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
      "راهنما:\n\n/start - شروع\n/help - راهنما"
    );

    return true;
  }

  return false;
}