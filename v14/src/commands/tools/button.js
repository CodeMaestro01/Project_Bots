const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Returns a button!"),
  async execute(interaction, client) {
    const button1 = new ButtonBuilder()
      .setCustomId("youtube")
      .setLabel("Click here for Youtube!")
      .setStyle(ButtonStyle.Primary);
    const button2 = new ButtonBuilder()
      .setCustomId("spotify")
      .setLabel("Click here for Spotify!")
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button1, button2)], // creating a button and passing it as a component into the ActionRow and then passing this as a component into the channel.
    });
  },
};
