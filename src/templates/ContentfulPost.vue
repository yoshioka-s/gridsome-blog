<template>
  <Layout>
    <h1 v-html="$page.contentfulPost.title"/>
    <div v-html="content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  contentfulPost (path: $path) {
    title
    content
    text
  }
}
</page-query>

<script>
import remark from 'remark'
import html from 'remark-html'

export default {
  data () {
    return {
      content: ''
    }
  },
  created () {
    remark().use(html).process(this.$page.contentfulPost.text, (err, html) => {
      this.content = html
    })
  }
}
</script>
