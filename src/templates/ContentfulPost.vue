<template>
  <Layout>
    <h1 v-html="$page.contentfulPost.title" @click="test"/>
    <div v-html="$page.contentfulPost.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  contentfulPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  methods: {
    test () {
      console.log('test', this.$page.contentfulPost.content)
    }
  }
}
</script>
