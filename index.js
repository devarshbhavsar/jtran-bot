const Discord = require('discord.js');
const client = new Discord.Client();
var count = 50;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    if(count===0) {
        var voiceChannel = message.member.voice.channel;
        if(voiceChannel) {
            //await message.guild.member(message.author.id).voice.setChannel('795192149381087233');
            //voiceChannel = message.member.voice.channel;
            await voiceChannel.join().then(async connection => {
                const dispatcher = await connection.play('./audio.mp3');
                await dispatcher.on("finish", async end => { await voiceChannel.leave()});
            }).catch(console.error);
        }
        count = 50;
    }
    else {
        count = count - 1;
        console.log(count);
    }

    if(message.content.includes('overwatch') || message.content.includes('Overwatch')) {
        message.channel.send('Lucio? more like dead!');
    }
    if(message.content.includes('lucio') || message.content.includes('Lucio')) {
        message.channel.send('Lucio? more like dead!');
    }
});

client.login(process.env.token)
