const Discord = require('discord.js');

module.exports.run = async (bot, message, args, tools) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '392441246238375936') return message.channels.send('Vous n\'avez pas la permission pour créé un sondage !').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Utilisation: /poll <title>').then(msg => msg.delete({timeout: 10000}));
  
  const embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
    .setFooter('React to vote on Poll!')
    .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`👍`);
      await pollTitle.react(`👎`);
  
    const filter = (reaction) => reaction.emoji.name === '👍';
    const collector = pollTitle.createReactionCollector(filter, { time: 5000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => message.channel.send(`J'ai collecté **${collected.size}** pour`));
  
    const filter1 = (reaction) => reaction.emoji.name === '👎';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 5000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => message.channel.send(`J'ai collecté **${collected.size}** contre `));
};

module.exports.help = {
name: "poll"
}
