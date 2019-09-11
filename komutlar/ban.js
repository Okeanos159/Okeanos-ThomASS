const Discord = require('discord.js');

exports.run = function(client, message, args) {

  if(message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Bu komutu kullanmaya yetkiniz yok")

  let banMember = message.öemtions.members.first() || message.guild.members.get(args[0])
  if(banMember) return message.channel.send("Lütfen banlamak istediğiniz kişinin ismini belirtiniz")

  let reason = args.slice(1).join(" ");
  if(!reason) reason = "Bir sebep belirtin"

  if(!mesage.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Bu komutu kullanmaya yetkim yok")

  message.delete()

  banMember.send(`Merhaba, ${message.guild.name} adlı sunucudan ${reason} sebebiyle banlandınız!`).then(() =>
 message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

 message.channel.send(`${banMember.user.username} kişisi serverden banlandı`)

 let embed = new Discord.RichEmbed()
 .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
 .addField("Yapılan değişiklik:", "ban")
 .addField("Üzerinde:", banMember.user.username)
 .addField("Değişikliği yapan kişi:", message.author.id)
 .addField("Sebep:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === 'tut-modlogs')
    message.channel.send(embed)



};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 3
};

exports.help = {
  name: 'ban',
  description: 'Belirtilen kişiyi banlamaya yarar.',
  usage: 'ban <@kullanıcı> <sebep>'
};
