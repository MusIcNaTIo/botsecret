const Discord = require("discord.js");
const ytdl = require('ytdl-core');
var prefix = "g!";
var servers = {};
function play(connection, message) { 
var server = servers[message.guild.id];

server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

server.queue.shift();

server.dispatcher.on("end", function() { 
  if (server.queue[0]) play(connection, message);

  else connection.disconnect();

});
}

exports.run = async (client, message, args1) => {


    if(!message.member.voiceChannel) 
    
    return message.channel.send(":x: Tu dois être dans un salon vocal");

    message.member.voiceChannel.leave();
    message.channel.send("Je quitte le salon vocal");

  
  
}