const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
	let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
	let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
    let serverembed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField('\n ❯ Nom :', message.guild.name, true)
        .addField('\n ❯ ID :', message.guild.id, true)
        .addField('\n ❯ Membres :', message.guild.memberCount, true)
        .addField('\n ❯ Région :', message.guild.region, true)
        .addField('\n ❯ Niveau de vérification :', message.guild.verificationLevel, true)
        .addField('\n ❯ Salon AFK', message.guild.afkChannel !== null ? message.guild.afkChannel : 'Aucun', true)
        .addField('\n ❯ Propriétaire :', message.guild.owner, true)
		.addField('\n ❯ Rôles :', message.guild.roles.size, true)
		.addField("\n ❯ Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
		.addField("\n ❯ Bots", message.guild.members.filter(m => m.user.bot).size, true)
		.addField("\n ❯ En ligne", online.size, true)
		.setFooter("❯ Date de création • "+day+"/"+month+"/"+year+"")
		
		
		

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
