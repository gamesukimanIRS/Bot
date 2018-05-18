const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'c/';

client.on('ready', () => {
	console.log('ログインしました。');
	client.user.setActivity(`Type ${prefix}help`);
});
