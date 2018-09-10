const request = require('request');
const Discord = require('discord.js')
module.exports.run = (client, message, args1) => {
const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/
request('https://www.viedemerde.fr/aleatoire', (error, response, body) => {
    if (error) {
        return console.error(error);
    }
    let vdm = regex.exec(body);
    const embed = new Discord.RichEmbed()
    .setDescription(vdm[1])
    .setColor('RANDOM')
    message.channel.send(embed)
})};

module.exports.help = {
    name: "vdm"
}