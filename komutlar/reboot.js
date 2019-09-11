const Discord = require('discord.js');


exports.run = function(client, message) {

  const embed = new Discord.RichEmbed()
  .setDescription("**Hemencecik geliyorum!!**")
  .setColor(0x2924B3)
  .setThumbnail("https://media.giphy.com/media/1msH5HVV15d9eDglxh/giphy.gif")

  message.channel.send(embed).then(msg => {
    console.log("Bot Yeniden Başlatılıyor")
    process.exit(0);
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 3
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlanır',
  usage: 'reboot'
};
