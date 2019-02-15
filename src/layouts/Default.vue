<template>
  <el-container class="layout">
    <el-header>
      <nav class="nav">
        <strong>
          <g-link :to="{ name: 'home' }">
            <g-image src="~/logo.png" alt="" width="50px" />
            開発ブログ
          </g-link>
          <a class="nav__link" href="http://imejin.biz/" target="_blank">イメジンについて</a>
        </strong>
      </nav>
    </el-header>
    <el-container>
      <el-main>
        <slot/>
      </el-main>
      <el-aside width="280px">
        <post-link-aside v-for="post in posts"
        :key="post.id"
        :path="post.path"
        :title="post.title"
        :thumbnail="post.thumbnail ? post.thumbnail.file.url.src : ''"
        :date="post.createdAt"/>
      </el-aside>
    </el-container>
  </el-container>
</template>

<static-query>
query Common {
  allContentfulPost (perPage: 10) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        createdAt
        thumbnail {
          path
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
}
</static-query>

<script>
import PostLinkAside from '../components/PostLinkAside.vue'
export default {
  components: { PostLinkAside },
  computed: {
    posts () {
      return this.$static.allContentfulPost.edges.map(edge => edge.node)
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1100px;
  margin: auto;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  height: 80px;
}
.nav__link {
  margin-left: 20px;
}
</style>
