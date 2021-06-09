const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['j'],
            group: 'music',
            memberName: 'join',
            description: 'Ajoute le bot dans le salon vocal.'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message) {

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.say(':x: Tu dois être dans un ptn de vocal pour utiliser ma daronnes.')
        }

        await voiceChannel.join();

        return message.say(":thumbsup: J'ai rejoins " + "`" + voiceChannel.name + "`");
    }
}