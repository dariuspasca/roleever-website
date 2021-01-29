<template>
  <Player nocontrols autoplay muted aspect-ratio="828:1624">
    <Hls version="latest">
      <source data-src="/media/welcome.m3u8" type="application/x-mpegURL" />
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
