const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Entrer une location !**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Temps à ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zone Horaire :',`UTC${location.timezone}`, true)
          .addField('Degrée type :',location.degreetype, true)
          .addField('Température :',`${current.temperature} Degrees`, true)
          .addField('Ressenti : ', `${current.feelslike} Degrees`, true)
          .addField('Vent : ',current.winddisplay, true)
          .addField('Humidité : ', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
