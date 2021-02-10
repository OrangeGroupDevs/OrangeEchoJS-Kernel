module.exports = {
	name: 'botunban',
	aliases: ['botunbanish'],
	description: 'Bot unbans a user.',
	botmanager:true,
	mod:true,
	execute(message, args, client) {
	fs.readFile('./botbanned.txt', function(err, data){
		var data = fs.readFileSync('./botbanned.txt', 'utf-8');
		if(!message.mentions.members.first()) {
			if(!data.includes(args[0])){message.channel.send('User not found on the bot ban list. How do you expect me to bot unban someone who isn\'t bot banned???');
    return
    }else{
	  message.channel.send(`<@${args[0]}> is now bot unbanned.`);
	  client.users.cache.get(args[0]).send('You have been bot unbanned by one of the bot developers.')
    }
		var valuetoremove = args[0]
		var newValue = data.replace((valuetoremove), '');
		fs.writeFileSync('./botbanned.txt', newValue, 'utf-8');
		}else{
		if(!data.includes(message.mentions.members.first().id)){message.channel.send('User not found on the bot ban list. How do you expect me to bot unban someone who isn\'t bot banned???');
    return
    }else{
	  message.channel.send(`<@${message.mentions.members.first().id}> is now bot unbanned.`);
	  client.users.cache.get(message.mentions.members.first().id).send('You have been bot unbanned by one of the bot developers.')
    }
		var valuetoremove = message.mentions.members.first().id;
		var newValue = data.replace((valuetoremove), '');
		fs.writeFileSync('./botbanned.txt', newValue, 'utf-8');
}
	})
  }
}