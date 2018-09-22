const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Entrez une location**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Météo pour ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Fuseau horaire',`${location.timezone} UTC`, true)
          .addField('Type de degrée',location.degreetype, true)
          .addField('Temperature',`${current.temperature} degrées`, true)
          .addField('Sensations', `${current.feelslike} degrées`, true)
          .addField('Vents',current.winddisplay, true)
          .addField('Humidité', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

module.exports.help = {
 name: "meteo" 
}
