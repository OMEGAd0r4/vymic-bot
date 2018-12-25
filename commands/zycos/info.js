const commando = require('discord.js-commando');
const Discord = require('discord.js');
const prefix = "-";
const bot = new commando.Client({
    commandPrefix: prefix
});

class infoCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'info',
        group: 'zycos',
        memberName: 'info',
        description: 'Shows the information about the server'
      });
    }

    async run(message)
    {
      message.channel.send({embed: new Discord.RichEmbed()  
        .setTitle("**Zycos II Information**")
        .setColor("#FF0000")
        .addField("**__Server Information__**", "----------------------------------")
        .addField("**• Server Name**", "Zycos Network")
        .addField("**• Server Owner**", "Zymaz")
        .addField("**• Server Host**", "Thailand & Singapore")
        .addField("**• Minigame**", "Practice/KitMap/HCF/UHC")
        .addField("**__Links__**", "----------------------------------")
        .addField("**Server IP**", "ZYCOS.CF")
        .addField("**Website**", "Comming soon")
        .addField("**Store**", "Comming soon")
        .addField("**Discord**", "https://discord.gg/RF8uy5K")
        .setFooter("Zycos bot created by hieu#0843")
        .setTimestamp()})
    }
}

module.exports = infoCommand;
