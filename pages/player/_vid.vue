<template>
  <div><tc-player :options="options"/></div>

</template>
<script>
export default {

  async asyncData(page) {
    // 得到视频id
    const vid = page.route.params.vid
    return {
      vid: vid
    }
    // 根据视频id获取播放凭证
    // const response = await courseApi.getPlayAuth(vid)
    // return {
    //   vid: vid,
    //   playauth: response.data.playAuth
    // }
  },

  components: {

  },
  data() {
    return {
      // 需要将 AppID 修改成自己的，在腾讯云点播后台播放器预览那查看
      options: { fileID: this.vid, appID: '1251745932', autoplay: false }
    }
  },
  created() {
    this.options.fileID = this.vid
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
