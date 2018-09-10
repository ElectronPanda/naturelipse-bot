module.exports.run = async (bot, message, args, guild) => {
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2]
    const Discord = require("discord.js");
	message.delete()

// Changelog : 
// Economy features has been disabled.

var help_embed = new Discord.RichEmbed()
        .setTitle("Help Menu")
        .setColor(hexcols[~~(Math.random() * hexcols.length)])
		.addField('<:blue_blub:469233335978164244>', 'Affiche les commandes utilitaires')
		.addField('<:black_hammer:469234367454117918>', 'Afficher les commandes de modération')
		//.addField('<:money_bag:469505446550437926>', 'Display economy/roleplaying commands')
		.addField('<:fun:473592079898116106>', 'Afficher les commandes fun')
        .setFooter("Cliquez sur les émojis pour voir les commandes par catégorie")
    var helpone_embed = new Discord.RichEmbed()
        .setTitle("Utility")
        .setColor(hexcols[~~(Math.random() * hexcols.length)])
		.addField('botinfo', 'Voir les statistiques du bot')
		.addField('membercount', 'Voir les statistiques des membres sur le serveur actuel')
		.addField('serverinfo (si)', 'Permet d\'avoir les informations du serveur courant')
		.addField('ping', 'Voir le ping actuel du bot')
		.addField("invitestats", "Voir toutes les personnes qui ont généré un lien d'invitation avec le nombre d'utilisations. Le bot nécessite la permission ``Gérer le serveur``.")
		.addField("meteo", "Permet de savoir la météo sur une location. Exemple : n!meteo Paris")
    var helptwo_embed = new Discord.RichEmbed()
        .setTitle("Mod")
        .setColor(hexcols[~~(Math.random() * hexcols.length)])
		.addField('addrole', 'Ajouter un rôle à quelqu\'un. Le bot et l\'utilisateur ont besoin de la permission ``Gérer les rôles``.')
		.addField('removerole', 'Enlever un rôle à quelqu\'un. Le bot et l\'utilisateur ont besoin de la permission ``Gérer les rôles``.')
		.addField('ban', 'Balancez le marteau de bannissement sur quelqu\'un. Le bot et l\'utilisateur ont besoin de la permission ``Bannir des membres``.')
		.addField('kick', 'Balancez le marteau d\'expulsion sur quelqu\'un. Le bot et l\'utilisateur ont besoin de la permission ``Expulser des membres`` ".')
		.addField('clear', 'Nettoyez votre tchat. Le bot et l\'utilisateur ont besoin de la permission ``Gérer les messages``.')
		.addField('mute', 'Rendre muet quelqu\'un. Utilisation : n!mute <@user> <time>. Temps syntaxique : secondes = `s` minutes = `m` heures = `h` et jours = `d`. Exemple : n!mute <@392441246238375936> 2d. Le bot et l\'utilisateur ont besoin de la permission ``Gérer les messages``.')

		 
	/*var helpfour_embed = new Discord.RichEmbed()
	//	.setTitle("Economy")
	//	.setColor(hexcols[~~(Math.random() * hexcols.length)])
	//	.addField('level', 'Show your (only) global level & XP')
	//	.addField('coins', 'Show your coins')
	//	.addField('pay', 'Pay someone with coins')
		.addField('daily', 'Get your daily credits')
	*/	
	var helpfive_embed = new Discord.RichEmbed()
		.setTitle("Fun")
		.setColor(hexcols[~~(Math.random() * hexcols.length)])
		.addField("reverse", "Inversez votre message")
		.addField("hug", "Faites un calin à quelqu'un")
		.addField("[New] vdm", "Affiche une VDM aléatoire")
		
    const helpmessage = await message.channel.send(help_embed);
    await helpmessage.react(bot.emojis.get("469233335978164244"));
    await helpmessage.react(bot.emojis.get("469234367454117918"));
	//await helpmessage.react(bot.emojis.get("469505446550437926"));
	await helpmessage.react(bot.emojis.get("473592079898116106"));
	await helpmessage.react(bot.emojis.get("469872866167488522"));


    const help = helpmessage.createReactionCollector((reaction, user) => user.id === message.author.id);
    help.on('collect', async(reaction) => {
        if(reaction.emoji.id === "469233335978164244") {
            helpmessage.edit(helpone_embed);
        }
        if(reaction.emoji.id === "469234367454117918") {
            helpmessage.edit(helptwo_embed);
        }
		/*if(reaction.emoji.id === "469505446550437926") {
			helpmessage.edit(helpfour_embed)
		}
		*/if(reaction.emoji.id === "473592079898116106") {
			helpmessage.edit(helpfive_embed)
		}
		if(reaction.emoji.id === "469872866167488522") {
        helpmessage.delete()
		}
        await reaction.remove(message.author.id);
    })
	}
    
module.exports.help = {
    name: "help"
  }

  //hexcols[~~(Math.random() * hexcols.length)]
