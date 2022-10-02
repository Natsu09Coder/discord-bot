import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('clear')
    .setDescription('clear some messages.')
    .addStringOption(option =>
        option
            .setName('number')
            .setDescription('number of messages to delete.')
            .setRequired(true));

export async function execute(interaction) {
    const number = interaction.options.getString('number');
    try {
        await interaction.channel.bulkDelete(number);
        await interaction.reply(`${number} messages have been deleted.`);
    } catch (err) {
        console.error(err);
        interaction.reply({ content: `Error: ${err}`, ephemeral: true })
    };
}