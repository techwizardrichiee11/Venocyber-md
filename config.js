//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "254740479599";
global.owner = process.env.OWNER_NUMBER || "254707213581";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFvZmxWYW9mWUhTUmZQTE40RW84eDFNUzNHd2creXM3UXNQTmEvK1UwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2FRSmpjdzk0YVBrdCtnbWpYQUdQaFhYeXhmeWJqYXIvVUxod252eWdHUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QitxUi92LzMveGNSbHNwSmtWZUI4VFJVWnVNRzBGWTRIMVVwd2oxRzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqek9ReUpNVzN6MmpWR1JGbXN2c1RlcFRKUitsa1pFMEVoRTdzb3VzR1JvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFZE81WnNUMkdJcjNVclJCRTNPK3dKbXdWSEtRa00raUYvdUJiWWU2RkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtU0lMcGR2ckZCd00zdjRMbjE0cWdtMW1tNGFOM1dGcklXZmU0Qkt4RVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME45YWsybUtJZnpGdFV6bTA4VnRqaG9DdzZQT0p3eXdvY2plamtNbE5GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1Vkck1CUHYyZ0d6cHNjaWJxWEFUanZsdEFpYkM1UkN5amkycDh6cHZ5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlidnIyaGU0enhTMjlHVG5HL2QrRmN6aU45UXBIQ3lSTFhpQTdLTXpKWEx2dkFVMnhRdWpBUk5pWDVrVUtwZzlnang2STU0cjlTL2UzZzl1eDV1eGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJIQlVvNlBLRC95WWZCMHEwcld3dTlzeE1BK282ckN5aFBKYzJxMW4yQlg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHVUlaajlMN1JhYVZlT3NnZV9CNDN3IiwicGhvbmVJZCI6IjM4ODdiNzA5LWQwODgtNDA1OC05OTE3LWMxYzZlMjVmY2JmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRzUwSHptQnZMT2oyWTFCM2F0N0tqWitMNGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibytMbmZndlV1NFZDL2gyMW1MUm1aUHNmUExRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko0RTZRTDRKIiwibWUiOnsiaWQiOiIyNTQ3MDcyMTM1ODE6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2YvfCdmaTwnZmj8J2Zo/CdmZ7wnZmaIPCdmYbwnZmAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUEQyWHdRMWE2cnRBWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHN0QwVklyTVRnUlU4bURUMDM5bVl1QTE3R0ZNQXRuSjVGZXgrY1Nham5nPSIsImFjY291bnRTaWduYXR1cmUiOiJoM2hBYnk1bE1sVDc4QnZOcW5Bd2MyVkNYeGhvd3VIaFRQWWJNdDZkU0d2cUVyc2ExbU9vRjBGVHZVVlFwdFgxNkJhUU9UaTlRdldRcUZncDFLTnFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUZRTU1jVExCTGlFN1dBdHNsd1pCKzUyLy9XbnI0bW5sblJOSXYxVnh6UVVZSkJTYVFKamZpZHl1ODVjcnhSM3dLb2F1V0luWGNmWnVkbHZTa21naHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDcyMTM1ODE6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnV3OUZTS3pFNEVWUEpnMDlOL1ptTGdOZXhoVEFMWnllUlhzZm5FbW81NCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM3NTEzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLcUsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "B",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝘽𝙊𝙉𝙉𝙄𝙀 𝙏𝙀𝘾𝙃",
  ownername: process.env.OWNER_NAME || "𝘽𝙊𝙉𝙉𝙄𝙀 𝙏𝙀𝘾𝙃𝙒𝙄𝙕𝘼𝙍𝘿",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
