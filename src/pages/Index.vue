<template>
  <Layout>
    <el-row :gutter="12">
      <el-col v-for="{ node } in $page.allContentfulPost.edges" :key="node._id">
        <h2 v-html="node.title"/>
        <router-link :to="node.path">Read more</router-link>
      </el-col>
    </el-row>
    <h1>Welcome to my blog :)</h1>
    <Pager :info="$page.allContentfulPost.pageInfo"/>
    <ul>
    </ul>
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
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>
