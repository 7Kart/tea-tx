<template>
  <span :class="hoverClass" @click="onMenuClick" :style="buttonStyle"
    >МЕНЮ</span
  >
</template>

<script>
export default {
  props: {
    btnClr: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    buttonStyle() {
      return {
        color: this.btnClr
      }
    },
    hoverClass() {
      return this.btnClr === '#fff' ? 'light-hover' : 'dark-hover'
    }
  },

  methods: {
    onMenuClick() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

span {
  cursor: pointer;
  color: #ffffff;
  font-size: 24px;
  line-height: 37px;
  text-decoration: underline;
  font-family: 'Spectral';
  font-weight: bold;
  letter-spacing: 1px;
  @media screen and(max-width: $smDesktopWidth) {
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and(max-width: $phoneWidth ) {
    font-size: 18px;
    line-height: 27px;
  }
  transition: color 0.3s ease;

  &:hover {
    transition: color 0.3s ease;

    &.light-hover {
      color: #e7e7e7 !important;
    }
    &.dark-hover {
      color: #47645f !important;
    }
  }
}
</style>