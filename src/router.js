import { handleCommand } from "./handlers/commands.js";
import { handleMessage } from "./handlers/messages.js";
import { handleCallbackQuery } from "./handlers/callbacks.js";

export async function routeUpdate(update, env) {
  // Callback Query
  if (update.callback_query) {
    await handleCallbackQuery(update.callback_query, env);
    return;
  }

  // Message
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