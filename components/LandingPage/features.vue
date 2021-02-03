<template>
  <section class="feature-section background-css ptb-100" v-if="module">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row align-items-center justify-content-md-center">
        <div class="col-lg-4 col-md-12 animated" data-animate="fadeInLeft" data-delay=".4">
          <div class="row">
            <div class="col-md-12" v-for="(item,index) in metadata" v-if="index<3">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-face-smile icon-size-md color-secondary mr-4">
                    <a v-if="item.imgorsvg == 'svg'" :href="item.item_slide_url"
                       :title="item.item_slide_desc"><span v-html="item.item_slide_svg"></span>
                    </a>
                    <img v-else v-if="item.item_slide_image" :src="item.item_slide_image"
                         :alt="item.item_slide_alt"
                         :title="item.item_slide_title">
                </span>
                <div class="icon-text">
                  <h5 class="mb-2" v-if="item.item_slide_title">
                    {{ item.item_slide_title }}
                  </h5>
                  <p v-html="item.item_slide_desc" v-if="item.item_slide_desc"></p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block animated" data-animate="fadeIn"
             data-delay=".6">
          <div class="position-relative pb-md-5 py-lg-0">

            <img v-if="module.module_avatar" :title="module.module_title" :alt="module.module_title"
                 :src="module.module_avatar"
                 class="img-center img-fluid">
          </div>
        </div>
        <div class="col-lg-4 col-md-12 animated" data-animate="fadeInRight" data-delay=".4">
          <div class="row">

            <div class="col-md-12" v-for="(item,index) in metadata" v-if="index>=3">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-face-smile icon-size-md color-secondary mr-4">

                    <a v-if="item.imgorsvg == 'svg'"
                       :href="item.item_slide_url"
                       :title="item.item_slide_url" v-html="item.item_slide_svg">
                    </a>
                    <img v-else v-if="item.item_slide_image" :src="item.item_slide_image"
                         :alt="item.item_slide_alt"
                         :title="item.item_slide_title">
                </span>
                <div class="icon-text">
                  <h5 class="mb-2">
                    {{ item.item_slide_title }}
                  </h5>
                  <p v-html="item.item_slide_desc"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-active">
        <cta_button :module="module" />
      </div>
    </div>
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import Cta_button from '@/components/LandingPage/cta_button'

export default {
  name: 'features',
  components: { Cta_button, Title_module },
  props: ['id'],
  data() {
    return {
      module: {},
      metadata: []
    }
  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
  }
}
</script>

<style scoped>

</style>
