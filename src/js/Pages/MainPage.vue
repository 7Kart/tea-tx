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
  },

  beforeRouteLeave(to, from, next) {
    next()
    this.$scrollTo('.promo-container', 300, {
      container: 'body',
      easing: 'ease',
      offset: 0,
      force: true,
      cancelable: false,
      onStart: ()=>{
        next()
      },
      // onDone: () => {
      //   next()
      // }
    })
  }
}
</script>