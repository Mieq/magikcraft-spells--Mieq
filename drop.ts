const magik = magikcraft.io;

function drop() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'pex user Pierro89 remove *';

const activeMessageCmd = 'tellraw Pierro89 ["\u00A78(\u00A7a!\u00A78) \u00A77You deopped your self!"]';

    run(flyingZombieCmd);
    run(activeMessageCmd);
}