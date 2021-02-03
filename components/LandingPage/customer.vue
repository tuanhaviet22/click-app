<template>
  <section class="background-css customer-section ptb-100">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row three-sliders">
        <swiper
          ref="list-customer"
          :options="settings"
        >
          <swiper-slide v-for="item in metadata">
            <div class="review">
              <div class="review-text">


                <svg v-if="item.item_slide_desc" class="quotes-svg quotes-svg-01" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                  <g>
                      <path
                        d="M228,119c5.523,0,10-4.478,10-10V77c0-27.57-22.43-50-50-50H50C22.43,27,0,49.43,0,77v119.988c0,27.57,22.43,50,50,50    h64.692c-2.276,74.706-30.621,113.542-86.459,118.622c-5.151,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267    c1.862,1.759,4.321,2.733,6.869,2.733c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487    C220.521,372.051,238,310.029,238,230.152v-35.819c0-5.522-4.477-10-10-10s-10,4.478-10,10v35.819    c0,146.644-58.535,223.331-178.86,234.097v-79.836c30.411-4.73,53.934-18.886,70.007-42.161    c17.049-24.691,25.694-60.106,25.694-105.264c0-5.522-4.477-10-10-10H50c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30    h138c16.542,0,30,13.458,30,30v32C218,114.522,222.477,119,228,119z" />
                  </g>
              </g>
                  <g>
                <g>
                    <path
                      d="M462,27H324c-27.57,0-50,22.43-50,50v119.988c0,27.57,22.43,50,50,50h64.692c-2.276,74.706-30.621,113.542-86.459,118.622    c-5.15,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267c1.862,1.76,4.321,2.733,6.869,2.733    c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487C494.521,372.052,512,310.029,512,230.152V77    C512,49.43,489.57,27,462,27z M492,230.152c0,146.644-58.535,223.331-178.861,234.097v-79.836    c30.412-4.73,53.935-18.886,70.007-42.161c17.049-24.69,25.694-60.105,25.694-105.264c0-5.522-4.477-10-10-10H324    c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30h120v74.034c0,5.522,4.477,10,10,10s10-4.478,10-10v-73.96    c15.612,1.034,28,14.057,28,29.926V230.152z" />
                </g>
              </g>
                  <g>
                <g>
                    <path
                      d="M454,145.751c-5.523,0-10,4.527-10,10.049c0,5.522,4.477,10,10,10c5.522,0,10-4.478,10-10v-0.099    C464,150.179,459.523,145.751,454,145.751z" />
                </g>
              </g>
                  <g>
                  <g>
                      <path
                        d="M228,141.666c-5.523,0-10,4.478-10,10v0.209c0,5.522,4.477,10,10,10s10-4.478,10-10v-0.209    C238,146.144,233.523,141.666,228,141.666z" />
                  </g>
              </g>
            </svg>
                <div class="customer-text" v-html="item.item_slide_desc"></div>
                <svg class="quotes-svg quotes-svg-02" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <g>
                      <g>
                          <path
                            d="M228,119c5.523,0,10-4.478,10-10V77c0-27.57-22.43-50-50-50H50C22.43,27,0,49.43,0,77v119.988c0,27.57,22.43,50,50,50    h64.692c-2.276,74.706-30.621,113.542-86.459,118.622c-5.151,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267    c1.862,1.759,4.321,2.733,6.869,2.733c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487    C220.521,372.051,238,310.029,238,230.152v-35.819c0-5.522-4.477-10-10-10s-10,4.478-10,10v35.819    c0,146.644-58.535,223.331-178.86,234.097v-79.836c30.411-4.73,53.934-18.886,70.007-42.161    c17.049-24.691,25.694-60.106,25.694-105.264c0-5.522-4.477-10-10-10H50c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30    h138c16.542,0,30,13.458,30,30v32C218,114.522,222.477,119,228,119z" />
                      </g>
                  </g>
                  <g>
                  <g>
                      <path
                        d="M462,27H324c-27.57,0-50,22.43-50,50v119.988c0,27.57,22.43,50,50,50h64.692c-2.276,74.706-30.621,113.542-86.459,118.622    c-5.15,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267c1.862,1.76,4.321,2.733,6.869,2.733    c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487C494.521,372.052,512,310.029,512,230.152V77    C512,49.43,489.57,27,462,27z M492,230.152c0,146.644-58.535,223.331-178.861,234.097v-79.836    c30.412-4.73,53.935-18.886,70.007-42.161c17.049-24.69,25.694-60.105,25.694-105.264c0-5.522-4.477-10-10-10H324    c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30h120v74.034c0,5.522,4.477,10,10,10s10-4.478,10-10v-73.96    c15.612,1.034,28,14.057,28,29.926V230.152z" />
                  </g>
              </g>
                  <g>
                <g>
                    <path
                      d="M454,145.751c-5.523,0-10,4.527-10,10.049c0,5.522,4.477,10,10,10c5.522,0,10-4.478,10-10v-0.099    C464,150.179,459.523,145.751,454,145.751z" />
                </g>
              </g>
                  <g>
                <g>
                    <path
                      d="M228,141.666c-5.523,0-10,4.478-10,10v0.209c0,5.522,4.477,10,10,10s10-4.478,10-10v-0.209    C238,146.144,233.523,141.666,228,141.666z" />
                </g>
              </g>
              </svg>
              </div>
              <div class="client-profile">
                <img v-if="item.item_slide_image" :src="item.item_slide_image" :alt="item.item_slide_alt"
                     :title="item.item_slide_title">
                <div class="client-details">
                  <h4>{{ item.item_slide_title }}</h4>
                  <p v-html="item.item_slide_role"></p>
                  <span class="client-rating" v-if="item.item_slide_value">
                      <span v-for="i in 5" v-html="svg_start"></span>
                  </span>

                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="btn-active">
        <cta_button :module="module" />
      </div>
    </div>
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Cta_button from '@/components/LandingPage/cta_button'

export default {
  name: 'customer',
  components: {
    Cta_button,
    Title_module, Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: ['id'],
  data() {
    return {
      module: {},
      metadata: [],
      settings: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20
      },
      svg_start: '<svg xmlns="http://www.w3.org/2000/svg" class="start-product-svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#FDD835" fill-rule="evenodd" stroke="#FFB500" stroke-width="1.5" d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"></path></svg>',
      svg_end: '<svg xmlns="http://www.w3.org/2000/svg" class="start-product-svg" width="20" height="20" viewBox="0 0 32 32"><path fill="none" fill-rule="evenodd" stroke="#FFB500" stroke-width="1.5" d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"></path></svg>'
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
