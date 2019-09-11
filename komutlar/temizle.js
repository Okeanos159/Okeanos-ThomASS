const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ');
  if(sayi.length < 1) {
    return message.reply("Silmem için bir miktar belirt!")
  } else {
    message.channel.bulkDelete(sayi);
    message.channel.send('**' + sayi + '** adet nesaj sildim').then(msg => {
      msg.delete("5000")
    });

  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
