import { sendMessage } from "../telegram.js";

export async function handleMessage(message, env) {
  const chatId = message.chat.id;
  const text = message.text || "";


    if (text === "سلام") {
        await sendMessage(env, chatId, "سلام رفیق 😎");
        return;
    };


    if (!text) {
        return;
    }
    await sendMessage(env, chatId, `پیامت رو دریافت کردم:\n${text}`);

}