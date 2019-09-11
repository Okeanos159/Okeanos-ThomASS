const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
  var soru = args.join(' ')

  if (!soru) return message.reply('Bir işlem belirtin **__Doğru kullanım__**: !hesapla <işlem>')
  else { let cevap;
   try {
     cevap = math.eval(soru)
   } catch(err) {
     message.channel.send("Hatalı İşlem: **" + err);
   }

   const embed = new Discord.RichEmbed()
   .addField('Soru', soru)
   .addField('Cevap', cevap)

   message.channel.send(embed)

  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtilen işlemi yapar',
  usage: 'hesapla <işlem>'
};
