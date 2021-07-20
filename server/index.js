import express from "express";
import code from "./src/code.js";

const {
	NODE_PORT,
	BOT_TOKEN
} = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/code', code(db, ADMIN_CODE));

app.listen(NODE_PORT, function () {
	console.log(`App listening on port ${NODE_PORT}!`);
});