<template>
  <div class="main-page-wrapper">
    <div class="content-wrapper">
      <div id="first-section">
        <circleBckg />
        <container>
          <div class="section-container">
            <div>
              <picture v-scrollanimation>
                <source
                  srcset="/assets/img/eric-barbeau-horiz.png"
                  media="(max-width: 1280px)"
                />
                <source
                  srcset="/assets/img/eric-barbeau-medium.png"
                  media="(max-height: 1080px)"
                />
                <img srcset="/assets/img/eric-barbeau.png" />
              </picture>
            </div>
            <div>
              <h2>О нас</h2>
              <p>
                Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь
                назад, можно увидеть как путь вел нас в эту точку со всей
                неизбежностью пути. Осень в Гуанчжоу все еще дышит жарой. Но уже
                видны первые ласточки осенних изменений — народ вечерами снова
                стал собираться за чабанью с чаем.
              </p>
              <router-link to="/experience">
                <arrow arrow-text="Наш опыт" />
              </router-link>
            </div>
          </div>
        </container>
      </div>
      <div id="second-section">
        <container>
          <div class="column-text-container">
            <p>
              Не то, что бы здесь летом чай не пьют, но вот как-то реже
              встречаются такие компании, рассевшиеся в вокруг маленьких круглых
              чабаней на улице. Наверное, их предпочитают из-за удобства — легко
              выносить-заносить и места мало занимают. Таких вот чайных мелочей
              — здесь множество, и вся наша жизнь выстраивается вокруг чая.
            </p>
            <p>
              Этот сайт посвящен нашим открытиям, находкам и работе с чаем.
              Сейчас уже ясно, что чай — это процесс, который имеет разные
              стадии и это касается не только и не столько обработки чая,
              сколько пути.
            </p>
          </div>
          <imgCircle v-if="windowWidth >= 480" />
        </container>
        <imgCircle v-if="windowWidth < 480" />
      </div>

      <div id="third-section">
        <container>
          <div class="projects-sub-section-container">
            <div class="text-container">
              <p>
                Сейчас мы Живем в Гуанчжоу, занимаемся чаем и изучаем его со
                всех сторон. Мы путешествуем по Китаю, общаемся с людьми,
                которые делают чай, продают его или обучают чайному мастерству,
                решаем самые разные задачи, которые поступает нам от проектов
                самой разной направленности и масштабов — все это складывается в
                бездонную копилку опыта и это то, чем хочется делиться дальше
              </p>
              <router-link to="/projects">
                <arrow
                  id="project-link"
                  arrow-text="Проекты и партнёры"
                  arr-color="#404040"
                  hoverColor="#47645F"
                />
              </router-link>
            </div>
            <div class="img-container">
              <picture v-scrollanimation>
                <source
                  srcset="/assets/img/viber_image_hor.png"
                  media="(max-width: 1280px)"
                />
                <img srcset="/assets/img/viber_image.png" />
              </picture>
            </div>
          </div>
        </container>
      </div>

      <div id="forth-section">
        <container>
          <div class="sub-section-blog-container">
            <div class="img-container">
              <blog-logo />
            </div>
            <div class="text-container">
              <p>
                Мы следим за всеми новостями, связанными с чаем. Посетите наш
                блог, что бы узнать акутальные события.
              </p>
              <externalLink
                linkAddress="https://teawall.ru/"
                linkText="Новостной портал"
              />
            </div>
          </div>
        </container>
      </div>
    </div>
    <footer-app />
  </div>
</template>


<script>
import container from '../system/Container.vue'
import circleBckg from './circle.vue'
import arrow from '../system/Arrow.vue'
import imgMask from '../svg/mask.vue'
import blogLogo from '../system/BlogLogo.vue'
import externalLink from '../svg/ExternalLink.vue'
import footerApp from '../system/Footer.vue'
import imgCircle from './circleImg.vue'

export default {
  components: {
    container,
    circleBckg,
    arrow,
    imgMask,
    blogLogo,
    externalLink,
    footerApp,
    imgCircle
  },
  data() {
    return {
      windowWidth: null
    }
  },
  mounted() {
    this.onResize()
  },

  created() {
    window.addEventListener('resize', this.onResize)
  },

  destroyed() {
    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.windowWidth = this.$el.offsetWidth
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.main-page-wrapper {
  font-family: 'Spectral';
  background-color: #ced7cc;
  position: relative;
  .content-wrapper {
    position: relative;
    z-index: 30;
    background-color: $background-color;
  }
  #first-section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    .section-container {
      // margin: 164px 0 164px 0;
      margin: auto;
      z-index: 99;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: $desktopWidth) {
        flex-direction: column-reverse;
      }
      div {
        width: calc(100% / 2-130px);

        @media screen and (max-width: $desktopLgWidth) {
          width: calc(100% / 2-100px);
        }
        @media screen and (max-width: $desktopWidth) {
          width: 100%;
        }
        picture {
          &.before-scroll-enter {
            filter: blur(2px);
          }
          &.scroll-enter {
            filter: blur(0);
            transition: filter 0.6s ease-in;
          }
        }
        img {
          @media screen and (max-width: $desktopWidth) {
            width: 100%;
          }
        }
        &:nth-child(2) {
          color: white;
          @media screen and (max-width: $desktopWidth) {
            margin-bottom: 80px;
          }
          @media screen and (max-width: $phoneWidth) {
            margin-bottom: 38px;
          }
          h2 {
            font-size: 82px;
            line-height: 100%;
            font-family: 'Spectral';
            font-weight: 500;
            padding-top: 61px;

            @media screen and (max-width: $desktopHDWidth) {
              padding-top: 20px;
            }

            @media screen and (max-width: $desktopLgWidth) {
              padding-top: 25px;
              font-size: 56px;
            }
            @media screen and (max-width: $smDesktopWidth) {
              padding-top: 0;
              font-size: 48px;
            }
            @media screen and (max-width: $phoneWidth) {
              font-size: 38px;
            }
          }
          p {
            font-family: 'Spectral';
            font-weight: 500;
            font-size: 21px;
            line-height: 34px;
            padding: 116px 0 80px 0;
            @media screen and (max-width: $desktopHDWidth) {
              padding: 80px 0 80px 0;
            }
            @media screen and (max-width: $desktopLgWidth) {
              padding: 96px 0 80px 0;
              font-size: 18px;
              line-height: 28px;
            }
            @media screen and (max-width: $desktopWidth) {
              padding: 38px 0 46px 0;
              line-height: 34px;
              font-size: 21px;
              line-height: 28px;
            }
            @media screen and (max-width: $smDesktopWidth) {
              padding: 38px 0 38px 0;
              font-size: 18px;
            }
            @media screen and (max-width: $phoneWidth) {
              padding: 30px 0 30px 0;
              font-size: 4vw;
            }
          }
        }
        img {
          height: auto;
          width: auto;
        }
      }
    }
  }
  #second-section {
    margin-top: 25px;
    background-color: $background-color;
    .column-text-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: $smDesktopWidth) {
        flex-direction: column;
      }

      p {
        color: $neutral-primary;
        font-family: 'Spectral';

        font-weight: 500;
        font-size: 21px;
        line-height: 165%;
        width: calc(50% - 130px);

        @media screen and (max-width: $desktopLgWidth) {
          width: calc(50% - 100px);
          font-size: 18px;
        }
        @media screen and (max-width: $desktopWidth) {
          width: calc(50% - 77px);
          font-size: 21px;
        }
        @media screen and (max-width: $smDesktopWidth) {
          width: 100%;
          font-size: 18px;
          &:nth-child(2) {
            margin-top: 46px;
          }
        }
        @media screen and (max-width: $phoneWidth) {
          font-size: 4vw;
        }
        // @media screen and (max-width: $tableWidth) {
        // }
      }
    }
  }

  #third-section {
    margin-bottom: 164px;

    @media screen and (max-width: $desktopLgWidth) {
      margin-bottom: 152px;
    }
    @media screen and (max-width: $desktopWidth) {
      margin-bottom: 80px;
    }
    @media screen and (max-width: $phoneWidth) {
      margin-bottom: 40px;
    }
    .projects-sub-section-container {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: $desktopWidth) {
        flex-direction: column;
      }
      .text-container {
        color: $neutral-primary;
        font-weight: 500;
        font-size: 21px;
        line-height: 165%;
        color: $neutral-primary;
        width: calc(100% / 2+65px);
        margin-top: 61px;
        @media screen and (max-width: $desktopLgWidth) {
          margin-top: 13px;
          width: calc(100% / 2+50px);
        }
        @media screen and (max-width: $desktopWidth) {
          margin-top: 0px;
          margin-bottom: 80px;
          width: 100%;
        }
        p {
          margin-bottom: 80px;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 18px;
            line-height: 156%;
          }

          @media screen and(max-width: $desktopWidth) {
            margin-bottom: 40px;
            font-size: 21px;
            line-height: 165%;
          }

          @media screen and (max-width: $smDesktopWidth) {
            font-size: 18px;
            line-height: 156%;
          }
          @media screen and (max-width: $phoneWidth) {
            font-size: 4vw;
          }
        }
      }

      .img-container {
        picture {
          &.before-scroll-enter {
            filter: blur(2px);
          }
          &.scroll-enter {
            filter: blur(0);
            transition: filter 0.6s ease-in;
          }
        }

        text-align: end;
        width: calc((50% - 65px) * 3 / 4);
        @media screen and (max-width: $desktopLgWidth) {
          width: calc((50% - 50px) * 3 / 4);
        }
        @media screen and (max-width: $desktopWidth) {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  #forth-section {
    background: linear-gradient(
        70.77deg,
        #1a5a38 1.04%,
        rgba(30, 114, 69, 0.87) 100%
      ),
      #1a5a38;
    position: relative;
    z-index: 30;
    .sub-section-blog-container {
      justify-content: space-between;
      display: flex;
      padding: 85px 0;
      @media screen and (max-width: $smDesktopWidth) {
        flex-direction: column;
      }
      .img-container {
        width: calc((50%-65px) * 3 / 4);
        @media screen and (max-width: $desktopLgWidth) {
          width: calc(50%-50px);
        }
        @media screen and (max-width: $desktopWidth) {
          width: calc(50%-38px);
        }
        @media screen and (max-width: $smDesktopWidth) {
          width: 100%;
        }
      }
      .text-container {
        color: white;
        width: calc(50%-65px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: $desktopLgWidth) {
          width: calc(50%-50px);
        }
        @media screen and (max-width: $desktopWidth) {
          width: calc(50%-38px);
        }
        @media screen and (max-width: $smDesktopWidth) {
          width: 100%;
        }
        @media screen and (max-width: $smDesktopWidth) {
          margin-top: 60px;
        }
        p {
          margin-bottom: 80px;
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 500;
          font-size: 21px;
          line-height: 165%;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 18px;
            margin-bottom: 86px;
          }
          @media screen and (max-width: $desktopWidth) {
            font-size: 21px;
            margin-bottom: 50px;
          }
          @media screen and (max-width: $smDesktopWidth) {
            font-size: 18px;
            margin-bottom: 46px;
          }
        }
      }
    }
  }
}
</style>