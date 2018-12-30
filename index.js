//PLUGINS
const commando = require('discord.js-commando');
const Discord = require('discord.js');
const prefix = "-";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!`);
    bot.user.setActivity(`-help | Vymic`, { type: 'WATCHING' });
});
//GETS THE BOT ONLINE

//REGISTRIES
bot.registry.registerGroup('zycos', 'Zycos')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//WELCOME MESSAGE
bot.on('guildMemberAdd', (member) => {
    const welcomechannel = member.guild.channels.find('name', `👋🏻ᴡᴇʟᴄᴏᴍᴇ`);
    welcomechannel.send({embed: new Discord.RichEmbed()
        .setColor("#4286f4")
        .setTitle("**New User**")
        .setDescription(`${member}. Welcome to the **Vymic Network | Discord**.`)});
})
//WELCOME MESSAGE

