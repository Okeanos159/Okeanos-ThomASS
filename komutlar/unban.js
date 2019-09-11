const Discord = require('discord.js');
const client = new Discord.Client();
const sahip = "342047735803019266";
const bot_id = "589875354324434954";

exports.run = function(client, message, args) {

  if(!message.author.id === sahip) return message.channel.send("Bu komudu kullanmak için yetkiniz yok!")
  if(!message.author.id === bot_id) return;

   let bannedMember = args.slice(0).join(" ")
      if(!bannedMember) return message.channel.send("Lütfen banlanıcak kişiyi belirtin")

   let reason = args.slice(1).join(" ")
      if(!reason) reason = "Hiçbir sebep belirtilmedi"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Bu komutu kullanmaya yetkim yok") |
   message.delete()

   try {
     message.guild.unban(bannedMember, {reason: reason})
     message.channel.send(`${bannedMember.tag} kişisinin banı kaldırıldı`)
   } catch(e) {
     console.log(e.message)
   }

  let embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .addField("Düzenleme:", "ban")
  .addField("Uygulanan kişi:", `${bannedMember.username} (${bannedMember.id})`)
  .addField("Düzenlemeyi yapan kişi:", message.author.username)
  .addField("sebep:", reason)
  .addField("Zaman:", message.createdAt.toLocaleString())

     let sChannel = message.guild.channels.find(c => c.name === "tut-modlogs")
     message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
