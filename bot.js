const Discord = require('discord.js'); //Botumuzu bu kod sayesinde tanımlarız.
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} sunucuya giriş yaptı!`); //Botunuzun sunucuya giriş yaptığını gösterir.
    
    
    client.user.setActivity(`Bu bir taslaktır!`); //Bu haliyle "Bu bir taslaktır! Oynuyor" gibi gözükür, istediğiniz gibi değiştirebilirsiniz.
    });

    client.on('message', message => { //Gerekli bir koddur silmeyiniz, sonraki yazacağımız mesaj kodlarında işe yarar.
    
        //KICK (ATMA)
  if (!message.guild) return;


  if (message.content.startsWith(prefix + 'kick')) {

    const user = message.mentions.users.first();

    if (user) {
      if (!message.member.hasPermission("ADMINISTRATOR" , "KICK_MEMBERS")) return message.reply(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız!`);
     
      const member = message.guild.member(user);

      if (member) {

        member
          .kick('Kötü davrandı!')
          .then(() => {
  
            message.reply(`${user.tag} başarıyla sunucudan atıldı!`);
          })
          .catch(err => {   
  
            message.reply('Hata!');
    
            console.error(err);
          });
      } else {
    
        message.reply("Bu kullanıcı sunucuda değil!");
      }

    } else {
      message.reply("Kullanıcı belirtmelisiniz!");
    }
  }

        
        //BAN (YASAK)
  if (!message.guild) return;


  if (message.content.startsWith(prefix + 'ban')) {

    const user = message.mentions.users.first();
    
    if (!message.member.hasPermission("ADMINISTRATOR" , "BAN_MEMBERS")) return message.reply(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız!`);
    
    if (user) {
  
      const member = message.guild.member(user);
 
      if (member) {

        member
          .ban({
            reason: 'Kötü davrandı!',
          })
          .then(() => {

            message.reply(`${user.tag} başarıyla yasaklandı (banlandı)!`);
          })
          .catch(err => {
    
            message.reply('Hata!');
      
            console.error(err);
          });
      } else {
    
        message.reply("Bu kullanıcı sunucuda değil!");
      }
    } else {
    
      message.reply("Kullanıcı belirtmelisiniz!");
    }
  }
        
        
    if(message.content === "merhaba"){
        message.reply("Size de merhaba!") //Bu kod ise şu işe yarar: "merhaba" dendiğinde etiketleyerek "Size de merhaba!" olarak karşılık verir, yine istediğiniz gibi kişiselleştirebilirsiniz.
    }
    if(message.content === "sa"){
        message.channel.send("Aleykümselam!") //Önceki koddan farkı, etiketlemeyerek cevap vermesidir.
    }
    

    });

    client.login ("BOTUNUZUN TOKENİNİ BURAYA YAZINIZ"); //Botun çalışması için çok gerekli bir komut, tokeni doğru yazdığınızdan emin olunuz.
