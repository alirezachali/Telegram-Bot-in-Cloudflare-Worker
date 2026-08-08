import { handleCommand } from "./handlers/commands.js";
import { handleMessage } from "./handlers/messages.js";

export async function routeUpdate(update, env) {
  if (update.message) {
    const message = update.message;
    const text = message.text || "";

    if (text.startsWith("/")) {
      const handled = await handleCommand(message, env);

      if (handled) {
        return;
      }
    }

    await handleMessage(message, env);
  }
}