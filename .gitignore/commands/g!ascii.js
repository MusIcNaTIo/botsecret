const ascii = require('ascii-art');
const Discord = require('discord.js');
exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        rendered = rendered.trimRight();

        if(rendered.lenght > 2000) return message.channel.send("Ce message est trop long !");

        message.channel.send(rendered, {
            code: "md"
        });
    });
}
