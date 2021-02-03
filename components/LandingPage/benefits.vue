<template>
  <section class="benefits background-css">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row animated" data-animate="fadeIn" data-delay=".6" data-duration="2">
        <div class="col-lg-6" v-for="item in metadata">

          <div class="benefits-card-three media align-items-stretch flex-column flex-sm-row overflow-hidden mb-30">
            <div v-if="item.imgorsvg == 'svg'"
                 class="col-md-4 benefits-icon d-flex align-items-center justify-content-center">
              <span class="icon-wrapper">
                  <a
                    :href="item.item_slide_url"
                    :title="item.item_slide_desc" v-if="item.item_slide_svg" v-html="item.item_slide_svg">
                  </a>
              </span>
            </div>
            <div v-else
                 class="col-md-4 benefits-icon d-flex align-items-center justify-content-center"
                 v-bind:style="{ 'background-color':  item.item_slide_image }">
            </div>

            <a :href="item.item_slide_url"
               :title="item.item_slide_desc">
              <div class="col-md-7 media-body">
                <h3 v-if="item.item_slide_title">{{ item.item_slide_title }}</h3>
                <div v-html="item.item_slide_desc"></div>
              </div>
            </a>
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
  name: 'benefits',
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
