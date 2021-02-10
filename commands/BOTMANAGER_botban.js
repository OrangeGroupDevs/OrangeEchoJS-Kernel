module.exports = {
	name: 'botban',
	aliases: ['botbanish'],
	description: 'Bot bans a user.',
	botmanager:true,
	mod:true,
	execute(message, args, client) {
	fs.readFile('./botbanned.txt', function(err, data){
        if(!client.users.cache.get(args[0]))return message.channel.send('User doesn\'t exist')
		if(data.includes(args[0])){message.channel.send(`This user is already botbanned. How do you expect me to blacklist someone who's already blacklisted?!`);
    return;
    }else{
		fs.appendFile('./botbanned.txt', `${args[0]}\n`, function(err,){})
		message.channel.send(`<@${args[0]}> (${args[0]}) was bot banned. Phew, no more bot abusers.`)
        client.users.cache.get(args[0]).send('You have been bot banned by one of the bot developers. To appeal, go ahead to https://forms.gle/1W47TA11vPPb4PUp6 and fill in the form.')
		}
})
	}
}