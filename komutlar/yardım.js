const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix1 = ayarlar.prefix;

exports.run = function(client, message) {

 const embed = new Discord.RichEmbed()
   .setDescription("**__KOMUTLAR__**", "")
   .setColor(0x19BBAB)
   .addField(` **${prefix1}8ball <soru>** `, "-Herhangi bi sorunuza cevap verir")
   .addField(` **${prefix1}afk <sebep>** `, "-Kişiyi afk moduna sokar")
   .addField(` **${prefix1}avatar** `, "-Avatarınızı gösterir")
   .addField(` **${prefix1}emojiyazı <yazılmak istenen şey>** - ${prefix1}emojiy <yazılmak istenen şey> `, "-İstediğiniz şeyi emojiler ile yazar")
   .addField(` **${prefix1}jackpot** - ${prefix1}jp`, "-Bir jackpot oynarsınız")
   .addField(` **${prefix1}lenny** `, "-Bir 'lenny' gönderir")
   .addField(` **${prefix1}level <kişi>** `, "-Kişinin levelini gösterir")
   .addField(` **${prefix1}seviye-ödül <rol veya rol id si> <rol için gereken level>** `, "-Belirli seviye için ödül oluşturur")
   .addField(` **${prefix1}şifre <şifre uzunluğu>** `, "-İstenen uzunlukta bir şifre oluşturur")
   .addField(` **${prefix1}stresçarkı** - ${prefix1}stresç`, "-Bir stresçarkı çevirir")
   .addField(` **${prefix1}yazıtura** - ${prefix1}yt`, "-Yazı-tura oynarsınız")
   .addField(` **${prefix1}ping** - ${prefix1}p`, "-Botun pingini göterir")
   .addField(` **${prefix1}RickAndMorty** `, "Rick and Morty hakkında bilgi verir")
   .addField(` **${prefix1}servericon** `, "Serverin ikonunu gösterir")
   .addField(` **${prefix1}zar** `, "Bir zar atar")
   .addField(` **${prefix1}termodinamik** - ${prefix1}termod` , "Termodinamik hakkında bikgi verir")

   message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['komutlar'],
  permlvl: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut listesini gösterir.',
  usage: 'yardım'
};
