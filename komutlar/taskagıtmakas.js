const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const obj = ['taş', 'kağıt', 'makas'];

exports.run = function(client, message, args) {

  var choosen = args.slice(0).join(" ");
  if(!choosen) return message.channel.send('Bir seçim yapınız!. **Doğru kullanımı :** !tkm taş, kağıt, makas');

  const embedload = new Discord.RichEmbed()
  .setDescription("**YÜKLENİYOR!....**")
  .setThumbnail("https://thumbs.gfycat.com/RegalAssuredGossamerwingedbutterfly-size_restricted.gif")
  .setColor(0x2C3E50)
  message.channel.send(embedload).then(msg => {
    msg.delete("4200")
  });
  setTimeout(() => {
    var user = message.author.tag;
  var obj1 = obj[Math.floor(Math.random() * obj.length)];
  var obj2 = choosen;

  if(obj1 === obj2) {
    const embed1 = new Discord.RichEmbed()
    .setDescription("**__Taş-Kağıt-Makas__**")
    .setColor(0xCA6F1E)
    .addField("**BOT:**", obj1)
    .addField(user, obj2)
    .addField("___Berabere___, sıkıcıııı!..", ":sleeping:")
    message.channel.send(embed1);
  }

  if(obj1 == 'taş' && obj2 == 'makas' || obj1 == 'kağıt' && obj2 == 'taş' || obj1 == 'makas' && obj2 == 'kağıt') {
    const embed2 = new Discord.RichEmbed()
    .setDescription("**__Taş-Kağıt-Makas__**")
    .setColor(0xC0392B)
    .addField("**BOT:**", obj1)
    .addField(user, obj2)
    .addField(`___Kaybettin___, birahaki sefere ${user}.`, ":sob:")
    message.channel.send(embed2);
  }

  if(obj1 == 'makas' && obj2 == 'taş' || obj1 == 'taş' && obj2 == 'kağıt' || obj1 == 'kağıt' && obj2 == 'makas') {
    const embed3 = new Discord.RichEmbed()
    .setDescription("**__Taş-Kağıt-Makas__**")
    .setColor(0x239B56)
    .addField("**BOT:**", obj1)
    .addField(user, obj2)
    .addField(`___Kazandın___, tebrikler ${user}.`, ":hugging:")
    message.channel.send(embed3);
  }
}, 5 * 1000);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tkm'],
  permlvl: 0
};

exports.help = {
  name: 'taş-kağıt-makas',
  description: 'Bot ile taş-kağıt-makas oynarsın',
  usage: 'taş-kağıt-makas'
};
