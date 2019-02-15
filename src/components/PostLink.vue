<template>
  <el-col :span="8">
    <g-link :to="path">
      <el-card shadow="hover">
        <my-image :src="thumbnail" />
        <div class="title">
          {{ title }}
        </div>
        <time>
          {{ humanizedDate }}
        </time>
      </el-card>
    </g-link>
  </el-col>
</template>

<script>
import moment from 'moment'
import MyImage from '../components/MyImage.vue'

export default {
  props: {
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      default: '~/logo.png'
    },
    date: {
      type: String,
      required: true
    }
  },
  components: { MyImage },
  computed: {
    humanizedDate () {
      return moment(this.date).format('L')
    },
  }
}
</script>

<style scoped>
.title {
  margin-top: 40px;
}
</style>
