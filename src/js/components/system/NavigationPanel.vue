<template>
  <div class="navigation-panel">
    <router-link :style="btnStyle" class="back-button" :to="linkUrl">
      <svg viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.9595 1.64154e-06L17.8119 2.84227L5.70485 14.9064L18 27.1578L15.1477 30L-5.8782e-07 14.9064L14.9595 1.64154e-06Z"
          :fill="colorButton"
        />
        <path
          d="M14.9595 1.64154e-06L17.8119 2.84227L5.70485 14.9064L18 27.1578L15.1477 30L-5.8782e-07 14.9064L14.9595 1.64154e-06Z"
          :fill="colorButton"
        /></svg
      ><span>{{ linkText }}</span></router-link
    >
    <menuButton :btnClr="colorButton" @menuToggle="omMenuToggle" />
  </div>
</template>

<script>
import menuButton from './menuButton.vue'
export default {
  components: {
    menuButton
  },

  computed:{
    btnStyle(){
      return {
        color:this.colorButton
      }
    }
  },

  props: {
    linkText: {
      requried: true,
      type: String
    },
    linkUrl: {
      requried: true,
      type: String
    },
    colorButton:{
      type: String,
      default: "#404040"
    } 
  },

  methods: {
    omMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.navigation-panel {
  display: flex;
  justify-content: space-between;
  margin-top: 126px;

  @media screen and (max-width: $desktopWidth) {
    margin-top: 86px;
  }

  @media screen and (max-width: $phoneWidth) {
    margin-top: 46px;
  }

  .back-button {
    font-family: 'Spectral';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
    letter-spacing: 0.03em;

    text-transform: uppercase;
    display: flex;
    align-items: center;
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 20px;
      line-height: 30px;
    }
    @media screen and (max-width: $phoneWidth) {
      font-size: 18px;
      line-height: 27px;
    }
  }
  svg {
    width: 18px;
    height: 30px;
    margin-right: 36px;

    @media screen and (max-width: $smDesktopWidth) {
      width: 14px;
      height: 24px;
      margin-right: 32px;
    }

    @media screen and (max-width: $phoneWidth) {
      margin-right: 20px;
    }
  }
}
</style>