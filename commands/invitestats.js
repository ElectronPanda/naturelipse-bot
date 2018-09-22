const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Désolé, je n\'ai pas la permission suffisante pour voir les invitations.');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`**${invites.inviter.username}** > **${invites.uses}**`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**TABLEAU DE BORD | INVITES**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `${possibleinvites.join(' \n ')}`)
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "invitestats"
}
