module.exports.run = async (bot, msg, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
      const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];
      const embed = new Discord.RichEmbed()
          .setColor(hexcols[~~(Math.random() * hexcols.length)])
          .setAuthor(msg.guild.name, msg.guild.iconURL)
      .setThumbnail(msg.guild.iconURL)
      .addField('Membres', `**${msg.guild.memberCount}**`, true)
      .addBlankField(true)
      .addField('Humains', `**${msg.guild.members.filter(member => !member.user.bot).size}**`, true)
      .addField('Bots', `**${msg.guild.members.filter(member => member.user.bot).size}**`, true)
      .addField('Status', `**${msg.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${msg.guild.members.filter(i => i.presence.status === 'idle').size}** Absent\n**${msg.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${msg.guild.members.filter(off => off.presence.status === 'offline').size}** Hors-Ligne\n**${msg.guild.members.filter(s => s.presence.status === 'streaming').size}** En live`)
    msg.channel.send(embed);
  };

module.exports.help = {
    name: "membercount"
  }
  
