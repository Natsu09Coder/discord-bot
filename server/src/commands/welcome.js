import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('welcome')
    .setDescription('Adds a welcoming message.');

export async function execute(interaction) {
    const exampleWelcome = new EmbedBuilder()
        .setColor('FFFFFF')
        .setTitle('Welcome !!')
        .setDescription('Bienvenue sur le serveur !\n Amusez-vous sur ce serveur.\n ATTENTION: Le Bot est en cours de developpement\n si il y a un problème contacter un admin.')
        .setThumbnail('https://img.icons8.com/nolan/452/discord-new-logo.png');
    await interaction.reply({ embeds: [exampleWelcome] });
}
