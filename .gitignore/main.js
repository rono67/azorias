const Discord = require ('discord.js')
const bot = new Discord.Client()
var prefix = "."

bot.on('ready', () => {
    console.log("Bot ready !")
})

bot.on('ready', function () {
    bot.user.setGame('.help | Azorias').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
    return channel.send('Bienvenue sur Azorias ' + member.displayName)
    }).catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    
}) 

bot.on('message', function (message) {
    if (message.content === '.ping') {
        message.channel.send('pong')
    }
})

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.lenght).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === prefix + "kick") {
        let modRole = message.guild.roles.find("name", "Permision de kick");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        if(message.mentions.users.size  === 0) {
            return message.reply("Merci de mentionner l'utilisateur à expulser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès`).catch(console.error);
            message.guild.channels.find("name", "log_sanctions").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}`)
        }).catch(console.error)    
    }});

    bot.on('message', message => {
        let command = message.content.split(" ")[0];
        const args = message.content.slice(prefix.lenght).split(/ +/);
        command = args.shift().toLowerCase();

        if (command === prefix + "ban") {
            let modRole = message.guild.roles.find("name", "Permision de ban");
            if(!message.member.roles.has(modRole.id)) {
    var banperm_embed = new Discord.RichEmebd()
    .addField("Tu n'as pas la permission de faire cette commande.", "Tu as besoin de la permission BAN_MEMBERS")
        return message.channel.send(banperm_embed);
            }  
            const member = message.mentions.members.first();
            if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
            member.ban().then(member => {
    var ban_embed = new Discord.RichEmbed()
    .addField(`**${member.user.username}**`, `A été banni du discord par **${message.author.username}**`)
                message.reply(`${member.user.usernme} a été banni avec succès`).catch(console.error);
                message.guild.channels.find("name", "log_sanctions").send(ban_embed)
            }).catch(console.error)
        }});

 bot.on('message', function (message) {
     if (message.content === '.boutique')
    message.reply('Voici la boutique du serveur : http://azoriasboutique.buycraft.net/category/1212936 et merci pour ton argent :)')
 })

bot.on('message', function (message) {
    if (message.content === '.help')
    message.reply("Tu veux connaitre toutes les commandes du bot alors les voici :\n \n**.ip** pour avoir l'ip du serveur,\n \n**.youtube/yt/ytb** pour avoir le lien de la chaîne youtube du serveur,\n \n**.twitter** pour avoir le lien de notre twitter,\n \n**.google** pour faire une recherche internet,\n \n**.boutique** pour acheter des grade pour le serveur,\n \n**.help** pour avoir toutes ces commandes")
})

bot.on('message', function (message) {
    if (message.content === '.ip')
    message.reply("Nous sommes désolé mais le serveur est en développement, tu n'as donc pas le droit d'avoir l'ip du serveur :c.")
})

bot.on('message', function (message) {
    if (message.content === '.recrutement')
    message.reply('Tu veux rejoindre notre projet alors je te laisse lire les critaire de recrutement : \n \n Bonjour / Bonsoir voici le formulaire de candidature pour avoir une chance d"intégrer le staff Azorias ! Merci de tout remplir correctement EN DESSOUS DES QUESTION PAS A CÔTER merci ! \n \n Présentation IRL \n \nFaire un text de minimum 3 ligne qui vous représente. \n \n Vos horaires : \n \n Vos horaires scolaire : \n \n - Lundi : \n \n - Mardi : \n \n - Mercredi : \n \n - Jeudi : \n \n - Vendredi : \n \n - Samedi : \n \n - Dimanche : \n \n Vos horaires en vacance : \n \n - Lundi : \n \n - Mardi : \n \n - Mercredi : \n \n - Jeudi : \n \n - Vendredi : \n \n - Samedi : \n \n - Dimanche : \n \n Presentation IG : \n\n Dites tout ce que vous aimez faire sur les jeux vidéo et plus particulièrement sur mc')
})

bot.on('message', function (message) {
    if (message.content === '.twitter')
    message.reply('Voici le twitter du serveur : https://twitter.com/Azorias1.')
})

bot.on('message', function (message) {
    if (message.content === '.youtube')
    message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
})

bot.on('message', function (message) {
    if (message.content === '.ytb')
    message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
})

bot.on('message', function (message) {
    if (message.content === '.yt')
    message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
})

bot.login('NDc0ODgzMjk1MzI3NTUxNDg5.DoArLw.VDSXFlsPEHl-Wvo1UPQ7TMUcyR0')
