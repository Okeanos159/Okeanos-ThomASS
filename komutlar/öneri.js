const Discord = require('discord.js');


exports.run = function(client, message, args) {

 var öneri = args.slice(0).join(' ');
 var guildID = "616325216477380812";
 var channelID = "616326208015171619";
 var user = message.author.username;

 if (!öneri) {
   return message.reply("Bir mesaj belirtin **Doğru kullanımı:** !öneri <mesaj>");
 } else {
   const embed1 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor(0x8E0099)
   .addField("Eylem", "Öneri")
   .addField("Kullanıcı", message.author.tag)
   .addField("ID", message.author.id)
   .addField("Öneri", öneri)
   client.guilds.get(guildID).channels.get(channelID).send(embed1);
   const embed2 = new Discord.RichEmbed()
   .setDescription(`**Öneriniz alınmıştır ${user}! Teşekkür ederiz :hearts:**`)
   .setThumbnail("https://image.shutterstock.com/image-vector/congratulations-banner-confetti-fun-style-260nw-766781656.jpg")
   .setColor(0xD41500)
   .addField("İyi eğlenceler dileriz  ^^", "----------------------")

   message.channel.send(embed2)

  };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öner'],
  permlvl: 0
};

exports.help = {
  name: 'öneri',
description: 'Bot hakkındaki öneriler sahiplerine ulaştırılır',
  usage: 'öneri'
};
