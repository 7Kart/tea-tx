<template>
  <section>
    <container>
      <div class="command-statistic-container">
        <div class="img-container">
          <picture>
            <source
              srcset="/assets/img/stat-img-hor.png"
              media="(max-width: 1280px)"
            />
            <img srcset="/assets/img/stat-img.png" />
          </picture>
        </div>
        <div class="stat-text-contaiuner">
          <h2>Статистика компании</h2>
          <p>
            Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь назад,
            можно увидеть как путь вел нас в эту.
          </p>
          <p>
            По сотрудничеству с нами вы можете связаться на нашей странице
            контактов
          </p>
          <router-link to="/contacts">
            <arrow
              arrow-text="Контакты"
              arrColor="#404040"
              hoverColor="#47645F"
            />
          </router-link>
        </div>
      </div>
    </container>
  </section>
</template>


<script>
import container from '../system/Container.vue'
import arrow from '../system/Arrow.vue'
export default {
  components: {
    container,
    arrow
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

section {
  position: relative;
  z-index: 30;
  background-color:$background-color ;
  border-bottom: 2px solid #1A5A38;
}

.command-statistic-container {
  margin: 14.3% 0 12.6% 0;
  display: flex;

  @media screen and (max-width: $desktopLgWidth) {
    margin: 15.7% 0 15.7% 0;
  }

  @media screen and (max-width: $desktopWidth) {
    flex-direction: column-reverse;
    margin: 10.7% 0 5.9% 0;
  }

  @media screen and (max-width: $smDesktopWidth) {
    margin: 8.7% 0 6.7% 0;
  }

  @media screen and (max-width: $phoneWidth) {
    margin: 9.1% 0 9.2% 0;
  }
  .img-container {
    margin-right: 130px;
    @media screen and (max-width: $desktopLgWidth) {
      margin-right: 100px;
    }

    @media screen and (max-width: $desktopWidth) {
      margin-right: 0;
    }
  }
  .stat-text-contaiuner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4.7% 0 14% 0;
    @media screen and (max-width: $desktopLgWidth) {
      margin: 2.5% 0 8.1% 0;
    }

    @media screen and (max-width: $desktopWidth) {
      flex-direction: column;
      margin: 0 0 5.9% 0;
    }

    @media screen and (max-width: $smDesktopWidth) {
      margin: 0 0 6.7% 0;
    }

    @media screen and (max-width: $phoneWidth) {
      margin: 0 0 9.2% 0;
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
      color: $neutral-primary;

      @media screen and (max-width: $desktopLgWidth) {
        font-size: 18px;
        line-height: 156%;
      }

      @media screen and (max-width: $desktopWidth) {
        font-size: 21px;
        line-height: 165%;
      }

      @media screen and (max-width: $smDesktopWidth) {
        padding-top: 38px;
        font-size: 18px;
      }

      @media screen and (max-width: $phoneWidth) {
        font-size: 18px;
        line-height: 156%;
      }
    }
  }
}
</style>