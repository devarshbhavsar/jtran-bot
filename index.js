const Discord = require('discord.js');
const client = new Discord.Client();
var count = 0;

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
        count = 0;
    }
    else {
        count = count - 1;
    }

    if(message.content.includes('overwatch')) {
        message.channel.send('Lucio? more like dead!');
    }
});

client.login(process.env.token)
