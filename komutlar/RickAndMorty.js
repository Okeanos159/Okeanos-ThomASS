const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
      .setDescription("**__RICK AND MORTY__**")
      .setThumbnail("https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/05/rick-and-morty-main-new-2-9192.jpg?quality=90&strip=all&zoom=1&resize=644%2C453&ssl=1")
      .setColor(0x08f900)
      .addField("Akrabalık", "Rick morty'nin dedesidir", true)
      .addField("Rick", "Rick evrendeki en zeki bilim adamıdır ve torunu morty ile boyutlar arası yolculuk yapmaktadır", true)
      .addField("Özellikler", "Rick sürekli içen ayyaş çok zeki bilim adamıdır. Morty ise korkak cinsellikten aşırı haz alan aptal bir karakterdir")

      message.channel.send(embed)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 0
};

exports.help = {
  name: 'RickAndMorty',
  description: 'Rick and morty adlı dizi hakkında bilgi verir',
  usage: 'RickAndMorty'
};
