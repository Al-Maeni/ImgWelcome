const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~                ~  By : Coloring Team ~                     ~');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
client.user.setStatus("dnd");
});


client.on('guildMemberAdd', member => {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , Image1 = new Canvas.Image(member.user.avatarURL)
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  
  
Image.src = canvas.toBuffer();
Image1.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.drawImage(Image1, 0, 0, Image1.width / 90, Image1.height / 50);
ctx.fillText(member.user.username,90, 50);
ctx.fillText('حياك الله منور السيرفر', 50, 110);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

member.guild.channels.get("RoomId-Is-Here").sendFile(canvas.toBuffer());
}).on('ready', () => {
    console.log(`Im ready ${client.user.username}`)
});
client.login('Token-Is-Here');             
