Launch({
    BlockSide:Native.BlockSide,
    ParticleType:Native.ParticleType,
    isCanSeeSky:GenerationUtils.canSeeSky,
    dropItem:ModAPI.requireGlobal("Level.dropItem"),
    isCanTileReplaced:ModAPI.requireGlobal("canTileBeReplaced")
});