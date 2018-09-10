const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help") return
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) bReason = "No reason given."
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField("Banned user", `${bUser} | ID : ${bUser.id}`)
    .addField("Banned by", `<@${message.author.id}> | ID : ${message.author.id}`)
    .addField("Date", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Please create a text channel named ``logs`` to ban someone");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
