const Discord = require("discord.js"); 
// Defining Discord 
module.exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send("<a:loading:474146780779511818>").then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
	let curlat = {}
	let curapi = {}
	
	if(diff < 30) curlat = "Très bien"
	if(diff > 100) curlat = "Bien"
	if(diff > 300) curlat = "Médiocre"
	if(diff > 500) curlat = "Laggant"
	if(diff > 1000) curlat = "Mauvais"
	if(diff > 1500) curlat = "Très mauvais"
	
	
	if(API < 30) curapi = "Très bien"
	if(API > 100) curapi = "Bien"
	if(API > 300) curapi = "Médiocre"
	if(API > 500) curapi = "Laggant"
	if(API > 1000) curapi = "Mauvais"
	if(API > 1500) curapi = "Très mauvais"
	
        let embed = new Discord.RichEmbed()
		.setTitle("<a:connexion:488054102282993664> Pong!")
        .setColor('RANDOM')
        .addField("📶 Hébergeur ("+curlat+") ", `${diff}ms`, true)
        .addField("💻 API Discord ("+curapi+")", `${API}ms`, true)
        message.edit(embed);
      
    });

} 


module.exports.help = {

name: "ping"

}

