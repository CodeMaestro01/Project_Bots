const {
  SlashCommandBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId("sub-menu")
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Youtube`,
          value: `https://www.youtube.com/`,
        }),
        new SelectMenuOptionBuilder({
          label: "Spotify",
          value:
            "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw?si=CMmTzaBoROmHXSFf37aXig",
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
