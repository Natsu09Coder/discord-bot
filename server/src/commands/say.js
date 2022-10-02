import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('say')
    .setDescription('Say something to me!!!')
    .addStringOption(option =>
        option
            .setName('text')
            .setDescription('What do you have to say to me?')
            .setRequired(true));

export async function execute(interaction) {
    const text = interaction.options.getString('text');
    await interaction.reply(text);
}