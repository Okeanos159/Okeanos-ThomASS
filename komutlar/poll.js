const Discord = require('discord.js');


exports.run = function(client, message, args, tools) {

  // if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu sadece yönetici kullanabilir");
  if(!args[0]) return message.channel.send('Oylamanın ne olduğunu belirtiniz')
  const embed = Discord.RichEmbed()
  .setColor(0xffffff)
  .setFooter('Oylamaya tepki veriniz')
  .setDescription(args.join(' '))
  .setTitle(`${message.author.username} tarafından oylama başlatılmıştır`);

  let msg = message.channel.send(embed);
   msg.react('👍');
   msg.react('👎');

  message.delete({timeout: 1000});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'oylama',
  description: 'Bir oylama başlatır',
  usage: 'oylama'
};
