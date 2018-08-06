const translate = require('google-translate-api');
const Discord = require('discord.js');
var prefix = "g!";
exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
 
    let command = args.shift();
    if (args[0]) {
        let from_language = "auto" // default languages
        let to_language = "fr" // default languages
        let tobe_translated = message.content.slice(prefix.length + command.length + 1) // Getting the text
        if (args[0].startsWith("from:")) { // Checking if there is a from:language & to:language, this part is not optimized
            from_language = args[0].slice(5)
            tobe_translated = tobe_translated.slice(args[0].length + 1)
            if (args[1].startsWith("to:")) {
                to_language = args[1].slice(3)
                tobe_translated = tobe_translated.slice(args[1].length + 1) // cutting the from & to from the text
            }
        } else if (args[0].startsWith("to:")) { // Checking if there is a to:language & from:language, Yes I check 2 times :/
            to_language = args[0].slice(3)
            tobe_translated = tobe_translated.slice(args[0].length + 1)
            if (args[1].startsWith("from:")) {
                from_language = args[1].slice(5)
                tobe_translated = tobe_translated.slice(args[1].length + 1) // cutting the from & to from the text
            }
        }
        translate(tobe_translated, {
            from: from_language,
            to: to_language
        }).then(res => { // We translate the text
            from_language = res.from.language.iso
            if (res.from.text.value) tobe_translated = res.from.text.value
            final_text = res.text
            let translateembed = new Discord.RichEmbed()
                .setTitle("Translate") // Optionnal stuff
                .setColor(`0x3980b3`) // Optionnal stuff
                .setDescription("Bip Bip Boop\nDiscord est magique") // Optionnal stuff
                .addField("`from: " + from_language + "`", "```" + tobe_translated + "```")
                .addField("`to: " + to_language + "`", "```" + final_text + "```")
                .setThumbnail("https://cdn.dribbble.com/users/1341307/screenshots/3641494/google_translate.gif") // Optionnal stuff
            message.channel.send(translateembed)
        }).catch(err => {
            message.channel.send(":x: Usage : `" + prefix + "trad [from:langueA] [to:langueB] <un peu de texte>` \nLes langues sont optionnels, cependant elles doivent être en langage ISO, aidez-vous de ce site : <http://bit.ly/ISO_codesWiki> pour les codes ISO\nExemple : ```" + prefix + "trad from:en to:fr Hi how are you ?```") // Yes, I used Romanian for my example. Do you have any problem?
        });
    } else {
        message.channel.send(":x: Usage: `" + prefix + "trad [from:langueA] [to:langueB] <un peu de texte>` \nLes langues sont optionnels, cependant elles doivent être en langage ISO, aidez-vous de ce site : <http://bit.ly/ISO_codesWiki> pour les codes ISO\nExemple : ```" + prefix + "trad from:en to:fr Hi how are you ?```")
    }
}
