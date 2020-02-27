Launch({
    BlockSide:Native.BlockSide,
    Color:android.graphics.Color,
    ParticleType:Native.ParticleType,
    isCanSeeSky:GenerationUtils.canSeeSky,
    dropItem:ModAPI.requireGlobal("Level.dropItem"),
    isCanTileReplaced:ModAPI.requireGlobal("canTileBeReplaced")
});