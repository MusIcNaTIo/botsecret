const Discord = require('discord.js');

exports.run = async (client, message, args1) => {

    if(message.author.id === "381116968327053313") {
        console.log("Le bot s'est reset")
        client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag}`)
         message.channel.send("**Je m'éteins**")
        await message.react('🇴')
        await          message.react('🇰')
                     .then(message => client.destroy())}else{
                         message.channel.send("Mdr, tu crois que tu va m'éteindre")
                     }
}
