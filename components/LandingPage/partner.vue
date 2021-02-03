<template>
  <section v-if="module" class="background-css partner">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row">
        <div class="col-lg-3 col-6" v-for="item in metadata" v-if="item.item_slide_image">
          <div class="mb-30 brand-card-two d-flex align-items-center justify-content-center p-3">
            <a :href="(item.item_slide_url) ? 'item.item_slide_url' : '/'" :title="item.item_slide_title">
              <img :src="item.item_slide_image" :alt="item.item_slide_image_alt" :title="item.item_slide_image_title">
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
  name: 'partner',
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
