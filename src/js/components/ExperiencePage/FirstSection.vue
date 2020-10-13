<template>
  <section>
    <container style="height: auto">
      <navPanel linkUrl="/" link-text="главная" @menuToggle="omMenuToggle" />
    </container>
    <div class="content-container">
      <div class="map-container">
        <chinaMap />
      </div>
      <container>
        <div class="content-container-flex">
          <div class="map-container-mobile">
            <chinaMap />
          </div>
          <div class="about-us-text-container">
            <h2>Наш Опыт</h2>
            <p>
              Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь
              назад, можно увидеть как путь вел нас в эту. Жизнь в чае привела
              нас к жизни в Китае. Теперь, оглядываясь назад, можно увидеть как
              путь вел нас в эту
            </p>
          </div>
        </div>
      </container>
    </div>
  </section>
</template>

<script>
import container from '../system/Container.vue'
import navPanel from '../system/NavigationPanel.vue'
import chinaMap from '../svg/chinaMap.vue'

export default {
  components: {
    container,
    navPanel,
    chinaMap
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

section {
  background-color: $background-color;
  height: 100vh;
  overflow: hidden;

  .content-container {
    position: relative;
    .map-container {
      position: relative;
      width: 50%;
      margin-left: -5%;
      float: left;
      @media screen and (max-width: $desktopLgWidth) {
        width: 60%;
        margin-left: -10%;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 65%;
        margin-left: -15%;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 120%;
        margin-left: -10%;
      }
      @media screen and (max-width: $smDesktopWidth) {
        display: none;
      }

      @media screen and (max-width: $phoneWidth) {
        display: block;
        float: none;
      }
      // @media screen and (max-width: $smDesktopWidth) {
      //   margin: 0 103px 0 103px;
      // }
    }
    .content-container-flex {
      .map-container-mobile {
        display: none;
        @media screen and (max-width: $smDesktopWidth) {
          display: block;
        }
        @media screen and (max-width: $phoneWidth) {
          display: none;
        }
      }

      .about-us-text-container {
  
        // @media screen and (max-width: $smDesktopWidth) {
        //   margin-left: 0;
        // }
      }
    }
  }
}
</style>