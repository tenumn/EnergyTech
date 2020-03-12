Launch({
    BlockSide:Native.BlockSide,
    isCanSeeSky:GenerationUtils.canSeeSky,
    dropItem:ModAPI.requireGlobal("Level.dropItem"),
    isCanTileReplaced:ModAPI.requireGlobal("canTileBeReplaced")
});