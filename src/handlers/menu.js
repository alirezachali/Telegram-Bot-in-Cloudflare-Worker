import { editMessageText } from "../telegram.js";

export async function showMainMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "🏠 Main Menu\n",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "👤 About me",
              callback_data: "menu_about",
            },
          ],
          [
            {
              text: "📞 Contact to me",
              callback_data: "menu_contact",
            },
          ],
          [
            {
              text: "🧑‍💻 My Projects",
              callback_data: "menu_project",
            },
          ],
        ],
      },
    }
  );
}



export async function showAboutsMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "👤 About me\n",
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




export async function showContactsMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "📞 Contact to me\n",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📧 Sent Email to me",
              callback_data: "send_email_to_me",
            },
          ],
          [
            {
              text: "📲 Send Massege in Telegram",
              callback_data: "send_massege_in_telegram",
            },
          ],
          [
            {
              text: "📲 ",
              callback_data: "",
            },
          ],
          [
            {
              text: "📲 ",
              callback_data: "",
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



export async function showProjectsMenu(env, chatId, messageId) {
  await editMessageText(
    env,
    chatId,
    messageId,
    "🧑‍💻 My Projects\n",
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