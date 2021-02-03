<template>
  <header class="header">
    <div class="header-absoulate">
      <div class="main-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-2 col-md-3 col-sm-5 col-7">
              <div class="logo" data-animate="fadeInDown" data-delay=".5">
                <NuxtLink to="/" class='logo-box mb-md--30'>
                  <img
                    :src='config.config.logo_footer'
                    :alt='config.config.name_website'
                    :title='config.config.name_website'>
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-7 col-lg-8 col-md-6 col-sm-3 col-2">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  data: function() {
    return {
      config: []
    }
  },
  async fetch() {
    this.config = await this.$axios.$get('/api/config')
  }
}

</script>

<style>

</style>
