const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1381361102625177762/1_ohcCMpZjNzaRLhNd8Aa-Fi7UedtNGg8VmftQD9vgzEvg73JJvUFyY9oa-LxIi6fnxm";

function hexToDiscordColor(hex: string) {
  hex = hex.replace(" #", "");
  return parseInt(hex, 16);
}

const FRONTEND_COLOR = hexToDiscordColor("rgb(167, 54, 199)");

const COMMIT_MESSAGE = process.env.VERCEL_GIT_COMMIT_MESSAGE;

const message = {
  content: "",
  tts: false,
  embeds: [
    {
      id: 306790299,
      title: "🚀 New Deployment to /jamflow-landing 🌪️",
      timestamp: new Date().toISOString(),
      color: FRONTEND_COLOR,
      footer: {
        text: COMMIT_MESSAGE
      }
    }
  ],
  components: [],
  actions: {},
  flags: 0
};
fetch(WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(message),
}).catch((err) => {
  console.error("Failed to send discord webhook", err);
});
