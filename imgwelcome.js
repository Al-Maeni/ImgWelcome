const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~                ~  By : Coloring Team ~                     ~');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ "  " ] servers! [ " ${client.guilds.size} " ]`);
client.user.setStatus("dnd");
});


client.on('guildMemberAdd', member => {
    var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';

var back = new Image;
back.src='https://cdn.discordapp.com/attachments/369892762377650187/381332109391822848/275810239.png';

    console.log(back);
     ctx.drawImage(back, 0,0, canvas.width,canvas.height);

ctx.fillText(member.user.username,90, 50);
ctx.fillText('Welcome To Our Server', 50, 110);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

member.guild.channels.get("RoomId-Is-Here").sendFile(canvas.toBuffer());
}).on('ready', () => {
    console.log(`Im ready ${client.user.username}`)
});

client.login('Token-Is-Here');             
