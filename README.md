# Telegram-Bot-in-Cloudflare-Worker

### How to Use this Bot

* Fork the Repository by clicking on the link below
> https://github.com/alirezachali/Telegram-Bot-in-Cloudflare-Worker/fork

* Clone Repository
> ```bash
> git clone https://github.com/[GITHUB-USERNAME]/Telegram-Bot-in-Cloudflare-Worker/
> cd Telegram-Bot-in-Cloudflare-Worker

---
### Make Worker in Cloudflare
1. Open Cloudflare Dashboard https://dash.cloudflare.com.
2. On the left side of the dashboard, select the `Workers & Pages` sub-menu from the `Compute` menu.
3. In the page that opens. Click on the button, on the top right to `Create application`.
4. Click on the `Start With Hello Word!` option.
5. In this section, you must enter a desired name for your worker. And then click the `Deploy` button.

### Add BOT_TOKEN in Secret Variable
1. On the page that opens, click on the `Settings` tab, And click on the `+Add` button in the `Variables and secrets` section.
2. Select the `Secret` option in the `type` section. and Enter `BOT_TOKEN` in the `Variable name` field. You must also enter your `Telegram bot token` in the `Value` section. Finally, click on the Deploy button.

### Connecting the worker to the GitHub Repository
1. In the `Settings` tab, refer to the `Build` section.
2. Click on the `Connect` button in the `Git repository` section.
3. 