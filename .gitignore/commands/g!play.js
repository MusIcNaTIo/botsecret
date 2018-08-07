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
    var args = message.content.substring(prefix.length).split(" ");
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
    
};