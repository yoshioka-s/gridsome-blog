<template>
    <g-link :to="path">
      <el-card>
        <el-row>
          <el-col :span="10">
            <my-image :src="thumbnail" height="60px" />
          </el-col>
          <el-col :span="14">
            {{ title }}
          </el-col>
        </el-row>
      </el-card>
    </g-link>
</template>

<script>
import MyImage from './MyImage.vue'

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
  },
  components: { MyImage },
}
</script>

<style scoped>
</style>
