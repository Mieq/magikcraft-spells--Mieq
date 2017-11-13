const magik = magikcraft.io;

function deop() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'pex user Pierro89 remove *';

const activeMessageCmd = 'tellraw @p ["\u00A78(\u00A7a!\u00A78) \u00A77You just deopped your self!"]';

    run(flyingZombieCmd);
    run(activeMessageCmd);
}