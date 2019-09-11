const Discord = require('discord.js');


exports.run = function(client, message) {

   const embed = new Discord.RichEmbed()
    .setDescription("**Termodinamik!..**")
    .setColor(0xD12525)
    .addField("**Termodinamik:** ", "Termodinamik ısıyı, sıcaklığı ve enerjiyi konu alan bilim dalıdır. Termodinamik ile ilgili araştırmalar 19. yüzyılda başlamıştır. Sanayi devrimine yol açan pek çok teknoloji, örneğin buhar makinesi, termodinamik bilgileri sayesinde geliştirilmiştir.")
    .addField("Devamı =>", "Termodinamik 0, 1, 2, 3 olmak üzer 4 temel yasaya sahiptır" )
    .setThumbnail("https://www.evrenbilim.com/wp-content/uploads/2018/05/termodinamik.jpg")
    .addField("0. Yasa:", "İki sistem birbirleriyle etkileşirken durumları değişmiyorsa dengede oldukları söylenir. İki sistem, üçüncü bir sistemle ayrı ayrı dengedelerse, bu sistemler kendi aralarında da dengededir.", true)
    .addField("1. Yasa:", "Enerji yaratılamaz ya da yok edilemez, ancak bir biçimden başka bir biçime dönüşebilir.", true)
    .addField("2. Yasa:", "Kendiliğinden meydana gelen tüm doğal süreçler entropinin artırdığı yönde ilerler. Entropi, en genel anlamıyla düzensizliğin bir ölçüsüdür. Örneğin bu yasa sıcak cisimlerden soğuk cisimlere ısı akışı olacağını söyler.", true)
    .addField("3. Yasa:", "Sıcaklık mutlak sıfıra yaklaşırken entropi sıfıra yakınsar. Mutlak sıfır sıcaklığı Celsius ölçeğinde -273,15 dereceye, Kelvin ölçeğinde ise 0 dereceye karşılık gelir.", true)
    .setFooter("Konu: Bilim")
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['termod'],
  permlvl: 0
};

exports.help = {
  name: 'termodinamik',
  description: 'Termodinamik hakkında bilgi verir',
  usage: 'termodinamik'
};
