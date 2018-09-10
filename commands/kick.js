const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Utilisation: !kick <@utilisateur> <raison>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas accès à cette commande !")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Utilisateur expulsé", `${kUser} | ID : ${kUser.id}`)
    .addField("Expulsé par", `<@${message.author.id}> | ID : ${message.author.id}`)
    .addField("Date", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Merci de créé un salon nommé ``logs`` pour pouvoir kick quelqu'un.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
