const Discord = require("discord.js");

module.exports.run = async (bot, message, args1) => {
    let args = message.content.split(" ").slice(1);

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
  if(args[0] == "help"){
    message.reply("Usage : !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne trouve pas cet utilisateur !");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Veuillez spécifiez un rôle !");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne trouve pas ce rôle !");

  if(!rMember.roles.has(gRole.id)) return message.reply("Il ne possède pas le rôle !");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`On vous a retiré le rôle : ${gRole.name}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> a été retiré du rôle ${gRole.name}`)
  }
}