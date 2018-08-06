const Discord = require('discord.js');

exports.run = (client, message, args1) => {
    var start = Date.now(); message.channel.send( 'Pong ! ').then(message => { 
        var diff = (Date.now() - start); 
        var API = (client.ping).toFixed(2)
            
            var embed = new Discord.RichEmbed()
            .setTitle(`🏓 Pong!`)
            .setColor(0xff2f2f)
            .addField("📶 Latence du bot :", `${diff}ms`, true)
            .addField("💻 Latence de l'API : ", `${API}ms`, true)
            message.edit(embed);
        message.edit(embed);
            message.edit(embed);
        message.edit(embed);
          console.log("Le bot a trouvé son ping")
        });
        
}
