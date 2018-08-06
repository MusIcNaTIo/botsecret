const Discord = require('discord.js');

exports.run = (client, message, args1) => {


    var replys1 = [
        ":dollar:|:dollar:|:dollar:",
        ":cherries:|:cherries:|:cherries:",
        ":seven:|:seven:|:seven: ",
        ":large_orange_diamond:|:large_orange_diamond:|:large_orange_diamond:",
        ":large_blue_circle:|:large_blue_circle:|:large_blue_circle:",
        ":x:|:x:|:x:",
        ":tangerine:|:tangerine:|:tangerine:",
        ":dollar:|:cherries:|:dollar:|",
        ":dollar:|:cherries:|:large_orange_diamond:",
        ":cherries:|:tangerine:|:tangerine:",
        ":x:|:seven:|:cherries:",
        ":seven:|:dollar:|:tangerine:",
        ":cherries:|:large_blue_circle:|:tangerine:",
        ":large_blue_circle:|:large_blue_circle:|:cherries:",
        ":x:|:cherries:|:cherries:",
        ":dollar:|:dollar:|:seven:",
        ":large_orange_diamond:|:x:|:x:",
        ":seven:|:tangerine:|:tangerine:",
        ":large_orange_diamond:|:large_orange_diamond:|:x:",
        ":x:|:x:|:seven:",
        ":large_blue_circle:|:large_orange_diamond:|:seven:",
        ":cherries:|:cherries:|:x:",
        ":tangerine:|:cherries:|:x:",
        
          ];
           let reponse = (replys1[Math.floor(Math.random() * replys1.length)])
           
              var replys2 = [
                ":dollar:|:dollar:|:dollar:",
        ":cherries:|:cherries:|:cherries:",
        ":seven:|:seven:|:seven: ",
        ":large_orange_diamond:|:large_orange_diamond:|:large_orange_diamond:",
        ":large_blue_circle:|:large_blue_circle:|:large_blue_circle:",
        ":x:|:x:|:x:",
        ":tangerine:|:tangerine:|:tangerine:",
        ":dollar:|:cherries:|:dollar:|",
        ":dollar:|:cherries:|:large_orange_diamond:",
        ":cherries:|:tangerine:|:tangerine:",
        ":x:|:seven:|:cherries:",
        ":seven:|:dollar:|:tangerine:",
        ":cherries:|:large_blue_circle:|:tangerine:",
        ":large_blue_circle:|:large_blue_circle:|:cherries:",
        ":x:|:cherries:|:cherries:",
        ":dollar:|:dollar:|:seven:",
        ":large_orange_diamond:|:x:|:x:",
        ":seven:|:tangerine:|:tangerine:",
        ":large_orange_diamond:|:large_orange_diamond:|:x:",
        ":x:|:x:|:seven:",
        ":large_blue_circle:|:large_orange_diamond:|:seven:",
        ":cherries:|:cherries:|:x:",
        ":tangerine:|:cherries:|:x:",
           ];
           let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
                  var replys3 = [
                    ":dollar:|:dollar:|:dollar:",
        ":cherries:|:cherries:|:cherries:",
        ":seven:|:seven:|:seven: ",
        ":large_orange_diamond:|:large_orange_diamond:|:large_orange_diamond:",
        ":large_blue_circle:|:large_blue_circle:|:large_blue_circle:",
        ":x:|:x:|:x:",
        ":tangerine:|:tangerine:|:tangerine:",
        ":dollar:|:cherries:|:dollar:|",
        ":dollar:|:cherries:|:large_orange_diamond:",
        ":cherries:|:tangerine:|:tangerine:",
        ":x:|:seven:|:cherries:",
        ":seven:|:dollar:|:tangerine:",
        ":cherries:|:large_blue_circle:|:tangerine:",
        ":large_blue_circle:|:large_blue_circle:|:cherries:",
        ":x:|:cherries:|:cherries:",
        ":dollar:|:dollar:|:seven:",
        ":large_orange_diamond:|:x:|:x:",
        ":seven:|:tangerine:|:tangerine:",
        ":large_orange_diamond:|:large_orange_diamond:|:x:",
        ":x:|:x:|:seven:",
        ":large_blue_circle:|:large_orange_diamond:|:seven:",
        ":cherries:|:cherries:|:x:",
        ":tangerine:|:cherries:|:x:",
           ];
           let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])
        
           const embed = new Discord.RichEmbed()
           .setColor("#FE0101")
           .setTitle(`**[ :slot_machine: @${message.author.tag} a lancé la machine à sous! :slot_machine: ]**`)
           .addField("**-------------------**", "** **")
           .addField(`${reponse} \n \n${reponse2}**<--** \n \n${reponse3}`, `** **`)
           .addField("**-------------------**", "** **")
           .setDescription("** **")
           .setFooter("Slot")
           message.channel.send(embed)
           console.log("J'ai lancé la machine à sous!")
}
