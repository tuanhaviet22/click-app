<template>
  <div class="main-content-wrapper">
    <script v-html="dataPost.post_schema" type="application/ld+json"></script>
    <div class="single-post-area pt--40 pb--80 pt-md--30 pb-md--60">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 order-lg-2 order-1 mb-md&#45;&#45;30">
            <div class="single-post-wrapper">
              <article class="post post-details mb&#45;&#45;30">
                <div class="post-info">
                  <header class="entry-header">
                    <div class="entry-meta">
                     <span
                       class="post-date">Đăng lúc: {{ dataPost.updated_at }}</span>
                      <span class="post-view">
                       <i class="fa fa-star theme-star" v-for="n in dataPost.post_rate"></i>
                       Lượt xem: {{ dataPost.post_view }}
                     </span>
                    </div>
                    <h1 class="post-title">{{ dataPost.post_title }}</h1>
                  </header>
                  <div class="post-content">
                    <p v-html="dataPost.post_sapo" style="word-break: break-all;font-weight: bold;">
                    </p>
                    <div class="toc-block" v-if="dataPost.post_toc">
                      <div class="title-toc-block">
                        Mục lục bài viết [<span class="btn-hide-toc">ẩn</span>]
                      </div>
                        <div v-html="dataPost.post_toc"></div>
                    </div>

                    <div v-html="dataPost.post_content"></div>
                  </div>
                  <div class="social__sharing">
                    <ul class="social social-round">
                      <li class="social__item">
                        <iframe
                          src="https://www.facebook.com/plugins/share_button.php?href=https://goldkarat.com.vn&layout=button_count&size=small&appId=242142420396341&width=119&height=20"
                          width="119" height="20" style="border:none;overflow:hidden"
                          scrolling="no" frameborder="0" allowTransparency="true"
                          allow="encrypted-media"></iframe>
                        <div class="fb-comments" :data-href="this.currentUrl" data-numposts="5" data-width="100%"></div>
                      </li>
                      <li class="social__item">
                        <div class="zalo-share-button" v-bind:data-href="currentUrl"
                             data-oaid="579745863508352884" data-layout="1" data-color="blue"
                             data-customize=false></div>
                      </li>
                    </ul>
                  </div>
                  <div class="footer-meta" style="background-color: white">
                    <div class="fb-comments" :data-href="currentUrl" data-lazy="true"
                         data-numposts="5" data-width="100%"></div>
                  </div>

                </div>
                <ListPost title="Bài viết liên quan" :id="idPost"/>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListPost from '@/components/ListPost'
export default {
  components: { ListPost },
  data() {
    return {
      idPost: Number,
      dataPost: [],
      currentUrl : process.env.baseUrl + this.$route.fullPath,
    }
  },
  head() {
    return {
      title : this.dataPost.meta_value.meta_title,
      meta : [
        {
          hid: 'description',
          name: 'description',
          content:
          this.dataPost.meta_value.meta_description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.dataPost.meta_value.meta_key
        }
      ]
    }
  },
  created() {
    // this.getRelatedPost()
  },
  methods : {
      // getRelatedPost(){
      //   this.$axios.get('/api/post/related/' + this.idPost).then(response => {
      //     console.log(response.data)
      //   })
      // }
  },
  asyncData({ $axios, route, params }) {
    return $axios.get('/api/post/' + route.params.id).then(response => {
      return {
        dataPost: response.data[0],
        idPost: route.params.id
      }
    })
  }
}
</script>

<style scoped>

</style>
