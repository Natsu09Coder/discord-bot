# discord-bot

## First-time deployment on a server or local

The bot token to get access to Discord is stored in a `.env` file that does not exist by default. Instead, the repository contains a `.env.sample` file that needs to be copied, renamed and edited to set the code expected on this specific environment.

## Running the code locally in dev mode

In dev mode, the local code will be mapped inside the containers, so you can edit and debug locally:

    docker compose up -d --build
    docker compose down

Once the containers are started, the site can be accessed through:

- <http://localhost:8070> to access the web site

Additionally, you can see the logs of the containers or shell into them directly from VSCode: right-click on the container from the docker extension tab and you will see the options.

## Testing in Discord

Use test server and declare this test bot on it. Follow the [Discord guide](https://discordjs.guide/) to set it up.

## References

- <https://discordjs.guide/>
- <https://discord.js.org/#/docs/discord.js/v13/general/welcome>
- <https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/>
- <https://www.sitepoint.com/discord-bot-node-js/>
- <https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js>
