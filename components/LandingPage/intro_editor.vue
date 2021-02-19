<template>
  <section class='intro-section background-css ptb-100'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <title_module :title='module.module_title' :description='module.module_description' />
      <div class='row' v-if='position == 2'>
        <div class='col-left'>
          <div class='box-image-intro'>
            <div class='one-sliders' v-if="metadata.media_type == 'image'">
              <div class='image-intro' v-for='image in metadata.media_data.image' v-if='image.image'>
                <img :src='image.image' :alt='image.alt' :title='image.title'>
              </div>
            </div>
<!--            <div v-else-if="metadata.media_type == 'video'" v-if='metadata.media_data.video_avatar'>-->
<!--              <img loading='true' :src='metadata.media_data.video_avatar' class='w-100 d-block gallery-thumb'-->
<!--                   :alt='metadata.media_data.module_title'-->
<!--                   :title='metadata.media_data.module_title'>-->
<!--              <a class='btn-play-video fancybox-media absolute' rel='fancybox-media' :href='metadata.media_data.video'>-->
<!--                <i class='fa fa-play'></i>-->
<!--              </a>-->
<!--            </div>-->

<!--            <div v-else v-html='metadata.media_data.video'></div>-->
          </div>
        </div>
        <div class='col-right'>
          <div class='content-intro' v-html='metadata.content_data'>
          </div>
        </div>
      </div>
      <div class='row' v-else>
        <div class='col-left'>
          <div class='content-intro' v-html='metadata.content_data'>
          </div>
        </div>
        <div class='col-right'>
          <div class='box-image-intro'>
            <div class='one-sliders' v-if="metadata.media_type == 'image'">
              <div class='image-intro' v-for='image in metadata.media_data.image' v-if='image.image'>
                <img :src='image.image' :alt='image.alt' :title='image.title'>
              </div>
            </div>
<!--            <div v-else-if="metadata.media_type == 'video'" v-if='metadata.media_data.video_avatar'>-->
<!--              <img loading='true' :src='metadata.media_data.video_avatar' class='w-100 d-block gallery-thumb'-->
<!--                   :alt='metadata.media_data.module_title'-->
<!--                   :title='metadata.media_data.module_title'>-->
<!--              <a class='btn-play-video fancybox-media absolute' rel='fancybox-media' :href='metadata.media_data.video'>-->
<!--                <i class='fa fa-play'></i>-->
<!--              </a>-->
<!--            </div>-->

<!--            <div v-else v-html='metadata.media_data.video'></div>-->
          </div>
        </div>
      </div>
      <div class='row' v-if='position == 3'>
        <div class='col-top'>
          <div class='content-intro' v-html='metadata.content_data'>
          </div>
          <div class='box-image-intro'>
            <swiper v-if="metadata.media_type == 'image'"
                    ref='list-post'
                    :options='settings'
            >
              <swiper-slide v-for='image in metadata.media_data.image' v-if='image.image'>
                <div class='image-intro'>
                  <img :src='image.image' :alt='image.alt' :title='image.title'>
                </div>
              </swiper-slide>
            </swiper>
<!--            <div v-else-if="metadata.media_type == 'video'" v-if='metadata.media_data.video_avatar'>-->
<!--              <img v-if='metadata.media_data.video_avatar' loading='true' :src='metadata.media_data.video_avatar'-->
<!--                   class='w-100 d-block gallery-thumb'-->
<!--                   :alt='module.module_title'-->
<!--                   :title='module.module_title'>-->
<!--              <a class='btn-play-video fancybox-media absolute' rel='fancybox-media' :href='metadata.media_data.video'>-->
<!--                <i class='fa fa-play'></i>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div v-else v-html='metadata.media_data.video'>-->
<!--            </div>-->
          </div>
          <div class='content-intro' v-if='metadata.content_data' v-html='metadata.content_data'>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'intro_editor',
  components: {
    Title_module, Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: ['id'],
  data() {
    return {
      settings: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20
      },
      module: {},
      metadata: [],
      position: null,
      media_data: null
    }
  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
    this.position = JSON.parse(this.module.module_metadata).content_position
    if (this.metadata.media_type == 'image') {
      this.metadata.media_data.image = JSON.parse(this.metadata.media_data.image)
    }
  }
}
</script>

<style scoped>

</style>
