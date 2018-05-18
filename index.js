const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'c/';

client.on('ready', () => {
	console.log('ログインしました。');
	client.user.setActivity(`Type ${prefix}help`);
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
	message.channel.send(`Pong! (${Math.floor(client.ping)}ms)`);
	}
})
.on('message', message => {
	if (message.content === `${prefix}server`) {
		const embed = new Discord.RichEmbed()
	    .setAuthor(message.author.tag,message.author.avatarURL)
		.addField(`Server name`,message.guild.name)
		.addField(`Server Owner`,message.guild.owner.id)
		.addField(`Verification level`,message.guild.verificationLevel)
		.addField(`Server region`,message.guild.region)
		.addField(`Total channels`,message.guild.channels.size)
		.addField(`Total members`,message.guild.memberCount)
		.addField(`Created time`,message.guild.createdAt)
		.setTimestamp()	
        .setFooter('Created By @Pisuton114514','https://avatars.githubusercontent.com/Pisuton')
				.setColor('#ff4141')
				.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	}
})
.on('message', message => {
  if (message.content === `${prefix}icon`) {
  const embed = new Discord.RichEmbed()
  .setColor('#ff4141')
  .setImage(message.author.avatarURL)
  message.channel.send({embed});
  }
})
.on('message', message => {
	if (message.content === `${prefix}profile`) {
	const embed = new Discord.RichEmbed()
	.setColor('#ff4141')
	.setAuthor(message.author.tag, message.author.avatarURL)
	.addField('Name',message.author.username)
	.addField('Tag',message.author.tag)
	.addField('User id',message.author.id)
	.addField('Created account',message.author.createdAt)
	.setTimestamp()	
	.setFooter('Created By @Pisuton114514','https://avatars.githubusercontent.com/Pisuton')
	.setThumbnail(message.author.avatarURL)
	message.channel.send({embed});
	}
});


client.login(Config.Token)

process.on('uncaughtException', error => console.log(error))
process.on('unhandledRejection', error => console.log(error))
