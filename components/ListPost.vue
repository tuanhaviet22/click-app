<template>
  <section class="blog-area pt--40 pb--40 pt-md--40 pb-md--30">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title mb--30">
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <swiper
            ref="list-post"
            :options="settings"
          >
            <swiper-slide v-for="post in listPost" :key="post.post_id">
              <article class="blog">
                <a
                  :href="post.post_slug + '-p' + post.post_id"
                  class="blog__thumb" tabindex="0"><img loading="true"
                                                        :src="post.post_thumbnail"
                                                        :alt="post.post_thumbnail_alt"
                                                        :title="post.post_thumbnail_title"></a>
                <div class="blog__content">
                  <div class="blog__meta"><p class="post-view"><i class="fa fa-eye mr-2"
                                                                  aria-hidden="true"></i>{{ post.post_view }}</p>
                    <p class="blog__date">{{ post.updated_at }}</p></div>
                  <h3 class="blog__title"><a
                    :href="post.post_slug + '-p' + post.post_id"
                    tabindex="0">{{ post.post_title }}</a></h3>
                  <div class="blog__text">
                    <div v-html="post.post_brief"></div>
                    <a
                      class="read-more"
                      :href="post.post_slug + '-p' + post.post_id"
                      tabindex="0">Xem thêm</a></div>
                </div>
              </article>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: 'ListPost',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: [
    'title', 'id'
  ],
  data: function() {
    return {
      listPost: [],
      settings: {
        loop: true,
        slidesPerView: 3,
        spaceBetween : 20
        // Some Swiper option/callback...
      }
    }
  },
  async fetch() {
    this.listPost = await this.$axios.$get('/api/post/related/' + this.id)
  }
}
</script>

<style scoped>

</style>
