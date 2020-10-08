<template>
  <span @click="onMenuClick">МЕНЮ</span>
</template>

<script>
export default {
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
  @media screen and(max-width: $smDesktopWidth) {
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and(max-width: $phoneWidth ) {
    font-size: 18px;
    line-height: 27px;
  }
}
</style>