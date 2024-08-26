const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("This is an EMBED!")
      .setDescription("This is a description about embed.")
      .setColor(0xb20e0e)
      .setImage(`https://wallpaperset.com/w/full/7/5/a/61297.jpg`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.youtube.com/@naturerelaxationfilms`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL(`https://www.youtube.com/@dudeperfect`)
      .addFields([
        {
          name: `Fire`,
          value: `Burn`,
          inline: true,
        },
        {
          name: `Water`,
          value: `Cool`,
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
