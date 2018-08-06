const Discord = require("discord.js"); 
exports.run = async (client, message, args1) => { 
    let args = message.content.split(" ").slice(1);
  let logs = message.guild.channels.find("name", "logs");
  if(!logs) return message.channel.send("Je ne trouve pas de salons logs.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Mentionnez un utilisateur");

  let reason = args.join(" ");
  if(!reason) reason = "Pas de raison donné";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed()
  .setTitle("Utilisateur : banni :")
  .setFooter("Ban logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Utilisateur banni :", `${user}, ID: ${user.id}`)
  .addField("Raison :", reason)
  .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
  .addField("Heure :", message.createdAt)
  .addField("Channel :", message.channel)

  logs.send(logsEmbed);
  message.channel.send(`${user} est banni par ${message.author} `);
}
