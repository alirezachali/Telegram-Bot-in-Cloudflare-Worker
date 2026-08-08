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