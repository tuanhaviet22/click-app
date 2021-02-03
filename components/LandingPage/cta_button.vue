<template>
  <a v-if="module.module_title_button" class='btn-cta' :href='module.module_url_button'
     :title="module.module_title_url_button"><span
    v-if="module.module_icon_button" v-html="module.module_icon_button"></span>
    {{ module.module_title_button }}</a>
</template>

<script>
export default {
  name: 'cta_button',
  props: ['module']
}
</script>

<style scoped>

</style>
