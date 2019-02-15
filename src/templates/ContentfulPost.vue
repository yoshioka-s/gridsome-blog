<template>
  <Layout>
    <h1 v-html="$page.contentfulPost.title"/>
    <my-image :src="$page.contentfulPost.thumbnail.file.url.src"/>
    <div v-html="content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  contentfulPost (path: $path) {
    title
    content
    text
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
</page-query>

<script>
import remark from 'remark'
import html from 'remark-html'
import MyImage from '../components/MyImage.vue'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: { MyImage },
  created () {
    remark().use(html).process(this.$page.contentfulPost.text, (err, html) => {
      this.content = html
    })
  }
}
</script>
