module.exports = {
    name: 'clear',
    description: 'xoa tin nhan',
    execute (message, args){
        if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('Co con cac')
            

            if(!args[1]) return message.reply('Muon xoa bao nhieu thi dien so vao')
            message.channel.bulkDelete(args[1]);
            
    }
}