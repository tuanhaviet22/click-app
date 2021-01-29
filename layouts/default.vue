<template>
  <div class='wrapper bg--shaft'>
    <Header />
    <Nuxt keep-alive/>
    <Footer />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menuData: null,
      footerData: null,
      data: []
    }
  },
  methods: {

  },
  created() {

  }
}

</script>

<style>

</style>
