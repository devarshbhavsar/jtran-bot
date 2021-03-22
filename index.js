const Discord = require('discord.js');
const client = new Discord.Client();
var count = 5;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    const specificUsers = ['354789485449576449', '342148761776029696', '280070350526480384', '162326384025272320', '331217736417935361', '162227349046165505', '552231236924473394', '342896889387155457', '267061060366761984', '590761165122961418', '77219296584933376'];
    const specificUsers2 = ['354789485449576449'];
    if(specificUsers.includes(message.author.id)) {
        if(count===0) {
            var voiceChannel = message.member.voice.channel;
            if(voiceChannel && message.author.id!='354789485449576449') {
                await message.guild.member(message.author.id).voice.setChannel('795192149381087233');
                voiceChannel = message.member.voice.channel;
                await voiceChannel.join().then(async connection => {
                    const dispatcher = await connection.play('./audio.mp3');
                    await dispatcher.on("finish", async end => { await voiceChannel.leave()});
                }).catch(console.error);
            }
            count = 5;
        }
        else {
            count = count - 1;
        }
    }

    if(message.content.includes('overwatch')) {
        message.channel.send('Lucio? more like dead!');
    }

    if(specificUsers.includes(message.author.id)) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'bruh');
    	message.react(reactionEmoji);
    }
    const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'pog');
	message.react(reactionEmoji);
});

client.login(process.env.token)
