import * as GameTest from "@minecraft/server-gametest";

GameTest.register("ZombieConversionTest", "zombie_to_drowned", (test) => {
  const zombieSpawnType = "zombie";

  test.spawnWithoutBehaviorsAtLocation(zombieSpawnType, { x: 5, y: 2, z: 5});

  test.succeedWhen(() => {
    test.assertEntityPresentInArea("drowned", true);
  });
})
  .maxTicks(1000)
  .structureName("startertests:watermediumglass");

GameTest.register("ZombieConversionTest", "zombie_not_drown", (test) => {
  const zombieSpawnType = "zombie";

  const zombie = test.spawnWithoutBehaviorsAtLocation(zombieSpawnType, { x: 5, y: 2, z: 5});

  test.walkTo(zombie, { x: 3, y: 4, z: 4}, 1);

  test
    .startSequence()
    .thenExecuteAfter(1000, () => test.assertEntityPresentInArea(zombieSpawnType, true))
    .thenSucceed();
})
  .maxTicks(1010)
  .structureName("startertests:watermediumglasswithroof");
