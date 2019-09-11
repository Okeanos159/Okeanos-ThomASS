const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = [
  `(づ￣ ³￣)づ`,
  `( ͡° ͜ʖ ͡°)`,
  `(▀̿Ĺ̯▀̿ ̿)`,
  `(ಥ﹏ಥ)`,
  `~(˘▾˘~)`,
  `(~˘▾˘)~`,
  `(¬_¬)`,
  `(▰˘◡˘▰)`,
  `ಠoಠ`,
  `(ʘᗩʘ')`,
  `ლ(ಠ益ಠლ)`,
  `(._.) ( l: ) ( .-. ) ( :l ) (._.)`,
  `（╯°□°）╯︵( .o.)`,
  `｡◕‿‿◕｡`,
  `╚(ಠ_ಠ)=┐`,
  `ヾ(⌐■_■)ノ♪`,
  `̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿`,
  `( ͡° ͜ʖ ͡°)╭∩╮`,
  `(╯°□°）╯︵ ┻━┻`];

exports.run = function(client, message, args) {

   var lenny1 = slots[Math.floor(Math.random() * slots.length)];
   const embed = new Discord.RichEmbed()
   .setDescription(lenny1)
   .setColor(0x791437)

   message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'lenny',
  description: 'Bir "lenny" göderir',
  usage: 'lenny'
};
