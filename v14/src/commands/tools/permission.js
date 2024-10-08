const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
  PermissionOverwrites,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("permission")
    .setDescription("This command requires permission!"),
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1276896770143817800")
      .catch(console.error);

    const testRole = await interaction.guild.roles
      .create({
        name: `Test`,
        permissions: [PermissionsBitField.Flags.KickMembers],
      })
      .catch(console.error);

    // Has role
    if (roles.cache.has("1276896770143817800")) {
      await interaction.deferReply({
        fetchReply: true,
      });

      await roles.remove(role).catch(console.error);
      await interaction.editReply({
        content: `Removed ${role.name} role from you and have been given ${testRole.name} role.`,
      });
      await roles.add(testRole).catch(console.error);
    } else {
      await interaction.reply({
        content: `You do not have the ${role.name} role.`,
      });
    }

    await testRole
      .setPermissions([PermissionsBitField.Flags.BanMembers])
      .catch(console.error);

    const channel = await interaction.guild.channels.create({
      name: `test`,
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
        {
          id: testRole.id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],
    });

    await channel.permissionOverwrites
      .edit(testRole.id, { SendMessages: false })
      .catch(console.error);
  },
};
