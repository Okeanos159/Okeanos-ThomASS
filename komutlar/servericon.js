const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
     .setDescription("**SUNUCU İCONU**")
     .setImage(message.guild.iconURL)

    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'servericon',
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};
