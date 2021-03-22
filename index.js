const Discord = require('discord.js');
const client = new Discord.Client();
var count = 3;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    const specificUsers = ['77219296584933376', '746206965285388370', '476609723769159680'];
    const specificUsers2 = ['354789485449576449'];
    if(specificUsers2.includes(message.author.id)) {
        if (count===0){
            var voiceChannel = message.member.voice.channel;
            if(voiceChannel) {
                await message.guild.member(message.author.id).voice.setChannel('821102487029022820');
                voiceChannel = message.member.voice.channel;
                await voiceChannel.join().then(async connection => {
                    const dispatcher = await connection.play('./audio.mp3');
                    await dispatcher.on("finish", async end => { await voiceChannel.leave()});
                }).catch(console.error);
            }
            count = 3;
        }
        else {
            count = count - 1;
        }
    }


    if(specificUsers.includes(message.author.id)) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'ron');
    	message.react(reactionEmoji);
    }
    const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'jtran');
	message.react(reactionEmoji);
});

client.login(process.env.token)
