const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "-";
const bot = new commando.Client({
  commandPrefix: prefix
});

class helpopCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'helpop', 
      group: 'zycos',
      memberName: 'helpop',
      description: "Make a request and share us your problem"
    });
  }

  async run(message,args)
  {
    let requestargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        let requestmessage = requestargs.join(" ").slice(7);
        if (!requestmessage) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "-helpop [request]")});

            var requestembed = new Discord.RichEmbed()
            .setTitle('**Zycos II Helpop**')
            .setColor("#FF0000")
            .addField('**__Request By__**', `${message.author} with the ID: ${message.author.id}`)
            .addField('**__User Request__**', requestmessage)
            .setTimestamp()

            let logschannel = message.guild.channels.find(`name`, "👥logs");
            if(!logschannel) return message.channel.send("Couldn't find the 👥logs channel");

            message.delete(3000);
            logschannel.send(requestembed);

        message.reply('Thanks for your problem. We will contact you in 24h. Please be patient')
  }
}

module.exports = helpopCommand
