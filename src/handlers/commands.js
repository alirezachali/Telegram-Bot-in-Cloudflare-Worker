import { sendMessage } from "../telegram.js";

export async function handleCommand(message, env) {
  const chatId = message.chat.id;
  const text = message.text || "";

  if (text === "/start") {
    await sendMessage(
      env,
      chatId,
      "سلام 👋\nبه بات خوش اومدی!"
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