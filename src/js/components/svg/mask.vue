<template>
  <div :style="maskStyle"></div>
</template>

<script>
export default {
  props: {
    maskVerAlign: {
      type: String,
      default: 'center'
    },
    maskHorAlign: {
      type: String,
      default: 'space-around'
    },
    radius: {
      type: String,
      default: '45%'
    }
  },

  // mounted() {
  //   this.onResize()
  // },

  // created() {
  //   window.addEventListener('resize', this.onResize)
  // },

  // destroyed() {
  //   window.removeEventListener('resize', this.onResize)
  // },

  // methods: {
  //   onResize() {
     
  //    let parentWidth = this.$el.parentElement.offsetHeight;
     
  //    this.$el.style.height =  `${this.$el.offsetWidth}px`;
  //   }
  // },

  computed: {
    maskStyle() {
      return {
        'justify-content': this.maskHorAlign,
        'align-items': this.maskVerAlign
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

div {
  flex: 1;
  display: block;
  height: 100%;
  display: flex;
  overflow: hidden;
  &:before {
    content: '';
    width: 96%;
    height: 96%;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 1000px $background-color;
  }
}
</style>