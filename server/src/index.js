import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import * as commands from './commands.js';

const {
	BOT_TOKEN
} = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
Object.values(commands).forEach(cmd => {
	client.commands.set(cmd.data.name, cmd);
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(BOT_TOKEN);
