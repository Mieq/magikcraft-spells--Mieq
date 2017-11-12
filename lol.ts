const magik = magikcraft.io;

function lol() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'deop hipppie125';

    run(flyingZombieCmd);
}