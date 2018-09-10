module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const ms = require("ms");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas accès à cette commande.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Impossible de trouver l'utilisateur");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("L'utilisateur que vous essayez de mute est un mod/admin.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
            message.channel.send("Impossible de créé le rôle ``Muted``. Je n'ai pas la permission ``MANAGE_ROLES``")
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Spécifiez un temps. Note: 1 minute = 1m, 1 heure = 1h et 1 jour = 1d");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> à été mute pendant ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> à été unmute !`);
    }, ms(mutetime));

}

module.exports.help = {
    name: "mute",
}
