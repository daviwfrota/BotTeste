const Discord = require("discord.js");
const client = new Discord.ClientUser();


client.on("ready", () => {
    console.log('O bot está sendo iniciado, com ${client.user.size} usúarios.');
    client.username.setGame('Estou em $(client.guilds.size} servidores.');
});

client.on("message", async message =>{
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();

    if(comando = "ping"){
        const m = await message.channel.send("Ping?");
        m.edit('| Ping | A latência é ${m.createdTimestamp - message.createdTimestamp} ms');
    }

});

client.login(config.toke);