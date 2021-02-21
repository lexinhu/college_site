<template>
  <div>
    <div class="block" style="width: 1230px;margin: 20px auto">
      <el-carousel height="600px" >
        <el-carousel-item v-for="topBannerAd in topBannerAdList" :key="topBannerAd.id">
          <a :href="topBannerAd.linkUrl" target="_blank"><img :src="topBannerAd.imageUrl" :alt="topBannerAd.title" class="adClass"></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="aCoursesList">
      <!-- 视频集开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门视频</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul id="bna" class="of">
                <li v-for="course in courseList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        :alt="course.title"
                        class="img-responsive"
                      >
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{ course.title }}</a>
                    </h3>
                    <span v-if="Number(course.price) === 0" class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span v-else class="fr jgTag ">
                      <i class="c-orange fsize12 f-fA"> ￥{{ course.price }}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ course.viewCount }}人学习</i>
                      |
                      <i class="c-999 f-fA">{{ course.buyCount }}人购买</i>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="course" title="全部视频" class="comm-btn c-btn-2">全部视频</a>
            </section>
          </div>
        </section>
      </div>
      <!-- 视频集 结束 -->
      <!-- 作者 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">作者大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                        <img :src="teacher.avatar" :alt="teacher.name" height="142">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{ teacher.name }}</a>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="teacher" title="全部作者" class="comm-btn c-btn-2">全部作者</a>
            </section>
          </div>
        </section>
      </div>
    <!-- 作者 结束 -->
    </div>
  </div>
</template>

<script>
import indexApi from '~/api/index'

export default {

  async asyncData() {
    // 首页banner数据的获取
    const topBannerAdListResponse = await indexApi.getTopBannerAdList()
    const topBannerAdList = topBannerAdListResponse.data.items

    // 获取视频集和作者数据
    const indexDataResponse = await indexApi.getIndexData()
    const courseList = indexDataResponse.data.courseList
    const teacherList = indexDataResponse.data.teacherList

    console.log(topBannerAdList)

    return {
      topBannerAdList,
      courseList,
      teacherList
    }
  }
}
</script>
<style>

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .adClass {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    margin:auto;
  }
</style>
