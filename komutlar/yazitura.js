const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
  .setColor(0xd60808)
  .setDescription("**" + chance.pickone(["YAZI-TURA:__YAZI__**", "YAZI-TURA:__TURA__**"]));
  message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yt'],
  permlvl: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Bot yazı tura atar',
  usage: 'yazıtura'
};
