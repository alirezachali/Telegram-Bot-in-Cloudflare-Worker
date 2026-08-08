import {
  sendMessage,
  answerCallbackQuery,
} from "../telegram.js";

import {
  showMainMenu,
  showSettingsMenu,
} from "./menu.js";

export async function handleCallbackQuery(callbackQuery, env) {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;

  if (data === "menu_main") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showMainMenu(env, chatId, messageId);
    return;
  }

  if (data === "menu_settings") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showSettingsMenu(env, chatId, messageId);
    return;
  }

  if (data === "menu_profile") {
    await answerCallbackQuery(env, callbackQuery.id);

    await sendMessage(
      env,
      chatId,
      "👤 بخش حساب کاربری\n\nفعلاً در حال توسعه است."
    );

    return;
  }

  if (data === "menu_help") {
    await answerCallbackQuery(env, callbackQuery.id);

    await sendMessage(
      env,
      chatId,
      "📚 راهنما\n\nاینجا راهنمای بات قرار می‌گیرد."
    );

    return;
  }

  if (data === "settings_notifications") {
    await answerCallbackQuery(env, callbackQuery.id, {
      text: "🔔 بخش اعلان‌ها هنوز ساخته نشده",
      show_alert: true,
    });

    return;
  }

  if (data === "settings_language") {
    await answerCallbackQuery(env, callbackQuery.id, {
      text: "🌐 بخش زبان هنوز ساخته نشده",
      show_alert: true,
    });

    return;
  }

  await answerCallbackQuery(env, callbackQuery.id, {
    text: "گزینه ناشناخته است.",
  });
}