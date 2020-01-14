const Discord = require('discord.js');
const bot = new Discord.Client();
const {Client, RichEmbed} = require('discord.js');
const client = new Client();

const prefix = 'j!';

bot.on('ready', ()  =>{
    console.log('Jisoo is online!');
    bot.user.setActivity('BlackPink', {type: 'LISTENING'}).catch(console.error);
})

bot.on('message', msg=>{
    if(msg.content === "xin chao"){
        msg.channel.sendMessage('chao cai lon')
   }

})

bot.on('message', msg=>{
    if(msg.content === "dit con me may"){
        msg.channel.sendMessage('giang')
   }

})

bot.on('message', msg =>{
    if(msg.content ==="tri"){
        msg.channel.sendMessage('chet roi')
    }
})

bot.on('message', msg=>{
    if(msg.content === "ha giang"){
        msg.channel.sendMessage('dit con me may giang')
   }

})

bot.on('message', msg => {
    if(msg.content === "ping"){
        msg.channel.sendMessage('pong!')
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case'kick':

        if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('Co con cac')
        

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick('Ban da bi kick hihi').then(() =>{
                        message.reply(`Kick ban ${user.tag} mat rui huhu `);
                    }) .catch(err =>{
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else{
                    message.reply("That user isn\'t in the server")
                } 
            } else{
                message.reply("Chon nguoi may man di")
            }

        break;
    }
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){

        case 'clear':

            if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('Co con cac')
            

            if(!args[1]) return message.reply('Muon xoa bao nhieu thi dien so vao')
            message.channel.bulkDelete(args[1]);
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


bot.on('message', msg =>{
    if(msg.content === 'giang'){
        msg.channel.sendMessage('https://cdn.discordapp.com/attachments/662294088414003210/664858230429581384/9-1_Opt.jpg')
    }

})

bot.on('message', msg =>{
    if(msg.content === 'Giang'){
        msg.channel.sendMessage('https://cdn.discordapp.com/attachments/662294088414003210/664858230429581384/9-1_Opt.jpg')
    }

})

// BOT LOGIN
bot.login(process.env.token);
