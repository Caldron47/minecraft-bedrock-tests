import * as GameTest from "@minecraft/server-gametest";
import { ItemStack } from "@minecraft/server";

GameTest.register("ShootArrowTest", "has_arrow", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "has_arrow", "survival");
    player.setItem(new ItemStack("minecraft:crossbow", 1), 0, true);
    player.setItem(new ItemStack("minecraft:arrow", 1), 1, true);
    
    test
      .startSequence()
      .thenIdle(100)
      .thenWait(() => {
        player.useItemInSlot(0)
        test.assertEntityPresentInArea("minecraft:arrow", true);
      })
      .thenSucceed();
})
    .maxTicks(200)
    .structureName("startertests:mediumglass");
  
GameTest.register("ShootArrowTest", "no_arrow", (test) => {
    const player = test.spawnSimulatedPlayer({ x: 5, y: 2, z: 5}, "no_arrow", "survival");
    player.setItem(new ItemStack("minecraft:crossbow", 1), 0, true);
    let useCount = 0;
    
    test
      .startSequence()
      .thenIdle(100)
      .thenWait(() => {
        if (player.useItemInSlot(0)) {
          useCount++;
        }
        test.assert(useCount === 7, "Failed to charge crossbow");
      })
      .thenExecute(() => {
        test.assertEntityPresentInArea("minecraft:arrow", false);
      })
      .thenSucceed();
})
    .maxTicks(200)
    .structureName("startertests:mediumglass");
  