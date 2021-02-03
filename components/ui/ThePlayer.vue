<template>
  <Player
    player
    no-controls
    playsinline
    autoplay
    muted
    loop
    aspect-ratio="828:1624"
  >
    <Hls version="latest" poster="/media/video/whatIsRoleEver.jpg">
      <source
        data-src="/media/video/whatIsRoleEver.m3u8"
        type="application/x-mpegURL"
      />
    </Hls>
  </Player>
</template>
