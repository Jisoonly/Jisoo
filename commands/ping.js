module.exports ={
    name:'ping',
    desciption: 'cho vui lol',
    execute(msg){
        if(msg.content === 'ping'){
            msg.channel.send('pong'); 
        }
    }
}