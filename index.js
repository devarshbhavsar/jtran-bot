const Discord = require('discord.js');
const client = new Discord.Client();
const Chatbot  =  require("discord-chatbot");
const chatbot  =  new  Chatbot({name: "Jtran", gender: "Male"});
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

    if(message.content.startsWith('~') || message.author.id !='822896468024885279'){
        var text = message.content.substring(1);
        chatbot.chat(text).then(text => message.channel.send(text)).catch(e => console.log(e));
    }

    if(message.content.includes('overwatch')) {
        message.channel.send('Lucio? more like dead!');
    }
    else if(message.content.includes('lucio')) {
        message.channel.send('Lucio? more like dead!');
    }
});

client.login(process.env.token)
