const Discord = require('discord.js');

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};

const client = new Discord.Client();


var prefix = "g!";

function play(connection, message) {
  
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() { 
    if (server.queue[0]) play(connection, message);

    else connection.disconnect();

  });
}



client.on("ready", () => {
  console.log("Je suis connecté");
  client.user.setStatus("Online")
  client.user.setActivity(`(g!aide) | Serveurs : ${client.guilds.size}, Membres : ${client.users.size} | V0.8`);
  client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot connecté et lancé sur **${client.guilds.size}** serveurs`)
  
})

    client.on("guildCreate", guild => {
  client.user.setActivity(`(g!aide) | Serveurs : ${client.guilds.size}, Membres : ${client.users.size} | V0.5`);
  let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setTitle(`🤖 NOUVEAU SERVEUR! 🤖`)
  .setDescription(`**On m'a ajouté sur le serveur:**: ${guild.name}\n**Son id est:**: ${guild.id}\n**Et il a**: ${guild.memberCount} membres!`)
  client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
});


client.on("guildDelete", guild => {
  client.user.setActivity(`(g!aide) | Serveurs : ${client.guilds.size}, Membres : ${client.users.size} | V0.5`);
  let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setTitle(`🤖 ADIEU SERVEUR 🤖`)
  .setDescription(`**On m'a ajouté sur le serveur :**: ${guild.name}\n**Son id est :**: ${guild.id}\n**Et il a** : ${guild.memberCount} membres!`)
  client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
});



client.on('message', message => {
      

if(message.content === prefix + "testeur"){
  message.channel.send(`${message.author.tag} a besoin de vous ! @everyone`)
}
if(message.content === prefix + "site"){
message.channel.send("Le lien de mon site est : http://guysmowbot.ml/")
}
  
    if(message.content === ".aide"){
    message.channel.send("Apprends à lire le statuts de jeu sal SEGPA ! https://cdn.discordapp.com/attachments/469482434665250816/469482449114497034/unknown.png")
    console.log("easter egg trouvé")
    }
    
    if(message.content === prefix + "aide" && message.channel.type != "dm") {
      var help_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("**Commandes de fun et d'aide :**")
      .setDescription("Tout le monde peut utiliser ces commandes.")
      .addField("g!aide", "Affiche les commandes du Bot. `!aidemp` pour reçevoir en Message Privé")
      .setThumbnail(message.author.avatarURL)
      .addField("g!aide_fun :tada:", "Voir les commandes funs. `!aide_funmp` pour reçevoir en Message Privé")
      .addField("g!aide_mod :busts_in_silhouette: ", "Voir les commandes de modérations. `!aide_modmp` pour reçevoir en Message Privé")

      
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.channel.send(help_embed);
      console.log("Menu d'aide ouvert avec succès")
    }

    if(message.content === prefix + "aidemp" && message.channel.type != "dm") {
      var helpmp_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("**Commandes de fun et d'aide :**")
      .setDescription("Tout le monde peut utiliser ces commandes.")
      .addField("g!aide", "Affiche les commandes du Bot.")
      .setThumbnail(message.author.avatarURL)
      .addField("g!aide_fun :tada:", "Voir les commandes funs")
      .addField("g!aide_mod :busts_in_silhouette: ", "Voir les commandes de modérations")

      
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.author.send(helpmp_embed);
      message.channel.send("Tu as reçu l'aide en message privé.")
      console.log("Menu d'aide ouvert avec succès")
    }
    
    if(message.content === prefix + "aide_fun" && message.channel.type != "dm") {
      var help_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("**Commandes de fun et d'aide :**")
      .setDescription("Tout le monde peut utiliser ces commandes.")
      .addField(":tools: Les utilitaires :tools:", "\n `g!ping` `g!statistiques` `g!serverinfo` `g!membercount` `g!channelcount` `g!googlesearch` `g!avatar`")
      .addField(":joy: Pour s'amuser :joy:", "\n `g!blagues` `g!vdm` `g!facepalm` `g!dog` `g!say` `g!cat`")
      .addField(":game_die: Le hasard :game_die:", "\n `g!roll` `g!8ball` `g!coin` `g!pfc`")
      .addField(":musical_note: Musique :musical_note: : \n `g!play <lien>` `g!stop` `g!skip`")
      .addField(":couple: Amitié/Amour :couple:", ("\n`g!friendcheck` `g!lovecheck` `g!hatecheck`"))
      .addField(":e_mail: Channel inter-serveur :e_mail:", "`g!gt`")
      .addField(":id: A propos de moi :id:", "`g!support` `g!invites` `g!site`")
      .addField("Autres :", "D'autres commandes arrivent prochainement :wink:"  )
      
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.channel.send(help_embed);
      console.log("Menu d'aide fun ouvert avec succès")
    }
    if(message.content === prefix + "aide_funmp" && message.channel.type != "dm") {
      var helpfunmp_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("**Commandes de fun et d'aide :**")
      .setDescription("Tout le monde peut utiliser ces commandes.")
      .addField(":tools: Les utilitaires :tools:", "\n `g!ping` `g!statistiques` `g!serverinfo` `g!membercount` `g!channelcount` `g!googlesearch` `g!avatar`")
      .addField(":joy: Pour s'amuser :joy:", "\n `g!blagues` `g!vdm` `g!facepalm` `g!dog` `g!say` `g!cat`")
      .addField(":game_die: Le hasard :game_die:", "\n `g!roll` `g!8ball` `g!coin` `g!pfc`")
      .addField(":musical_note: Musique :musical_note:",   "\n`g!play <lien>` `g!stop` `g!skip`")
      .addField(":couple: Amitié/Amour :couple:", ("\n`g!friendcheck` `g!lovecheck` `g!hatecheck`"))
      .addField(":e_mail: Channel inter-serveur :e_mail:", "`g!gt`")
      .addField(":id: A propos de moi :id:", "`g!support` `g!invites` `g!site`")
      .addField("Autres :", "D'autres commandes arrivent prochainement :wink:"  )
      
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.channel.send(help_embed);
      console.log("Menu d'aide fun ouvert avec succès")
    }
    if(message.content === prefix + "aide_mod" && message.channel.type != "dm") {
      var mod_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Commandes de modération :  ")
      .setDescription("Les commandes suivantes nécéssitents des permissions spéciales")
      .addField("!permissions", "Voir les permissions requises pour effectuer une commande de modération")
      .addField("!clear <nombre de messages>", "Supprime le nombre de messages mis après la commande, néccésite la permission de supprimer les messages (Max 100 messages)")
      .setThumbnail(message.author.avatarURL)
      .addField("g!mute <@user>", "Rend un joueur muet")
      .addField("g!unmute <@user>", "Permet d'unmute un joueur")
      .addField("g!kick <@user>", "Avec les permissions nécéssaires, vous pouvez exclure quelqu'un")
      .addField("g!ban <@user>", "Avec les permissions nécéssaires, vous pouvez bannir quelqu'un")   
      .addField("g!warn <@user> <raison>", "Avertir quelqu'un")
      .addField("g!seewarns <@user>", "Voir le nombre de warns d'un utilisateur ainsi que la raison de ces warns")
      .addField("g!deletewarns <@user> <Numéro du Warn>", "Permet de supprimer 1 avertissement")
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.channel.send(mod_embed);
      console.log("Menu d'aide modo ouvert avec succès")
    
    }
    if(message.content === prefix + "aide_modmp" && message.channel.type != "dm") {
      var modmp_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Commandes de modération :  ")
      .setDescription("Les commandes suivantes nécéssitents des permissions spéciales")
      .addField("g!permissions", "Voir les permissions requises pour effectuer une commande de modération")
      .addField("g!clear <nombre de messages>", "Supprime le nombre de messages mis après la commande, néccésite la permission de supprimer les messages (Max 100 messages)")
      .setThumbnail(message.author.avatarURL)
      .addField("g!mute <@user>", "Rend un joueur muet")
      .addField("g!unmute <@user>", "Permet d'unmute un joueur")
      .addField("g!kick <@user>", "Avec les permissions nécéssaires, vous pouvez exclure quelqu'un")
      .addField("g!ban <@user>", "Avec les permissions nécéssaires, vous pouvez bannir quelqu'un")   
      .addField("g!warn <@user> <raison>", "Avertir quelqu'un")
      .addField("g!seewarns <@user>", "Voir le nombre de warns d'un utilisateur ainsi que la raison de ces warns")
      .addField("g!deletewarns <@user> <Numéro du Warn>", "Permet de supprimer 1 avertissement")
      .setFooter("Mon créateur est NRV | Guysmow#5384")
      message.author.send(modmp_embed)
      message.channel.send("Tu as reçu l'aide des commandes de modération en Message Privé.");
      console.log("Menu d'aide modo ouvert avec succès")
    
    }
    if(message.content === prefix + "serverinfo" && message.channel.type != "dm") {
      var info_embed = new Discord.RichEmbed()
   .setColor("#RANDOM")
   .setTitle("Information à propos du serveur : ")
   .setThumbnail(message.author.avatarURL)
   .addField(":bust_in_silhouette: Créateur :", `${message.guild.owner.user.tag}`)
   .addField(":hash: Mon Tag :", `#${message.guild.owner.user.discriminator}`)
   .addField(':map: Région du serveur:', message.guild.region)
	.addField(':clock1: Date de création du serveur : ',message.guild.createdAt)
   .addField("Nombre de membres :", message.guild.members.size)
   .addField("Tu as rejoins le", message.member.joinedAt)
   .addField("Nombre de catégories et de salons :", message.guild.channels.size)
   .setFooter("Commande créée par NRV | Guysmow#5384")
   message.channel.send(info_embed)
   console.log("Les informations d'un serveur ont été trouvés avec succès!")
}
if(message.content.startsWith(prefix + "youtube" + "search")) {
  let args = message.content.split(" ").slice(1);
 let youtube = args.slice(1).join('+');
 let link = `https://www.youtube.com/results?search_query=` + youtube;

var yt_embed = new Discord.RichEmbed ()
.setColor("RANDOM")
.setTitle("__Ton lien__")
.setDescription(":arrow_up:Pour accéder à ta recherche, clique sur le lien en hait :arrow_up: ")
.addField(`Ta recherche sur Youtube porte sur : `, `**__${youtube}__**`)
.setURL(link)
.setFooter("Recherche YouTube")
message.channel.send(yt_embed);
console.log(`J'ai fait une recherche YouTube portant sur : ${youtube}`)
}

if(message.content === prefix + "membercount" && message.channel.type != "dm"){

  var mbr_embed = new Discord.RichEmbed()
  .setTitle("Membres")
  .setDescription(`Sur le serveur **${message.guild.name}**, il y'a :\n **${message.guild.members.filter(o => o.presence.status === 'online').size}** En Ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Hors ligne/invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** En Streameur`)
  .addField(`Il y'a : **${message.guild.members.filter(member => !member.user.bot).size}** humains`, "** **")
	.addField(`Il y'a : **${message.guild.members.filter(member => member.user.bot).size}** bots`, "** **" )
	.addField(`Le propriétaire est : ${message.guild.owner.user.tag}`, `** **`)
  message.channel.send(mbr_embed)
}

if(message.content === prefix + "ping") {
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

if(message.content === prefix + "channelcount" && message.channel.type != "dm"){
  message.channel.send(`Sur le serveur **${message.guild.name}**, il y'a **${message.guild.channels.size}** channels vocaux/écrits !`)
}

if(message.content === prefix + "permissions" && message.channel.type != "dm") {
  var perm_embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("**Permisions nécéssaires pour utiliser les commandes de modération**")  
  .addField("g!clear <nombre de messages>", "Permissions nécéssaire : `MANAGE_MESSAGE`")
  .setThumbnail(message.author.avatarURL)
  .addField("g!mute <@user>", "Permission nécéssaire : `ADMINISTRATOR`")
  .addField("g!unmute <@user>", "Permission nécéssaire : `ADMINISTRATOR`")
  .addField("g!kick <@user>", "Permission nécéssaire : `KICK_MEMBERS`")
  .addField("g!ban <@user>", "Permission nécéssaire : `BAN_MEMBERS`")    
  .addField("g!warn <@user> <raison>", "Permission nécéssaire : `MANAGE_GUILD`")
  .addField("g!seewarns <@user>", "Permission nécéssaire : `MANAGE_GUILD`")
  .addField("g!deletewarns <@user> <Numéro du Warn>", "Permission nécéssaire : `MANAGE_GUILD`")

  .setFooter("Mon créateur est NRV | Guysmow#5384")
  message.channel.send(perm_embed);
  console.log("Menu d'aide ouvert avec succès")

}
if(message.content === prefix + "support" && message.channel.type !="dm") {
  message.reply("Vérifie tes messages privés, tu as reçu le lien du serveur de support !")
  message.author.send("Le lien du serveur de support est : https://discord.gg/ps8jnQR")
}

if(message.content === prefix + "invites" && message.channel.type !="dm") {
  message.reply("Vérifie tes messages privés, tu as reçu mon lien d'invitation !")
  message.author.send("Le lien pour inviter le bot est : https://discordapp.com/oauth2/authorize?client_id=469054026001022986&scope=bot&permissions=8")
}





if(message.content.startsWith(prefix + "say")) {
  let args = message.content.split(" ").slice(1);
        let say = args.join(' ');
    if (!say) {return message.channel.send("`Tu dois écrire un message!`");
        }
    message.channel.send(say)
    message.delete();
    console.log(`J'ai dit" ${say} " et c'est @${message.author.tag} du serveur "${message.guild.name}" qui m'a dit de le dire`)
}
if(message.content.startsWith(prefix + "esay")) {
  let args = message.content.split(" ").slice(1);
        let say = args.join(' ');
    if (!say) {return message.channel.send("`Tu dois écrire un message!`");
        }
var say_embed = new Discord.RichEmbed()
.setTitle('Say embed')
.addField(say)
    message.channel.send(say_embed)
    message.delete();
    console.log(`J'ai dit" ${say} " et c'est @${message.author.tag} du serveur "${message.guild.name}" qui m'a dit de le dire`)
}


if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {
  case "gt":
let xoargs = message.content.split(" ").slice(1);
let xo03 = xoargs.join(" ")
var xo02 = message.guild.channels.find('name', 'guysmowtchat');
if(!xo02) return message.reply(" Le channel guysmowtchat est introuvable")
if(message.channel.name !== 'guysmowtchat') return message.reply("Commande à effectuer dans le guysmowtchat")
if(!xo03) return message.reply("Merci d'écrire un message à envoyer à la globalité des discords.")
var tchat_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Message global Guysmow")
.addField("Pseudo de l'utilisateur :", message.author.username + "#" + message.author.discriminator, true)
.addField("Em provenance de :", message.guild.name, true)
.addField("Contenu du mesage : ", xo03)
.setFooter("GuysmowBOT")
.setTimestamp()
message.delete();
client.channels.findAll('name', 'guysmowtchat').map(channel => channel.send(tchat_embed))

    break;

    case "play":

    if (!args[1]) {

    message.channel.send("Tu dois m’indiquer un lien YouTube"); 

    return;

  }

    if(!message.member.voiceChannel) {

    message.channel.send(":x: Tu dois être dans un salon vocal"); 

    return;

  }


    if(!servers[message.guild.id]) servers[message.guild.id] = {

    queue: []
    
    
  };


  var server = servers[message.guild.id];


  server.queue.push(args[1]);

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {

  play(connection, message) 
  message.channel.send("J'ajoute cette musique à la queue")

  });

  break; 

  case "skip":

    if(!message.member.voiceChannel) {

    message.channel.send(":x: Tu dois être dans un salon vocal"); 

    return;

  }

    var server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end();
    message.channel.send("Chanson skippée")

    break;

  case "stop":

    if(!message.member.voiceChannel) 
    
    return message.channel.send(":x: Tu dois être dans un salon vocal");

    message.member.voiceChannel.leave();
    message.channel.send("J'ai quitté le salon vocal.")

    break;

    




  case "statistiques" :

  var userCreateDate = message.author.createdAt.toString().split(" ");
  var msgauthor = message.author.id;

  var stats_embed = new Discord.RichEmbed()

  .setColor("#RANDOM")
  .setTitle(`Vos informations personnelles : ${message.author.username}`)
  .addField(`ID de l'utilisateur :id:`, msgauthor, true)
  .addField(`Date de création de l'utilisateur : `, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
  .setThumbnail(message.author.avatarURL);
  message.reply("Tu peux regarder tes messages privés, tu vient de reçevoir tes informations personnnelles !");
  message.author.send(stats_embed);
  break;

  case "serverlist":
    message.author.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    break;
  



}




if(message.content.startsWith(prefix + "kick") && message.channel.type != "dm"){
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de Kick");

  if(message.mentions.user === 0){
    return message.channel.send("Vous devez mentionnez un utilisateur !")
  }
  var kick = message.guild.member(message.mentions.users.first());
  if(!kick) {
    return message.channel.send("Je ne sais pas si l'utilisateur existe ou si vous en avez mentionné un :/")
  }
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
    return message.channel.send("Je n'ai pas la permission pour kick !");
  
  kick.kick().then(member => {
    message.channel.send(`**${member.user.username}** est kick par **${message.author.username}**`);
  });
}
}
	
	
	if(message.content === prefix + "heure"){
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`Jour : \`${Day}\` \nMois : \`${Month}\` \nAnnée :\`${Year}\`\n\`\nHeure :\` \`${today.toString().split(" ")[4]}\``)}

if(message.content === prefix + "coin"){
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.RichEmbed()
  .setAuthor(`Lancer de pièce`)
  .addField(`Résultat`, `T'es tombé sur **PILE**!`)
  .setImage("https://i.imgur.com/5OdiMEg.png")
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0xff1053");
  let tailembed = new Discord.RichEmbed()
  .setAuthor(`Lancer de pièce`)
  .addField(`Résultat`, `T'es tombé sur **FACE**`)
  .setImage('https://i.imgur.com/gN7itqC.png')
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0x00bee8");
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}




if(message.content.startsWith(prefix + "ban") && message.channel.type != "dm") {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban un utilisateur");

  if(message.mentions.users.size === 0){
    return message.channel.send("Vous devez mentionnez un utilisateur :wink:")
  }

  var ban = message.guild.member(message.mentions.users.first());
  if(!ban){
    return message.channel.send("Je ne sais pas si l'utilisateur existe");

  }
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
    return message.channel.send("Je n'ai pas la permission de ban cet utilisateur");
  }
  ban.ban().then(member => {
    message.channel.send(`**${member.user.username}** est ban par **${message.author.username}** !`);
  }

  )}
  
  if(message.content.startsWith(prefix + "lovecheck") && message.channel.type != "dm") {
    var replys = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", 
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    let user1 = message.mentions.users.first();
    let user2 = message.mentions.users.first();
   
   
    if(message.mentions.users.size === 0){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous en avez mentionné 0 !")
    }
    if(message.mentions.users.size === 1){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous n'en avez mentionné qu'un !")
    }
    if(message.mentions.users.size === 2){
      return message.channel.send(`Il y'a **`  + reponse + `%** d'amour :heartpulse: entre ${user1.username} et ${user2.username}`)
    }
    if(message.mentions.users.size >= 3){
      return message.channel.send("Deux utilisateurs maximum")
    }
     console.log("Lovecheck effectué avec succès")
  }
  if(message.content.startsWith(prefix + "hatecheck") && message.channel.type != "dm") {
    var replys = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", 
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
  
    if(message.mentions.users.size === 0){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous en avez mentionné 0 !")
    }
    if(message.mentions.users.size === 1){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous n'en avez mentionné qu'un !")
    }
    if(message.mentions.users.size === 2){
      return message.channel.send("Il y'a** " + reponse + "%** de haine :rage: entre les deux utilisateurs mentionnés")
    }
    if(message.mentions.users.size >= 3){
      return message.channel.send("Deux utilisateurs maximum")
    }
     console.log("Lovecheck effectué avec succès")
  }

  if(message.content.startsWith(prefix + "friendcheck") && message.channel.type != "dm") {
    var replys = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", 
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
  
    if(message.mentions.users.size === 0){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous en avez mentionné 0 !")
    }
    if(message.mentions.users.size === 1){
      return message.channel.send("Vous devez mentionnez deux utilisateurs, vous n'en avez mentionné qu'un !")
    }
    if(message.mentions.users.size === 2){
      return message.channel.send("Il y'a** " + reponse + "%** d'amitié :open_hands: entre les deux utilisateurs mentionnés")
    }
    if(message.mentions.users.size >= 3){
      return message.channel.send("Deux utilisateurs maximum")
    }
    console.log("Friendcheck effectué avec succès")
  }
  
  if(message.content.startsWith(prefix + "mute") && message.channel.type != "dm") {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur valide !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas !");
    }

    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, {SEND_MESSAGES: false}).then(member => {
        message.channel.send(`**${mute.user.username}** est mute !`);
    })
    
}
if(message.content.startsWith(prefix + "pfc")) {
  let args = message.content.split(" ").slice(1);
  var choice = args[0];
if (choice == "feuille" || choice == "f" || choice == "feuille") {
  var numb = Math.floor(Math.random() * 99);
  if (numb <= 33) {
    var choice2 = "feuille";
  } else if (numb => 66) {
    var choice2 = "pierre";
  } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
    var choice2 = "ciseaux";
  }
  if (choice2 == "ciseaux") {
    var response = "Je choisis **ciseaux** :scissors:! J'ai gagné!"
  } else if (choice2 == "feuille") {
    var response = "Je choisis **feuille** :page_facing_up:! Il y a égalité!"
  } else if (choice2 == "pierre"){
    var response = "Je choisis **pierre** :moyai:! Tu as gagné"
  }
  message.channel.send(response);
} else if (choice == "pierre" || choice == "r") {
  var numb = Math.floor(Math.random() * 99);
  if (numb <= 33) {
    var choice2 = "feuille";
  } else if (numb => 66) {
    var choice2 = "pierre";
  } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
    var choice2 = "ciseaux";
  }
  if (choice2 == "feuille") {
    var response = "Je choisis **feuille** :page_facing_up:! J'ai gagné!"
  } else if (choice2 == "pierre") {
    var response = "Je choisis **pierre** :moyai:! Il y a égalité!"
  } else if (choice2 == "ciseaux"){
    var response = "Je choisis **ciseaux** :scissors:! Tu as gagné"
  }
  message.channel.send(response);
} else if (choice == "ciseaux" || choice == "s") {
  var numb = Math.floor(Math.random() * 99);
  if (numb <= 33) {
    var choice2 = "feuille";
  } else if (numb => 66) {
    var choice2 = "pierre";
  } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
    var choice2 = "ciseaux";
  }
  if (choice2 == "pierre") {
    var response = "Je choisis **pierre** :moyai:! J'ai gagné!"
  } else if (choice2 == "ciseaux") {
    var response = "Je choisis **ciseaux** :scissors:! Il y a égalité!"
  } else if (choice2 == "feuille"){
    var response = "Je choisis **feuille** :page_facing_up:  ! Tu as gagné!"
  }
  message.channel.send(response);
} else {
  message.channel.send(`Utilisez g!pfc <pierre|feuille|ciseaux>`);
}
}

if(message.content.startsWith(prefix + "unmute") && message.channel.type != "dm") {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

  if(message.mentions.users.size === 0) {
      return message.channel.send('Vous devez mentionner un utilisateur valide !');
  }

  var mute = message.guild.member(message.mentions.users.first());
  if(!mute) {
      return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas !");
  }

  if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
  message.channel.overwritePermissions(mute, {SEND_MESSAGES: true}).then(member => {
      message.channel.send(`**${mute.user.username}** n'est plus mute !`);
  })
  
}

var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(prefix+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

  if(message.content.startsWith(prefix + "google" + " search")) {
    let args = message.content.split(" ").slice(1);
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	    	if(!args) {
	message.channel.send("**Tu dois donner des mots / tags à entrer sur Google!**")
	}
	    
	    	var google_embed = new Discord.RichEmbed ()
	.setColor("RANDOM")
	.setTitle("__Ton lien__")
	.setDescription(":arrow_up: Clique sur le lien plus haut :arrow_up: ")
	.addField(`Ta recherche Google porte sur : `, `\n**${google}**`)
	.setURL(link)
  .setFooter("Google search")
  message.channel.send(google_embed)

	    console.log(`J'ai fait une recherche Google portant sur: ${google}`)
}

if(message.content.startsWith(prefix + "reboot")) {
  if(message.author.id === "381116968327053313") {
  console.log("Le bot s'est reset")
  client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag}`)
   message.channel.send("**Je reboot**")
   message.react('🇴')
           message.react('🇰')
               .then(message => client.destroy())
               .then(() => client.login("NDY5MDU0MDI2MDAxMDIyOTg2.Dki1yg.zfslLXgO5aqtdb3GFrtcc8kpBBU"))
    message.channel.send("**Je suis reboot.**")
    client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot connecté et lancé sur **${client.guilds.size}** serveurs`)
} else {
message.channel.send(":no_entry:  Tu n'es pas mon créateur et ne peut donc pas utiliser cette commande !  :no_entry:")
}}

if(message.content.startsWith(prefix + "destroy")) {
  if(message.author.id === "381116968327053313") {
  console.log("Le bot s'est reset")
  client.guilds.get("469060312830574594").channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag}`)
   message.channel.send("**Je m'éteins**")
   message.react('🇴')
           message.react('🇰')
               .then(message => client.destroy())}}

if(message.content.startsWith(prefix + "report")) {
  let args = message.content.split(" ").slice(1);
     var bug = args.slice(0).join(" ")
     if(!bug) return message.reply("Que voulez-vous signaler ?")
     
         var embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setTitle(":bell: **Alerte : Nouvelle requête** :bell:")
         .addField(`Report :  ** ${bug} **`, `Requête de** ${message.author.tag}** avec l'ID : **${message.author.id} ** en provenance de** ${message.guild.name}**`)
         .setDescription("** **", "** **")
         .setFooter("Report")
         
         
        client.guilds.get("469060312830574594").channels.get("475286577845633026").send(embed)
                 .then(message =>{ 
                  message.react("✅");
                     message.react("❌"); 
                           
           })
     message.channel.send("Votre message a été envoyé au staff du bot !")
 
 }
 if(message.content === prefix + "slot") {
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

 if(message.content.startsWith(prefix + "avatar")) {
	let args = message.content.split(" ").slice(1);
	    if (args.join(" ") == "") {
        message.reply("Tu dois mentionner un utilisateur");
        return;
    } else {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL; 
        let embed = new Discord.RichEmbed()
            .setTitle(`Voici l'avatar de : ${user.username}#${user.discriminator}`)
            .setColor("RANDOM")
            .setImage(image)
	.setFooter(`Avatar de ${user.username}`)
        message.channel.send(embed);
    }
}

});

client.on('message', message => {
    if (message.content === "Ca va ?"){
        message.channel.send("Ca va super et toi ?");
        console.log('Commande avec succès')
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "dog") && message.channel.type != "dm") {

  var replys = [
    "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif",
          "https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif",
          "https://media.giphy.com/media/3ornk9v2rS7mjf5qWA/giphy.gif",
          "https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif",
          "https://media.giphy.com/media/l3nWl5bhBoim7glNu/giphy.gif",
          "https://media.giphy.com/media/3oEdvc9Y8h0j6Pm2yY/giphy.gif",
          "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
          "https://media.giphy.com/media/yoJC2COHSxjIqadyZW/giphy.gif",
          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var dog_embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(':dog:')
          .setImage(gif)
          .setFooter('Dog')

  
  message.channel.send(dog_embed)
  console.log("Blague effectué avec succès !")
}});

client.on('message', message => {
  if (message.content.startsWith(prefix + "cat") && message.channel.type != "dm") {

  var replys = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
          "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
          "https://media.giphy.com/media/qxEFIR0MHmU6I/giphy.gif",
          "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
          "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif",
          "https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif",
          "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
          "https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif",
          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var cat_embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(':cat:')
          .setImage(gif)
          .setFooter('Cat')

  
  message.channel.send(cat_embed)
  console.log("Blague effectué avec succès !")
}});

client.on('message', message => {
  if (message.content.startsWith(prefix + "8ball") && message.channel.type != "dm") {
let args = message.content.split(" ").slice(1);
let tte = args.join(" ")
if (!tte){
  return message.reply(":no_entry: **Veuillez me poser une question, évitez les quetions complexe svp!** :no_entry:")};

  var replys = [
    ":8ball: | Les signes indiquent que **Oui !**",
    ":8ball: | Les signes indiquent que **Non !**",
    ":8ball: | **Je ne sais pas !**",
    ":8ball: | **Peut-être !**",
    ":8ball: | **Peut-être pas !**",
    ":8ball: | **Sûrement !**",
    ":8ball: | **Sans doute !**",
    ":8ball: | **Probablement ! **",
    ":8ball: | **Probablement pas !**",
    ":8ball: | **Absolument !**",
    ":8ball: | **Sans aucun doute !**",
    ":8ball: | **Je pense que non !**",
    ":8ball: | **Je pense que oui !**",
    ":8ball: | **Absolument pas !**",
    ":8ball: | **Sûrement pas !**",
    
  ];
  let reponse = (replys[Math.floor(Math.random() * replys.length)])
  message.channel.send(reponse)
  console.log("g!8ball a été demandée et a été effectuée correctement!")
}});
client.on('message', message => {
  if (message.content.startsWith(prefix + "blague") && message.channel.type != "dm") {

  var replys = [
    "**Quelle est la plus intelligente, la blonde, la rousse ou la brune ? \n La rousse parce que c’est un dictionnaire. **",
          "**Un jour Dieu dit à Casto de ramer. \nEt depuis, castorama... **",
          "**Une camionnette, c'est un petit camion. \nUne fourchette, c'est une petite fourche. \n Une barrette, c'est une petite barre. \n Alors qu'est-ce qu'une salopette ? **",
          "**Qu'est-ce qu'une manifestation d'aveugles ? \nUn festival de Cannes**",
          "**- Papa, c'est vrai que tu m'aimes pas ? \n- Mais non fiston... Tiens, prend ton ballon et va jouer sur l'autoroute.**",
          "**Quel est le point commun entre un professeur et un thermomètre ? \nOn tremble quand ils marquent zéro !**",
          "**Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël ?\nUn chat-peint de Noël**",
          "**Tu connais le parfum Pur Hasard ? \nNon ? Alors tu mets ton doigt dans ton derrière puis tu le sens et si ça sent bon c'est du Pur Hasard. **",
          "**Quelle est la capitale de l'île de Tamalou ? \nGébobola !**",
          "**Un fou rentre chez lui et son horloge sonne 3 coups. \nIl dit : Oh, ça va ! Je sais qu'il est une heure, pas la peine de le répéter trois fois ! **",
          "**Quelle est la différence entre la grammaire et le divorce ? \nEn grammaire, c'est le masculin qui l'emporte.**",
          "**Que dit Frodon devant sa maison? \nC'est là que j'hobbit...**",
          "**Vous avez 5 euros dans votre poche, vous en perdez deux. Qu'est-ce que vous avez dans votre poche ? \nUn trou !**",
  ];
  let reponse = (replys[Math.floor(Math.random() * replys.length)])
  message.channel.send(reponse)
  console.log("Blague effectué avec succès !")
}});
client.on('message', message => {
  if (message.content.startsWith(prefix + "vdm") && message.channel.type != "dm") {

  var replys = [
      
"Aujourd'hui, comme tous les jours, je m'habille en gothique. Au supermarché, une jeune mère d'enfants turbulents m'a demandé de me faire passer pour une vilaine sorcière qui va les manger s'ils ne se calment pas. **VDM**",
"Aujourd'hui, dans la voiture, mon fils décide de mettre du rap. N'aimant pas ce genre de musique, je lui demande de changer de chanson car cela me donne des boutons. Mon fils de 5 ans me regarde alors fixement et me dit :  Tu as du écouter beaucoup de rap alors ! **VDM**",
"Aujourd'hui, en allant courir, je croise un homme en train de parler à son chien, qui court dans tous les sens. J'ai clairement entendu le maître dire : Si tu n'es pas calme, je te donne au Monsieur ! Je suis Chinois. **VDM**",
"Aujourd'hui, alors que j'étais assis dans la salle d'attente pour un entretien d'embauche, j'entends les recruteurs se moquer du prénom d'un candidat parce qu’il s'appelle Kevin. Ce candidat, c'était moi. **VDM**",
"Aujourd'hui, un incendie s'est déclaré dans mon restaurant à cause d'un court-circuit dans le système anti-incendie. **VDM**",
"Aujourd'hui, alors que je regarde une série en streaming avec ma fille de 12 ans, un film porno se déclenche. Le son était à fond, impossible de l’arrêter ou d’éteindre l’appareil. Gros malaise. **VDM**",
"Aujourd'hui, mon mec m'engueule, me fait la morale et me demande ce que je fais avec mon argent pour être à sec... Je venais de lui prêter 200 euros. **VDM**",
"Aujourd’hui, ma mère regarde la télé. Elle râle car une fille s’appelle Prune, et que c’est inadmissible de donner à sa fille un nom de fruit. Je m’appelle Clémentine. **VDM**",
"Aujourd'hui, dépanneur pour un opérateur Internet dans le nord de la France, je demande à la cliente quel est son problème. Réponse : Je suis allée voir ma famille dans le sud et je n'arrivais pas à me connecter au Wi-Fi de ma box, c'est inadmissible. **VDM**",
"Aujourd'hui, mon fils de 4 ans a décidé de transformer mes lunettes de vue en lunette de soleil grâce à un feutre indélébile. **VDM**",
"Aujourd'hui, 3 semaines après notre emménagement avec notre nouveau-né, les 11 voisins ont déjà signé 1 pétition pour que nous partions. **VDM**",
"Aujourd'hui, jour de ménage, je viens de passer vingt bonnes minutes à nettoyer une tache au sol, sans y arriver. Pas de chance, la tache en question était sur la vitre. J'ai nettoyé son ombre. **VDM**",
"Aujourd'hui, je me suis pris un sac poubelle en suivant un camion-benne. J'étais en scooter, je suis tombé, j'ai eu mal et les passants ont rigolé. **VDM**",
"Aujourd'hui, et depuis maintenant 3 mois, mon chat accepte d'aller à la litière uniquement si je le porte et que je le pose dedans. **VDM**",
"Aujourd'hui, un gamin avec un costume de Spiderman m'a dit que je ne savais pas m'habiller. **VDM**",
"Aujourd'hui, alors que je travaillais en tant que serveuse, je me suis fait draguer par deux hommes à la fois. Le père, d'une soixantaine d'années, et le fils, âgé de 14 ans. **VDM**",
"Aujourd'hui, j'ai emmené ma chérie au match de rugby France contre Nouvelle-Zélande. Surexcitée, elle m'a demandé dès les premières minutes où était Zlatan. **VDM**",
"Aujourd'hui, mon fils de 4 ans me dit qu'il a fait une blague au père Noël en lui postant une fausse liste. J'ai tout acheté hier. **VDM**",
"Aujourd'hui, je suis allé chez le serrurier pour faire un double de la clé de chez moi par sécurité. Il a cassé ma clé. **VDM**",
"Aujourd'hui, mon mari me reproche de ne faire aucun effort pour articuler quand je parle. Je venais de me faire arracher une dent. **VDM**",
"Aujourd'hui, j'apprends que je suis enceinte. Toute contente je rentre plus tôt que prévu chez moi pour l'annoncer à mon copain. Je l'ai surpris au lit avec son meilleur ami. **VDM**",
"Aujourd'hui, ma femme m'a annoncé qu'elle était enceinte. Je lui ai fait part de ma joie. Et a rajouté que je ferai un très bon tonton. **VDM**",
"Aujourd'hui, en passant l'aspirateur, j'ai vu une main apparaître à ma fenêtre ouverte, attraper une culotte sur mon sèche-linge et disparaître. **VDM**",
"Aujourd'hui, quand je lui ai montré mes étranges éruptions cutanées, mon médecin a posé son diagnostic grâce à une recherche sur Google Images. **VDM**",
"Aujourd'hui, comme j’ai refusé d’aller au resto avec mes parents, ils m’ont laissé seule à la maison en prenant le boîtier Wi-Fi. **VDM**",
"Aujourd'hui, alors que je suis en soirée passablement éméché, je me saisis du bol de Curly et en prends une poignée. C'étaient des mégots. **VDM**",
"Aujourd'hui, j'apprends, après l'enterrement de mon père, que les pompes funèbres se sont trompées dans le devis. Ils viennent de m'offrir un bon d'achat à utiliser chez eux dans les 3 mois. **VDM**",
"Aujourd'hui, soirée. J'explique qu'hier en venant j'ai écrasé un chat avec ma voiture. Une fille toute mimi me demande : Un petit tacheté avec la queue blanche ? Pensant qu'elle l'a vu en chemin, je réponds en rigolant : Ah bon t'as pu reconnaitre la tête et la queue, toi ? Ahah ! C'était son chat... **VDM**",
"Aujourd'hui, alors que j'attendais ma copine dans la rue, j'ai aperçu au loin une femme qui lui ressemblait fortement. J'ai couru vers elle les bras levés pour la prendre dans mes bras, puis je me suis rendu compte que ce n'était pas elle, alors j'ai continué ma route les bras levés et en courant.  **VDM**",
"Aujourd'hui, je vais au boulot à pied comme tous les matins. Une voiture débouche d'un parking. Je passe derrière elle. Le conducteur décide d'actionner le lave-glace. **VDM**",
"Aujourd'hui, j'ai menti à ma nouvelle petite amie sur mon prénom. En réalité, je m'appelle Teddy. Tout comme son cochon d'Inde.  **VDM**",
"Aujourd'hui, je me suis préparée pendant quatre heures. Épilation, crèmes, brushing, étude de ma tenue, de mes sous-vêtements et nettoyage total de l'appartement. Tout ça parce que mon ex m'a dit qu'il passerait pour récupérer des CD. Il est resté 1 min 30. **VDM**",
"Aujourd'hui, mon tuteur de stage m'a annoncé qu'il aurait bien aimé être mon père. J'ai vite déchanté quand il a ajouté : Comme ça, j'aurais pu te coller des baffes. **VDM**",
"Aujourd'hui, changement d'heure, je dois me lever à 5 h du matin pour une compétition sportive. Je viens de me réveiller : mon radio-réveil indique 4 h, ma montre 5 h, et mon portable 6 h. **VDM**",
"Aujourd'hui, je me suis fait sévèrement réprimander par mon patron car, selon lui, je le regarde souvent de haut. Je mesure 1,97 m. **VDM**",
"Aujourd'hui, une femme m'a demandé de deviner son âge. Elle semblait avoir plus de 50 ans. Pour lui faire plaisir, j'ai dit 42. Elle en avait 26. **VDM**",
"Aujourd'hui, j'ai fini mes études. Je suis officiellement une M.E.R.D.E. : Manipulatrice En Radiologie Diplômée d'État. **VDM**",
"Aujourd'hui, mon père a décidé de nettoyer la gouttière de la maison. Gouttière où, depuis un an, je jette mes mégots de cigarettes fumées en cachette le soir dans la chambre. **VDM**",
"Aujourd'hui, et comme depuis que je suis avec ma copine, il y a toujours un autre homme entre nous dans le lit : Hector, son ours en peluche. **VDM**",
"Aujourd'hui, j'ai oublié de déposer une pièce sous l'oreiller de mon fils qui a perdu une dent. Ce matin notre chat est entré dans sa chambre avec une souris morte dans la gueule. Comment expliquer à un enfant de 6 ans en larmes que non, notre chat n'a pas tué la petite souris ? **VDM**",
"Aujourd'hui, je sens que ma femme fait mine de prendre mon portefeuille dans la poche arrière de mon jean pour tester ma vigilance. Cette fois je ne réagis pas. Cette fois ce n'était pas ma femme. **VDM**",

];
  let reponse = (replys[Math.floor(Math.random() * replys.length)])
  message.channel.send(reponse)
  console.log("VDM effectué avec succès !")

  
}});
client.on('message', message => {
  if (message.content.startsWith(prefix + "facepalm") && message.channel.type != "dm") {

  var replys = [
      
"https://giphy.com/gifs/Ra1bmpxpsppNC", "https://giphy.com/gifs/facepalm-kwQfk9zUJ6eVq", "https://giphy.com/gifs/facepalm-dFY3ZyRdd3QMU", "https://media.giphy.com/media/qe92zBAAq2qRO/giphy.gif",
  ];
  let reponse = (replys[Math.floor(Math.random() * replys.length)])
  message.channel.send(reponse)
  console.log("Facepalm effectué avec succès !")

  


}});

client.on('message', message => {
  if(message.content.startsWith(prefix + "roll")) {
    var reply = [
      "https://i.imgur.com/yh2hfWB.png",
      "https://i.imgur.com/4t3gZTn.png",
      "https://i.imgur.com/8LXIhYO.png",
      "https://i.imgur.com/6D15y8t.png",
      "https://i.imgur.com/EWOWUSP.png",
      "https://i.imgur.com/6KMGm0k.png",
    ]
      let reponse = (reply[Math.floor(Math.random() * reply.length)])
    var roulette = new Discord.RichEmbed()
    .setColor("#FE0101")
    .addField(`${message.author.tag} a lancé le dé !`, `** **`)
    .setImage(`${reponse}`)
    .setFooter("Roll")
    message.channel.send(roulette)
        console.log("le bot a lancer la roulette")
    
}

if(message.content.startsWith(prefix + "sondage")) {
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission d'organiser un sondage.");
let args = message.content.split(" ").slice(1);
var sondage = args.slice(0).join(" ")
if(!sondage) return message.reply("Entrez un texte")

  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Sondage lancé par ${message.author.username}`)
  .setDescription(`**----------** \n Sujet du sondage : ${sondage}`, `** **`)
  .addField("Choisissez une réponse avec  :white_check_mark:  ou  :negative_squared_cross_mark:", "** **")
  .setFooter("Sondage")

   message.channel.send(embed)
          .then(message =>{ 
               message.react("✅"); 
               message.react("❎");
    })
console.log(`Un sondage a été envoyé correctement et son sujet est : ${sondage}`)
}
});





client.login("NDY5MDU0MDI2MDAxMDIyOTg2.Dki1yg.zfslLXgO5aqtdb3GFrtcc8kpBBU");

