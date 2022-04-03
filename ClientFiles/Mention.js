
const { Client, MessageEmbed } = require('discord.js');
const lc = require('../translations/default/cmd.js');

module.exports = (client) => {
  client.on("messageCreate", (message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

    if (message.mentions.has(client.user.id)) {

    const Menção = new MessageEmbed()
      .setTitle(lc.mention.title)
      .setDescription(lc.mention.description)
      .setColor(lc.mention.color)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      message.channel.send({ embeds: [Menção] });
    };
});
}