<template>
  <div id="wrap">
    <video
      :id="tcPlayerId"
      width="800px"
      height="450px"
      class="tencent-player"
      preload="auto"
      playsinline
      webkit-playsinline
    />
  </div>
</template>
<script>
export default {
  name: 'TencentPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      tcPlayerId: 'tcPlayer' + Date.now(),
      player: null
    }
  },
  watch: {
    options: {
      handler(newV, oldV) {
        this.$nextTick(() => {
          this.loadJS()
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    onoptions(cur, old) {
      this.$nextTick(() => {
        this.loadJS()
      })
    },
    loadTcScript(callback) {
      this.loadScript(callback, {
        id: 'tcPlayerScriptId',
        url: '//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js'
      })
    },
    loadScript(callback, params) {
      if (document.getElementById(params.id)) {
        callback()
      } else {
        const script = document.createElement('script')
        script.async = true
        script.src = params.url
        script.id = params.id
        script.onload = () => {
          callback()
        }
        document.body.appendChild(script)
      }
    },
    loadJS() {
      if (window.TCPlayer) {
        this.initVideo()
      } else {
        this.loadTcScript(() => {
          this.initVideo()
        })
      }
    },
    initVideo() {
      const playerParm = {
        fileID: this.options.fileID,
        appID: this.options.appID,
        autoplay: !!this.options.autoplay
      }
      setTimeout(() => {
        if (!this.player) {
          /* eslint-disable no-undef */
          this.player = TCPlayer(this.tcPlayerId, playerParm)
        } else {
          this.player.loadVideoByID(playerParm)
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .tcplayer {
      margin: 20px auto;
    }
  // /* 外部容器也需要是自适应的*/
  // .tencent-player{
  //   width: 1080px;
  //     height: 600px;
  // }
  // @media screen and (max-width: 640px) {
  //   .tencent-player {
  //     width: 100%;
  //     height: 270px;
  //   }
  // }
  // /* 设置logo在高分屏的显示样式 */
  // @media only screen and (min-device-pixel-ratio: 2), only screen and (-webkit-min-device-pixel-ratio: 2) {
  //   .tcp-logo-img {
  //     width: 50%;
  //   }
  // }
 @import url('//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css');
</style>
