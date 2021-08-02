import Discord, { MessageEmbed } from "discord.js";
import express from "express";
import code from "./src/code.js";

const {
	NODE_PORT,
	BOT_TOKEN
} = process.env;

const client = new Discord.Client();
const prefix = "/";

client.on("message", function (message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === "welcome") {
		message.delete();

		const ExempleWelcome = new Discord.MessageEmbed()
			.setColor('FFFFFF')
			.setTitle('Welcome !!')
			.setDescription('Bienvenue sur le serveur !\n Amusez-vous sur ce serveur.\n ATTENTION: Le Bot est en cours de developpement\n si il y a un problème contacter un admin.')
			.setThumbnail('https://img.icons8.com/nolan/452/discord-new-logo.png');
		message.channel.send(ExempleWelcome);
	}
	
	if (command === "embed") {
		message.delete();
		let color = '#FFA500';
		if (args[0].startsWith('#')) {
			color = args.shift();
		}
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle(args.shift())
			.setDescription(args.join(' '));
		message.channel.send(exampleEmbed);
	}
	if (command === "ping") {
		message.delete();
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`This message had a latency of ${timeTaken}ms.`);
	}
	if (command === "say") {
		message.delete();
		message.channel.send(args.join(' '));
	}
	if (command === "clear") {
		message.delete();
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas la permission...`);
		if (!args[0]) return message.channel.send("Tu dois spécifier un nombre de messages à supprimer !");
		message.channel.bulkDelete(args[0]).then(() => {
			message.channel.send(`À ton service! (${args[0]}) `).then(msg => msg.delete(5000));

		})
	}
}
);

client.login(BOT_TOKEN);

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use('/api/code', code(db, ADMIN_CODE));

// app.listen(NODE_PORT, function () {
// 	console.log(`App listening on port ${NODE_PORT}!`);
// });