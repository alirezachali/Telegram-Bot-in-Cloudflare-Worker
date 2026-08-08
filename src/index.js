import { routeUpdate } from "./router.js";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Telegram Bot is running!");
    }

    try {
      const update = await request.json();

      await routeUpdate(update, env);

      return new Response("OK");
    } catch (error) {
      console.error("Worker error:", error);

      return new Response("Internal Server Error", {
        status: 500,
      });
    }
  },
};