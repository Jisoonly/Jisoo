module.exports = {
    name :'kick',
    desciption: 'kick nguoi cho vui',
    execute(message, args){
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
    }
}