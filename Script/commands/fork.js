module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি তৈরি করতে চান, এখনই বটের মালিককে ডাক দিন, তিনি সাহায্য করবেন। " +
        "ফেসবুক লিংকে দেওয়া বটের মালিককে মেসেজ দিলে ইনশাআল্লাহ পেয়ে যাবেন। " +
        "তাহলে আর দেরি না করে এখনি চলে যান আমাদের ইউটিউব চ্যানেলে।\n\n" +
        "➤  Facebook Link: https://www.facebook.com/junghoseog.2025\n\n" +
        "🔗 GitHub Fork Link: https://github.com/Meheraj-1-mo/MEHERAJ-POCA-beshi.git";

    return api.sendMessage(message, event.threadID, event.messageID);
};
