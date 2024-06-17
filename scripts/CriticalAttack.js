import * as GameTest from "@minecraft/server-gametest";

GameTest.register("CriticalAttackTest", "critical_attack", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "critical_attack", "survival");
    const cowPos = { x: 5, y: 2, z: 6};
    const cow = test.spawn("minecraft:cow<minecraft:ageable_grow_up>", cowPos);
    let hitCount = 0;
    test
      .startSequence()
      .thenWait(() => {
        player.lookAtEntity(cow);
        player.jump();
        if (player.getVelocity().y < -0.3 && player.attackEntity(cow)) {
          hitCount++;
        }
        test.assert(hitCount === 7, "Failed to do 7 attacks");
      })
      .thenExecute(() => {
        test.assertEntityPresentInArea("cow", false);
      })
      .thenSucceed();
})
    .maxTicks(200)
    .structureName("startertests:mediumglass");

GameTest.register("CriticalAttackTest", "regular_attack", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "regular_attack", "survival");
    const cowPos = { x: 5, y: 2, z: 6};
    const cow = test.spawn("minecraft:cow<minecraft:ageable_grow_up>", cowPos);
    let hitCount = 0;
    test
      .startSequence()
      .thenWait(() => {
        player.lookAtEntity(cow);
        if (player.attackEntity(cow)) {
          hitCount++;
        }
        test.assert(hitCount === 7, "Failed to do 7 attacks");
      })
      .thenExecute(() => {
        test.assertEntityPresentInArea("cow", true);
      })
      .thenSucceed();
})
    .maxTicks(200)
    .structureName("startertests:mediumglass");
