const Discord = require('discord.js'); //Botumuzu bu kod sayesinde tanımlarız.
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} sunucuya giriş yaptı!`); //Botunuzun sunucuya giriş yaptığını gösterir.
    
    
    client.user.setActivity(`Bu bir taslaktır!`); //Bu haliyle "Bu bir taslaktır! Oynuyor" gibi gözükür, istediğiniz gibi değiştirebilirsiniz.
    });

    client.on('message', message => { //Gerekli bir koddur silmeyiniz, sonraki yazacağımız mesaj kodlarında işe yarar.
    
    if(message.content === "merhaba"){
        message.reply("Size de merhaba!") //Bu kod ise şu işe yarar: "merhaba" dendiğinde etiketleyerek "Size de merhaba!" olarak karşılık verir, yine istediğiniz gibi kişiselleştirebilirsiniz.
    }
    if(message.content === ""){
        message.channel.send("Aleykümselam!") //Önceki koddan farkı, etiketlemeyerek cevap vermesidir.
    }
    

    });

    client.login ("BOTUNUZUN TOKENİNİ BURAYA YAZINIZ"); //Botun çalışması için çok gerekli bir komut, tokeni doğru yazdığınızdan emin olunuz.