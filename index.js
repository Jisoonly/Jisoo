const Discord = require('discord.js');
const bot = new Discord.Client();
const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const prefix = 'j!';

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', ()  =>{
    console.log('Jisoo is online!');
    bot.user.setActivity('BlackPink', {type: 'LISTENING'}).catch(console.error);
})

bot.on('message', message => {
    if(msg.content === "chis"){
        msg.channel.send('https://cdn.discordapp.com/attachments/662294088414003210/710908599534354502/Discord_2020-01-30_17-35-08.jpg')
    }
}

const Mạnh = ["Mạnh"];
bot.on('message', message => {
    if( Mạnh.some(word => message.content.includes(word))){
        message.channel.send("Địt mẹ thằng bê đê")
    }
})

const jisoo = ["jisoo"];
bot.on('message', message => {
    if( jisoo.some(word => message.content.includes(word))){
        message.channel.send("Thang nao nhac den bo m day")
    }
})


bot.on('message', msg =>{
    bot.commands.get('tri').execute(msg);
})


bot.on('message', msg=>{
    bot.commands.get('owner').execute(msg);
        
    })

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case'kick':
    bot.commands.get('kick').execute(message, args);
        break;
    }
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){

        case 'clear':
    bot.commands.get('clear').execute(message, args);
        break;
    }
})


bot.on('message', message=> {
    let args= message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case'help':
        const embed = new RichEmbed()
        .setTitle("Deo co gi dau")
        .setColor(0xff33cc)
        .setDescription("Lam lon gi co lenh ma xem bo m lam ra con bot chi de kick nguoi khac thoi")

    message.author.send(embed);
        break;
    }
})

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "vote":
            const Embed = new RichEmbed ()
            .setColor (0xff33cc)
            .setTitle("Vote")
            .setDescription("Dung de tao vote deo vote la bu lon do con")

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📝" + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(500).catch(console.error);
            })

        break;
    }
})

// BOT LOGIN
bot.login(process.env.token);
