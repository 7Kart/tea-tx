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
        <div class="sub-content-container">
          <div class="about-us-text-container">
            <h2>Наш Опыт</h2>
            <p>
              Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь
              назад, можно увидеть как путь вел нас в эту. Жизнь в чае привела
              нас к жизни в Китае. Теперь, оглядываясь назад, можно увидеть как
              путь вел нас в эту
            </p>
          </div>

          <div class="map-container-mobile">
            <chinaMap />
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
  // height: 100vh;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  z-index: 30;
  .content-container {
    display: flex;
    align-items: center;
    margin-top: 39px;
    @media screen and (max-width: $desktopLgWidth) {
      margin-top: 38px;
    }

    @media screen and (max-width: $desktopWidth) {
      margin-top: 96px;
    }

    @media screen and (max-width: $smDesktopWidth) {
      margin-top: 104px;
    }

    @media screen and (max-width: $phoneWidth) {
      margin-top: 90px;
      flex-direction: column-reverse;
    }
    .container-grid {
      @media screen and (min-width: $desktopLgWidth) {
        margin-left: 130px;
      }

      @media screen and (min-width: $desktopWidth) {
        margin-left: 50px;
      }

      @media screen and (min-width: $desktopWidth) {
        margin-left: 50px;
      }

      @media screen and (min-width: $smDesktopWidth) {
        margin-left: 77px;
      }

      width: calc(50%-190px);
      @media screen and (max-width: $smDesktopWidth) {
        width: calc(50%-251px);
      }

      @media screen and (max-width: $desktopWidth) {
        width: calc(50%-205px);
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 100%;
      }
      @media screen and (max-width: $phoneWidth) {
        width: auto;
      }
    }
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
    .sub-content-container {
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
        @media screen and (max-width: $smDesktopWidth) {
          margin-bottom: 26px;
        }
        @media screen and (max-width: $phoneWidth) {
          margin-bottom: 14px;
        }
        h2 {
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 500;
          font-size: 82px;
          line-height: 100%;
          color: #1a5a38;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 56px;
            line-height: 100%;
          }

          @media screen and (max-width: $smDesktopWidth) {
            font-size: 48px;
            line-height: 100%;
          }

          @media screen and (max-width: $phoneWidth) {
            font-size: 42px;
            line-height: 100%;
          }
        }

        p {
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 500;
          font-size: 21px;
          line-height: 165%;
          padding-top: 116px;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 18px;
            line-height: 156%;
            padding-top: 60px;
          }

          @media screen and (max-width: $desktopWidth) {
            font-size: 21px;
            line-height: 165%;
            padding-top: 60px;
          }

          @media screen and (max-width: $smDesktopWidth) {
            padding-top: 38px;
            font-size: 18px;
            line-height: 156%;
          }

          @media screen and (max-width: $phoneWidth) {
            padding-top: 42px;
            font-size: 18px;
            line-height: 156%;
          }
        }
        // @media screen and (max-width: $smDesktopWidth) {
        //   margin-left: 0;
        // }
      }
    }
  }
}
</style>