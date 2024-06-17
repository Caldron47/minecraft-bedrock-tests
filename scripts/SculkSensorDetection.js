import * as GameTest from "@minecraft/server-gametest";

GameTest.register("SculkSensorDetectionTest", "sculk_sensor_detecting", (test) => {
  const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 3}, "sculk_sensor_detecting", "survival");

  player.runCommand(`setblock ~-2~~ sculk_sensor`);
  player.runCommand(`setblock ~-2~~-1 unpowered_comparator`);
  player.runCommand(`setblock ~-2~~-2 redstone_wire`);

  test
    .startSequence()
    .thenIdle(100)
    .thenWait(() => {
      player.moveRelative(0, -2);
      test.assertRedstonePower({ x: 3, y: 2, z: 1}, 1);
    })
    .thenSucceed();
})
  .maxTicks(200)
  .structureName("startertests:mediumglass");

GameTest.register("SculkSensorDetectionTest", "sculk_sensor_not_detecting", (test) => {
  const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 3}, "sculk_sensor_not_detecting", "survival");

  player.runCommand(`setblock ~-2~~ sculk_sensor`);
  player.runCommand(`setblock ~-3~~ piston ["facing_direction":3]`);
  player.runCommand(`setblock ~-3~~-1 dirt`);
  player.runCommand(`fill ~-1~~ ~-1~~-2 wool`);

  test
    .startSequence()
    .thenIdle(100)
    .thenExecute(() => {
      player.moveRelative(0, -2);
    })
    .thenExecuteAfter(50, () => {test.assertBlockPresent("minecraft:dirt", { x: 2, y: 2, z: 2}, true)})
    .thenSucceed();
})
  .maxTicks(200)
  .structureName("startertests:mediumglass");
