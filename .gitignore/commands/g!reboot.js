const Discord = require('discord.js');

exports.run = async (client, message, args1) => {
if(message.author.id === "381116968327053313") {
    console.log("Le bot s'est reset")
    client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag}`)
      message.channel.send("**Je reboot**")
    await  message.react('🇴')
      await       message.react('🇰')
                 .then(message => client.destroy())
                 .then(() => client.login(process.env.TOKEN))
      message.channel.send("**Je suis reboot.**")
      client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot connecté et lancé sur **${client.guilds.size}** serveurs`)
  } else {
  message.channel.send(":no_entry:  Tu n'es pas mon créateur et ne peut donc pas utiliser cette commande !  :no_entry:")
  }}
