const Discord = require('discord.js');


exports.run = function(client, message) {

   const embed = new Discord.RichEmbed()
    .setDescription("**__PİNG__**")
    .setColor(0x039D00)
    .addField(`❤️ **${client.ping}**`, "___**MS**___......")

   message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permlvl: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
