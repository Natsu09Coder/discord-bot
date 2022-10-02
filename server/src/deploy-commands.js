import { REST, Routes } from 'discord.js';
import * as commands from './commands.js';

const {
	BOT_TOKEN,
    CLIENT_ID,
    GUILD_ID
} = process.env;

const cmds = Object.values(commands).map(cmd => {
	return cmd.data.toJSON();
});

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${cmds.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: cmds },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
