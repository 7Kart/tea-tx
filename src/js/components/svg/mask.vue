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

@import "../../../assets/scss/utils/vars.scss"; 


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
    box-shadow: 0px 300px 0px 1000px $background-color;
  }
}
</style>