const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, guild) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.channel.sendMessage(`Utilisation : &removerole <@utilisateur> <role>\n Note : Ne mentionnez pas le rôle.`);
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifiez un role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Impossible de trouver le rôle.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Cet utilisateur n'a pas le role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`[*${guild.name}*] Vous avez perdu le rôle **${gRole.name}**.`)
  }catch(e){
    message.channel.send(`Le role ${gRolname} à été enlevé de <@${rMember.id}>.`)
  }
}

module.exports.help = {
  name: "removerole"
}
