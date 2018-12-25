const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "-";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'zycos',
        memberName: 'status',
        description: 'Shows the status of the Zycos Network'
      });
    }

    async run(message)
    {
        //npm install request --save
        var request = require("request");
        var mcIP = "ZYCOS.CF";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            
            var status = `The Zycos Network is currently offline`;
            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Zycos II Status**")
                    .setColor("#FF0000")
                    .addField("The Zycos network is currently online with,", `${body.players.now} people playing`)
                    .setThumbnail("https://cdn.discordapp.com/attachments/526598553116606464/526685878345531422/server-icon.png")})
            }
            if(!body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Zycos II Status**")
                    .setColor("#FF0000")
                    .addField("The Zycos network is currently online with,", "-> 0 players")
                    .setThumbnail("https://cdn.discordapp.com/attachments/526598553116606464/526685878345531422/server-icon.png")})
            }
        })
    }
}

module.exports = statusCommand;
