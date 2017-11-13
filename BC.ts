const magik = magikcraft.io;

function BC() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'tellraw @a ["\u00A78(\u00A74ALERT) \u00A77${message}"]';


    run(flyingZombieCmd);
}