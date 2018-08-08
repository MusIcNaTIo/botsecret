const Discord = require("discord.js");


module.exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);


 
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("T'as pas la permission requise : `MANAGE_ROLES`");
  if (args[0] == "help") {
    message.reply("Usage : !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Merci de spécifier un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Je ne trouve pas ce rôle !");

  if (rMember.roles.has(gRole.id)) return message.reply("Il a déjà ce rôle !");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Vous avez obtenu le rôle : ${gRole.name}`)
    message.channel.send(`<@${rMember.id}>, a reçu le rôle ${gRole.name}. `)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}>, a reçu le rôle ${gRole.name}. `)
  }
}