const Discord = require('discord.js')
module.exports.run = (client, message, args, tools) => {
  if(!args[0]) return message.channel.send('Utilisation : **n!reverse (texte à reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) return message.channel.send("Vous ne pouvez pas reverse des caractères, des nombres ou encore des symboles.")
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor('RANDOM')
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}

module.exports.help = {
name: "reverse"
}