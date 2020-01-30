const Discord = require('discord.js);
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    consol.log("Connectedç)
});

bot.login("NjcyNDU4Nzg5MTY4ODczNDgx.XjMUbg.RlGUMtXyDZKS3SZ_VUTeMzHsJvw");*

bot.on('message', message => {
    it (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonujour. :)");
        console.log("Commande Salut effectué");
    }
});
