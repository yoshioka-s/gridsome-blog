<template>
  <Layout>
    <Pager :info="pageInfo"/>
    <el-row :gutter="12">
      <post-link v-for="post in posts"
      :key="post.id"
      :path="post.path"
      :title="post.title"
      :thumbnail="post.thumbnail ? post.thumbnail.file.url.src : ''"
      :date="post.createdAt"/>
    </el-row>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allContentfulPost (perPage: 10, page: $page) @paginate {
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
</page-query>

<script>
import { Pager } from 'gridsome'
import PostLink from '../components/PostLink.vue'

export default {
  components: {
    Pager,
    PostLink
  },
  computed: {
    pageInfo () {
      if (this.$page.allContentfulPost) {
        return this.$page.allContentfulPost.pageInfo
      }
      return {}
    },
    posts () {
      if (this.$page.allContentfulPost) {
        return this.$page.allContentfulPost.edges.map(edge => edge.node)
      }
      return []
    }
  }
}
</script>
