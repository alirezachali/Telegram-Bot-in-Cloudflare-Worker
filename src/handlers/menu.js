import { editMessageText } from "../telegram.js";

export async function showMainMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "🏠 منوی اصلی\n\nیکی از گزینه‌ها را انتخاب کن:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "👤 حساب کاربری",
              callback_data: "menu_profile",
            },
          ],
          [
            {
              text: "⚙️ تنظیمات",
              callback_data: "menu_settings",
            },
          ],
          [
            {
              text: "📚 راهنما",
              callback_data: "menu_help",
            },
          ],
        ],
      },
    }
  );
}

export async function showSettingsMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "⚙️ تنظیمات\n\nیک گزینه را انتخاب کن:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🔔 اعلان‌ها",
              callback_data: "settings_notifications",
            },
          ],
          [
            {
              text: "🌐 زبان",
              callback_data: "settings_language",
            },
          ],
          [
            {
              text: "◀️ بازگشت",
              callback_data: "menu_main",
            },
          ],
        ],
      },
    }
  );
}