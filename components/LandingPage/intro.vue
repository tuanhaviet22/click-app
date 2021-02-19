<template>
  <section class='intro-section background-css ptb-100'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <title_module :title='module.module_title' :description='module.module_description' />
      <div class='row align-items-center justify-content-md-center animate' data-animate='fadeInUp' data-delay='.4'>

        <div class='col-lg-6 col-md-12' v-if='position == 2'>
          <div class='position-relative pb-md-5 py-lg-0'>
            <swiper
              ref='slide-intro'
              :options='settings'
            >
              <swiper-slide v-for='item in metadata.media_data' v-if='item.image'><img :title='item.title' :alt='item.alt'
                                                                            :src='item.image'
                                                                            class='img-center img-fluid'></swiper-slide>
            </swiper>
          </div>
        </div>
        <div class='col-lg-6 col-md-12' v-if='position == 2'>
          <div class='row'>

            <div class='col-md-12' v-for='item in content'>
              <div class='d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3'>

                <span v-if='item.icon' v-html='item.icon' class='svg-intro-media mr-4'></span>

                <div class='icon-text'>
                  <h5 class='mb-2'>
                    {{ item.title }}
                  </h5>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class='col-lg-6 col-md-12' v-if='position != 2'>
          <div class='position-relative pb-md-5 py-lg-0'>
            <swiper
              ref='list-post'
              :options='settings'
            >
              <swiper-slide v-for='item in metadata.media_data' v-if='item.image'><img :title='item.title' :alt='item.alt'
                                                                            :src='item.image'
                                                                            class='img-center img-fluid'></swiper-slide>
            </swiper>
          </div>
        </div>
        <div class='col-lg-6 col-md-12' v-if='position != 2'>
          <div class='row'>

            <div class='col-md-12' v-for='item in content'>
              <div class='d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3'>

                <span v-if='item.icon' v-html='item.icon' class='svg-intro-media mr-4'></span>

                <div class='icon-text'>
                  <h5 class='mb-2'>
                    {{ item.title }}
                  </h5>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class='btn-active'>
        <cta_button :module='module' />
      </div>
    </div>
  </section>
</template>

<script>
import Cta_button from '~/components/LandingPage/cta_button'
import Title_module from '~/components/LandingPage/title_module'
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'intro',
  components: {
    Cta_button, Title_module, Swiper,
    SwiperSlide
  },
  props: ['id'],
  directives: {
    swiper: directive
  },
  data() {
    return {
      module: {},
      metadata: [],
      content: [],
      position: null,
      settings: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
    this.metadata.media_data = JSON.parse(this.metadata.media_data)
    this.position = JSON.parse(this.module.module_metadata).content_position
    if (this.metadata.content_type == 'editor') {
      this.content = this.metadata.content_data
    } else {
      this.content = JSON.parse(this.metadata.content_data)
    }
  }
}
</script>

<style scoped>

</style>
