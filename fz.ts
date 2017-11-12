const magik = magikcraft.io;

function fz() {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    const flyingZombieCmd = 'summon minecraft:lightning_bolt ~ ~ ~';

const activeMessageCmd = 'tellraw @p ["\u00A78(\u00A7a!\u00A78) \u00A77You summoned a thunder bolt\u00A7f..."]';

    run(flyingZombieCmd);
    run(activeMessageCmd);
}