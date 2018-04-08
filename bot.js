const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('CREATED BY : PITAR HIX');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            https://discord.gg/2yCdFZ | سيرفر الدعم');
  console.log('⚙            PITAR : ibarmoda');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`GrndozaCraftMc Bot / /about | prefix === / | IP : GrndozaCraftMc.aternos.me`,'https://www.twitch.tv/v5bz');
});


client.on("message", msg => {
           var prefix = "/";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});


// -ping
   client.on('message', message => {
     if (message.content === "/ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')

  message.channel.sendEmbed(embed);
    }
});


// -say
var prefix = "/";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


client.on('message', message => {
    if(message.content.includes('discord.gg')){ 
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**ممنوع نشر اي رابط سيرفر ديسكورد :x:**`)
    }
}
});


client.on('message', message => {
    if(message.content === "/about") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**About for this bot**
**Ram Usage : 500 **

**Bot Ram : 10 GB**

**Server Ram : 1100 Mb**

**web Taken : 124 ms**

**Website : aternos.org**

**IP : GrndozaCraftMc.aternos.me**

**Server Website : SoOon**

**Plugins : 53**

**SoftWare : Spigot 1.8.8**

**Versions Plugin : 1.8 / 1.9 / 1.10 / 1.11 / 1.12 you can join**

**Max Players : 500**

**BOT DISCORD : https://discord.gg/HD8mcrD**

**OWNER : pitar**

**Bot Creator : ＰＩＴＡＲ ＩＳ ＨＥＲＥ#5333**

**GrndozaCraftMc Bot | prefix : / **`)
               message.channel.sendEmbed(embed);
           }
});


//اوامر اداريه//
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "/mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "/unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


client.on('message', message => {

       if(message.content === prefix + "/mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "/unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});


var prefix = "/"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت ممعك برمشن Kick Members >:(**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا ممعي برمشن Kick Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المطرود :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 

 
var prefix = "/"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت ممعك برمشن Ban Members >:(**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا ممعي برمشن Ban Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المبند :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name','ترحيب');
     if (!channel) return; 
          let memberavatar = member.user.avatarURL
        let embed = new Discord.RichEmbed()
    .setThumbnail(memberavatar)
       .setColor('BLUE')
       .addField(':sunflower:  حياك الله منور السيرفر',`**[ ${member} ]**`,true)
       .addField(' :levitate: انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
       channel.send(``)
     channel.send({embed:embed});
   });



client.on('guildMemberRemove', member => {
      let channel = member.guild.channels.find('name', 'ترحيب');
        if (!channel) return; 
        let memberavatar = member.user.avatarURL
      let embed = new Discord.RichEmbed()
          .setColor('RED')
          .setThumbnail(member.avatar)
          .addField(':x: لقد خرج ',`**[ ${member} ]**`,true)
          .addField(':man_dancing:  تبقي',`**[ ${member.guild.memberCount} ]**`,true)      
          channel.send(``)
        channel.send({embed:embed});
      });


client.on("roleCreate",  rc => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` + Role Created`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("guildUpdate",  rc => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`+ guild updated`)
  .setDescription(`A guild has been updated \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberKick",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Kicked -`)
  .setDescription(`A member has been kicked by \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberPrune",  rc => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Member Pruned`)
  .setDescription(`A member has been pruned \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberUpdate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Updated`)
  .setDescription(`A member has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberRoleUpdate",  rc => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Updated Roles`)
  .setDescription(`Updated Roles to \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleUpdate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteCreate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Created +`)
  .setDescription(`A Invite Link has been Created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteUpdate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteDelete",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Deleted -`)
  .setDescription(`A invite link deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiUpdate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Updated`)
  .setDescription(`A emoji has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiDelete",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Deleted -`)
  .setDescription(`A emoji has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiCreate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Created + `)
  .setDescription(`A emoji has been created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("messageDelete",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Message Deleted -`)
  .setDescription(`A Message has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
