module.exports = {
    async execute(client) {
        client.on('message', message => {
            try {
            if(message.channel.type == 'dm') return;
            const mod = db.fetch(`ModeratorRoleID_${message.guild.id}`)
            if(mod == null) {
                footertext = 'OrangeEchoJS Kernel is not activated, run *setup to activate \nbotOS '+ version +'\nCodename: '+ codename +'\nRemember to wash your hands regularly!\nStay safe during the COVID-19 period!'
            }else if(message.channel.type == 'dm') {
                footertext = 'botOS '+ version +'\nCodename: '+ codename +'\nRemember to wash your hands regularly!\nStay safe during the COVID-19 period!'
            } else {
                footertext = 'botOS '+ version +'\nCodename: '+ codename +'\nRemember to wash your hands regularly!\nStay safe during the COVID-19 period!'
            }
            }catch(error) {
                footertext = 'OrangeEchoJS Kernel is not activated, run *setup to activate \nbotOS '+ version +'\nCodename: '+ codename +'\nRemember to wash your hands regularly!\nStay safe during the COVID-19 period!'
                fs.appendFileSync('../../logs/errors.log', error+'\n')
            }
        })
    }
}