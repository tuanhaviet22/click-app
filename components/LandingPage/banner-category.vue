<template>
  <section id="banner-hot" class="background-css section banner-hot-section active">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row animated" data-animate="fadeIn" data-delay=".5">
        <div class="col-lg-4 col-sm-12" v-for="item in listBanner">
          <div class="app-feature-box">
            <div class="feature-inner">
              <div class="app-feature-main">
                <div class="app-feature-inner">
                  <div class="icon-block">
                    <div class="icon">
                      <img :src="item.item_slide_image" v-if="item.item_slide_image"
                           :title="item.item_slide_image_title"
                           :alt="item.item_slide_image_alt">
                      <span v-else v-html="item.item_slide_icon"></span>
                    </div>
                  </div>
                  <h4>{{ item.item_slide_title }}</h4>
                </div>
              </div>
              <div class="text two-text-line">{{ item.item_slide_desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cta_button :module="module" />
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import Cta_button from '@/components/LandingPage/cta_button'

export default {
  name: 'banner-category',
  components: { Cta_button, Title_module },
  props: ['id'],
  data() {
    return {
      module: {},
      listBanner: []
    }
  },
  computed: {},
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.listBanner = JSON.parse(this.module.module_metadata)
  }
}
</script>

<style scoped>

</style>
