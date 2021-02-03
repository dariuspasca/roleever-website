<template>
  <Player nocontrols autoplay muted loop aspect-ratio="828:1624">
    <Hls version="latest" poster="/media/video/cover.jpg">
      <source
        data-src="/media/video/welcome.m3u8"
        type="application/x-mpegURL"
      />
    </Hls>
  </Player>
</template>

<script>
import { Player, Hls } from '@vime/vue'

export default {
  components: {
    Player,
    Hls,
  },
}
</script>
