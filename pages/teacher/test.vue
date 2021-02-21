<template>
  <div>
    作者列表
    <div v-for="(item,index) in items" :key="index">
      <a :href="'teacher/'+item.id">{{ item.name }}</a>
    </div>
  </div>
</template>
<script>
import teacherApi from '~/api/teacher'
export default {
  // 异步获取数据
  asyncData() {
    return teacherApi.getList().then(response => {
      return {
        items: response.data.items
      }
    })
  },

  data() {
    return {
      test: 'test' // 这里的数据最后会和asyncData中的数据定义合并
    }
  }
}
</script>
