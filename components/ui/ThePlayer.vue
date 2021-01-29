<template>
  <Player nocontrols autoplay muted aspect-ratio="828:1624">
    <Hls :config="hlsConfig" version="latest" poster="/media/poster.png">
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
  data() {
    return {
      hlsConfig: {},
    }
  },
}
</script>
