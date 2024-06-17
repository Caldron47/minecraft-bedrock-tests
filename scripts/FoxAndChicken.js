import * as GameTest from "@minecraft/server-gametest";

GameTest.register("FoxAndChickenTest", "fox_kills_chicken", (test) => {
  const attackerId = "fox";
  const victimId = "chicken";

  test.spawn(attackerId, { x: 5, y: 2, z: 5});
  test.spawn(victimId, { x: 2, y: 2, z: 2});

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
})
  .maxTicks(410)
  .structureName("startertests:mediumglass");   