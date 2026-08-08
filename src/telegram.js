export async function telegramRequest(env, method, data = {}) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!result.ok) {
    console.error("Telegram API error:", result);
  }

  return result;
}

export async function sendMessage(env, chatId, text, options = {}) {
  return telegramRequest(env, "sendMessage", {
    chat_id: chatId,
    text,
    ...options,
  });
}

export async function editMessageText(
  env,
  chatId,
  messageId,
  text,
  options = {}
) {
  return telegramRequest(env, "editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text,
    ...options,
  });
}

export async function deleteMessage(env, chatId, messageId) {
  return telegramRequest(env, "deleteMessage", {
    chat_id: chatId,
    message_id: messageId,
  });
}

export async function answerCallbackQuery(
  env,
  callbackQueryId,
  options = {}
) {
  return telegramRequest(env, "answerCallbackQuery", {
    callback_query_id: callbackQueryId,
    ...options,
  });
}