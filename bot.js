const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "/"

bot.on("message", async message => {

    if (message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    // This is the best way to define args. Trust me.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // The list of if/else is replaced with those simple 2 lines:
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
       let o = new Discord.RichEmbed()
       .setTitle("Erreur")
       .setColor(0x36393e)
       .setDescription("La commande n'existe pas.")
       .setTimestamp()
       message.channel.send(o)
  
    //console.log(err)
    }

  });

bot.on('ready', () => {
    console.log("▬▬▬▬▬▬▬▬▬▬\n Bot connecté à Discord \n▬▬▬▬▬▬▬▬▬▬")
    bot.user.setActivity(" "+prefix+"help | Bot privé | Créé par Panda.exe")
})
bot.login(process.env.TOKEN)
