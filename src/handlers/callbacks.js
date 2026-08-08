import {
  sendMessage,
  answerCallbackQuery,
} from "../telegram.js";

import {
  showMainMenu,
  showContactsMenu,
  showAboutsMenu,
  showProjectsMenu
} from "./menu.js";

export async function handleCallbackQuery(callbackQuery, env) {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;

  // Main menu
  if (data === "menu_main") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showMainMenu(env, chatId, messageId);
    return;
  }
  // Contact to me menu
  if (data === "menu_contact") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showContactsMenu(env, chatId, messageId);
    return;
  }

  // About me menu
  if (data === "menu_about") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showAboutsMenu(env, chatId, messageId);
    return;
  }

  // My projects menu
  if (data === "menu_project") {
    await answerCallbackQuery(env, callbackQuery.id);
    await showProjectsMenu(env, chatId, messageId);
    return;
  }



  // Send Email to me
  if (data === "send_email_to_me") {
    await answerCallbackQuery(env, callbackQuery.id, {
      text: "📧 Sending Email . . .",
      show_alert: true,
    });

    return;
  }

  // Send Massege in telegram
  if (data === "send_massege_in_telegram") {
    await answerCallbackQuery(env, callbackQuery.id, {
      text: "📲 Sending Massege . . .",
      show_alert: true,
    });

    return;
  }

  await answerCallbackQuery(env, callbackQuery.id, {
    text: "گزینه ناشناخته است.",
  });
}