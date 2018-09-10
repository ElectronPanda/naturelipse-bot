const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  // addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.channel.sendMessage(`${message.author.username} > !addrole <user> <role>`);
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Please provide a role ( by name )");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Couldn't find that role.");

  if (rMember.roles.has(gRole.id)) return message.reply("This user has already this role.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`[*${message.guild.name}*] You have received the role **${gRole.name}**.`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`The role ``${gRole.name}`` has been gived to <@${rMember.id}>.`)
  }
  console.log("[LOGS] La commande addrole à été utilisé dans le serveur "+message.guild.name+".")
}

module.exports.help = {
  name: "addrole"
}
