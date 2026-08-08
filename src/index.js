export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Telegram Bot is running!");
    }

    try {
      const update = await request.json();

      const message = update.message;

      if (!message) {
        return new Response("OK");
      }

      const chatId = message.chat.id;
      const text = message.text || "";

      const response = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `پیامت رو دریافت کردم:\n${text}`,
          }),
        }
      );

      if (!response.ok) {
        console.error("Telegram API error:", await response.text());
      }

      return new Response("OK");
    } catch (error) {
      console.error("Worker error:", error);

      return new Response("Internal Server Error", {
        status: 500,
      });
    }
  },
};