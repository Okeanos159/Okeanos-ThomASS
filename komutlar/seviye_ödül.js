const Discord = require('discord.js');
const db = require('quick.db');

exports.run = function(client, message, args) {

  var user = message.author;
  var role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
  if(!role) return message.channel.send("Bir rol veya rol id si belirtin.");
  var lvl = args[1];
  if(!lvl) return message.channel.send("Bir seviye belirtin.");

  db.set(`role_${message.guild.id}_${lvl}seviye`, role.id);
  message.channel.send(lvl + " ödül rolü başarıyla @" + role.name +  " olarak ayarlandı.");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'seviye-ödül',
  description: 'Belirtilen seviye olunca kullanıcıya verilecek olan rolleri belirler',
  usage: 'seviye-ödül <@rol | rol_id> <seviye>'
};
