module.exports = {
    name: 'xin chao',
    description: "xin chao",
    execute(msg){
        if(msg.content === "xin chao"){
            msg.channel.send('chao cai lon')
        }
    }
}