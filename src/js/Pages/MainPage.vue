<template>
  <div>
    <promo @menuToggle="onMenuToggle" />
    <mainPageContent />
  </div>
</template>

<script>
import promo from '../components/system/Promo.vue'
import mainPageContent from '../components/mainPage/mainPageContent.vue'

export default {
  components: {
    promo,
    mainPageContent
  },


  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>