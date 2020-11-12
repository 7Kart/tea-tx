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
          <p class="default-text">
            Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь назад,
            можно увидеть как путь вел нас в эту.
          </p>
          <p class="default-text">
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
  background-color: $background-color;
  border-bottom: 2px solid #1a5a38;
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
    margin: 90px 0 90px 0;
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
      margin: 0 0 52px 0;
    }
    h2 {
      color: #1a5a38;
      @media screen and (max-width: $desktopWidth) {
        margin-bottom: 38px;
      }
      @media screen and (max-width: $phoneWidth) {
        margin-bottom: 42px;
      }
    }

    a {
      @media screen and (max-width: $phoneWidth) {
        margin-top: 22px;
      }
    }

    p {
      color: $neutral-primary;
    }
  }
}
</style>