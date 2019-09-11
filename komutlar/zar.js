const Discord = require('discord.js');
const variables = ["1", "2", "3", "4", "5", "6"];

exports.run = function(client, message) {

  var variable = variables[Math.floor(Math.random() * variables.length)];
  const embzaratma = new Discord.RichEmbed()
  .setDescription("**İyice sallanıyor!..**")
  .setImage("https://media.giphy.com/media/Q7FwieH6L4VME2jL7m/giphy.gif")
  .setColor(0x2E2EFE)
  message.channel.send(embzaratma).then(msg => {
    msg.delete("4200")
  });
  setTimeout(() => {
    if(variable === "1") {
      const embed1 = new Discord.RichEmbed()
      .setDescription("**__Gusül Şart Koçum!..__**")
      .setThumbnail("http://gifdownload.net/wp-content/uploads/2019/01/animated-dice-gif-1.gif")
      message.channel.send(embed1)
    }
    if(variable === "2") {
      const embed2 = new Discord.RichEmbed()
      .setDescription("**__Biraz dinlensek mi ne?__**")
      .setThumbnail("https://1.bp.blogspot.com/-L2k1MTUromw/WLl5AQqjj-I/AAAAAAAGPYY/XZVzHEgB2BgYioRjbPF6Mj3vAulf4-lGQCLcB/s1600/AW385985_01.gif")
      message.channel.send(embed2)
    }
    if(variable === "3") {
      const embed3 = new Discord.RichEmbed()
      .setDescription("**__Pehh..__**")
      .setThumbnail("https://2.bp.blogspot.com/-WfqPKTf_rfw/WLl5AQWbc-I/AAAAAAAGPYc/Fd_mQzrsztkCVO1_VZoe1-kpTvqr1PDWwCLcB/s1600/AW385985_02.gif")
      message.channel.send(embed3)
    }
    if(variable === "4") {
      const embed4 = new Discord.RichEmbed()
      .setDescription("**__Olacak Olacak__**")
      .setThumbnail("https://3.bp.blogspot.com/-wdMRdiEJuNA/WLl5Aw0V3yI/AAAAAAAGPYg/M4lYALjSk10fe1dANrNptKB5SzaOmoEtgCLcB/s1600/AW385985_03.gif")
      message.channel.send(embed4)
    }
    if(variable === "5") {
      const embed5 = new Discord.RichEmbed()
      .setDescription("**__Ha Gayret Yiğidim!__**")
      .setThumbnail("https://2.bp.blogspot.com/-5r0l6TgYUcA/WLl5BIGyXAI/AAAAAAAGPYk/u2xK9dlWBKs_kMsBSrmJzWukCSPA30IKwCLcB/s1600/AW385985_04.gif")
      message.channel.send(embed5)
    }
    if(variable === "6") {
      const embed6 = new Discord.RichEmbed()
      .setDescription("**__Bummm be yarag!__**")
      .setThumbnail("https://2.bp.blogspot.com/-9CPLBzeYYuA/WLl5BlM7GTI/AAAAAAAGPYo/5Toh_N8d76EZHeFGRfF8mFTj22pU39UzwCLcB/s1600/AW385985_05.gif")
      message.channel.send(embed6)
    }
  },5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'zar',
  description: 'Bir zar atar',
  usage: 'zar'
};
