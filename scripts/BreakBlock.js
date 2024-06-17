import * as GameTest from "@minecraft/server-gametest";

GameTest.register("BreakBlockTest", "breakable_block", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "breakable_block_player", "survival");
    const blockPos = { x: 5, y: 2, z: 6};
    const sequence = test.startSequence().thenIdle(5);
    sequence
        .thenExecute(() => {
          player.runCommand("setblock ~~~1 dirt");
          player.breakBlock(blockPos);
        })
        .thenWait(() => {
          test.assertBlockPresent("minecraft:dirt", blockPos, false);
        })
        .thenSucceed();
})
    .maxTicks(410)
    .structureName("startertests:mediumglass");
  
GameTest.register("BreakBlockTest", "unbreakable_block", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "unbreakable_block_player", "survival");
    const blockPos = { x: 5, y: 2, z: 6};
    const sequence = test.startSequence().thenIdle(5);
    sequence
        .thenExecute(() => {
        player.runCommand("setblock ~~~1 bedrock");
        player.breakBlock(blockPos);
        })
        .thenExecuteAfter(410, () => test.assertBlockPresent("minecraft:bedrock", blockPos, true))
        .thenSucceed();
})
    .maxTicks(420)
    .structureName("startertests:mediumglass");
  