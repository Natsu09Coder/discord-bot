import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Make your own custom embed!')

    .addStringOption(option =>
        option
            .setName('title')
            .setDescription('Choose a title')
            .setRequired(true))
    .addStringOption(option =>
        option
            .setName('description')
            .setDescription('Write a description')
            .setRequired(true))
    .addStringOption(option =>
        option
            .setName('color')
            .setDescription('Choose a color'));

export async function execute(interaction) {
    const color = interaction.options.getString('color') ?? 'FFA500';
    const title = interaction.options.getString('title');
    const description = interaction.options.getString('description');
    const exampleEmbed = new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(description);
    await interaction.reply({ embeds: [exampleEmbed] });
}
