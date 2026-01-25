const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "helpall",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐒𝐀𝐇𝐔",
 description: "Displays all available commands in one page",
 commandCategory: "system",
 usages: "[No args]",
 cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
 const { commands } = global.client;
 const { threadID, messageID } = event;

 const allCommands = [];

 for (let [name] of commands) {
 if (name && name.trim() !== "") {
 allCommands.push(name.trim());
 }
 }

 allCommands.sort();

 const finalText = `╔═══❖ 🌟 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓 🌟 ❖═══╗
${allCommands.map(cmd => `║ ➔ ${cmd}`).join("\n")}
╠═════🔰 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 🔰═════╣
║ 🤖 𝐁𝐨𝐭: ─꯭─⃝‌‌𝐌 𝐄 𝐇 𝐄 𝐑 𝐀 𝐉 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓
║ 👑 𝐎𝐰𝐧𝐞𝐫: 𝐌 𝐄 𝐇 𝐄 𝐑 𝐀 𝐉˖ ᡣ𐭩 ⊹ ࣪  ౨ৎ˚₊
║ 📦 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: ${allCommands.length} 
╚═══════════════════════╝`;

 
 const backgrounds = [
 "https://i.postimg.cc/RZRvgXW3/Express-collage.png",
 "https://i.postimg.cc/JzBBNFcw/612621109-896418862914522-7066807854355757624-n.jpg",
 "https://i.postimg.cc/bwDQbCLm/a601ea9bfc03a72b93f2007ae02d7aa1.jpg",
 "https://i.postimg.cc/JzBBNFcw/612621109-896418862914522-7066807854355757624-n.jpg"
 ];
 const selectedBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
 const imgPath = __dirname + "/cache/helpallbg.jpg";

 const callback = () =>
 api.sendMessage({ body: finalText, attachment: fs.createReadStream(imgPath) }, threadID, () => fs.unlinkSync(imgPath), messageID);

 request(encodeURI(selectedBg))
 .pipe(fs.createWriteStream(imgPath))
 .on("close", () => callback());
};
