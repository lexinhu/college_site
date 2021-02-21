<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 作者列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">作者大咖</span>
        </h2>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section v-if="items.length===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <!-- /数据列表 开始-->
          <article v-if="items.length>0" class="i-teacher-list">
            <ul class="of">
              <li v-for="item in items" :key="item.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/'+item.id" :title="item.name">
                      <img :src="item.avatar" :alt="item.name" height="142">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/teacher/'+item.id" :title="item.name" class="fsize18 c-666">{{ item.name }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999" >{{ item.intro }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ item.career }}</p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear"/>
          </article>
          <!-- /数据列表 结束-->
        </div>
      </section>
    </section>
    <!-- /作者列表 结束 -->
  </div>
</template>
<script>
import teacherApi from '~/api/teacher'
export default {
  async asyncData() {
    console.log('asyncData')
    const response = await teacherApi.getList()
    console.log(response)
    return {
      items: response.data.items
    }
  }
}
</script>
