const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {

   var user = message.author;
   var reason = args.slice(0).join(" ");
   if(!reason) return message.channel.send("AFk olmak için bir sebep belirtin.");
   db.set(`afk_${user.id}`, reason);
   db.set(`afk_süre_${user.id}`, Date.now())
   const embed = new Discord.RichEmbed()
   .setDescription("**Başarıyla afk moduna girdiniz.**")
   .setColor(0x8B0092)
   .setThumbnail("https://nedemek.com.tr/wp-content/uploads/2013/11/afk-ne-demek-oyunlarda-afk-nın-anlamı-nedir-1200x500.png")
   message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'afk',
  description: 'Kullanıcıyı afk moduna sokar',
  usage: 'afk <sebep>'
};
