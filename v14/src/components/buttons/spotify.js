module.exports = {
  data: {
    name: "spotify",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw?si=CMmTzaBoROmHXSFf37aXig",
    });
  },
};
