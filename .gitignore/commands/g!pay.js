const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./storage/coins.json");

module.exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);

  if(!coins[message.author.id]){
    return message.reply("T'as pas d'argent")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) || message.author.id;

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Pas assez d'argent");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} a donné à ${pUser} ${args[1]} money.`);

  fs.writeFile("./storage/coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });


}