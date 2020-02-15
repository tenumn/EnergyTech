Launch({
    BlockSide:Native.BlockSide,
    ParticleType:Native.ParticleType,
    isCanSeeSky:GenerationUtils.canSeeSky,
    dropItem:ModAPI.requireGlobal("Level.dropItem"),
    getPlayerSneaking:Entity.getSneaking(Player.get()),
    isCanTileReplaced:ModAPI.requireGlobal("canTileBeReplaced")
});