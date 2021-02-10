module.exports = {
    name: 'crashbot',
    aliases: ['crash'],
    description: 'Crashes the bot.',
    usage: '',
    cooldown: 0,
      execute(message, args, client) {
          message.channel.send('Bot has been crashed.')
          process.exit()
      }
    }