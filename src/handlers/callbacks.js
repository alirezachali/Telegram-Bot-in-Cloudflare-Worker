import { sendMessage, telegramRequest } from "../telegram.js";

export async function handleCallbackQuery(callbackQuery, env) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // به Telegram اعلام می‌کنیم که روی دکمه کلیک شده
  await telegramRequest(env, "answerCallbackQuery", {
    callback_query_id: callbackQuery.id,
  });

  if (data === "hello") {
    await sendMessage(env, chatId, "سلام رفیق 😎");
    return;
  }

  if (data === "help") {
    await sendMessage(
      env,
      chatId,
      "اینجا بخش راهنمای باته 📚"
    );
    return;
  }

  if (data === "about") {
    await sendMessage(
      env,
      chatId,
      "این بات با Cloudflare Workers ساخته شده 🚀"
    );
    return;
  }
}