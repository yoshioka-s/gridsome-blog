<template>
  <Layout>
    <h1 v-html="post.title"/>
    <my-image :src="post.visual.file.url.src"/>
    <p class="date">{{ date }}</p>
    <div v-html="content"/>

    <hr>

    <div class="author">
      <div class="box">
        <div>
          この記事を書いた人
        </div>
          {{ post.author.name }}
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  contentfulPost (path: $path) {
    title
    content
    createdAt
    visual {
      path
      title
      file {
        url
        fileName
        contentType
      }
    }
    author {
      name
    }
  }
}
</page-query>

<script>
import moment from 'moment'
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
    remark().use(html).process(this.$page.contentfulPost.content, (err, html) => {
      this.content = html
    })
  },
  computed: {
    date () {
      return this.post.createdAt ? moment(this.post.createdAt).format('ll') : ''
    },
    post () {
      if (!this.$page) {
        return {}
      }
      return this.$page.contentfulPost
    },
    authorName () {
      return this.post.author ? this.post.author.name : ''
    }
  }
}
</script>

<style scoped lang="scss">
.date {
  text-align: right;
}
.content {
  margin-top: 50px;
  margin-bottom: 50px;
}
.author {
  margin-top: 50px;
  text-align: right;
  .box {
    display: inline-block;
    border: dashed black 1px;
    padding: 20px;
  }
}
.img-wrapper {
  height: 300px;
  position: relative;
  overflow-x: hidden;
  margin-bottom: 50px;
  img {
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
h1 {
  margin: 40px auto 20px;
}
h2 {
  margin: 40px auto 20px;
}
h3 {
  margin: 30px auto 16px;
}
h4 {
  margin: 30px auto 14px;
}
h5 {
  margin: 30px auto 12px;
}
h6 {
  margin: 30px auto 12px;
}
li {
  font-size: 14px;
  line-height: 2.0;
}
</style>