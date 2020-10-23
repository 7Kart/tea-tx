<template>
  <div class="contacts-container">
    <section>
      <container>
        <navPanel
          colorButton="#fff"
          linkUrl="/"
          link-text="главная"
          @menuToggle="omMenuToggle"
        />
        <div class="contact-wrapper">
          <div class="text-container">
            <h2>Контакты</h2>
            <p>
              Если у вас есть вопросы по поводу заказа, наших продуктов или
              нашего веб-сайта,
            </p>
          </div>
          <div class="contact-list-container">
            <ul>
              <li
                v-for="(contact, index) in contacts"
                :key="index"
                class="contact-item"
              >
                <contactItem
                  :contactType="contact.contactType"
                  :contactValue="contact.contactValue"
                />
              </li>
            </ul>
          </div>
        </div>
      </container>
    </section>
    <footer-app />
  </div>
</template>

<script>
import container from '../components/system/Container.vue'
import navPanel from '../components/system/NavigationPanel.vue'
import contactItem from '../components/ContactsPage/ContactItem.vue'
import footerApp from '../components/system/Footer.vue'

export default {
  components: {
    container,
    navPanel,
    contactItem,
    footerApp
  },
  data() {
    return {
      contacts: [
        {
          contactType: 'Общие вопросы',
          contactValue: 'teatx@gmail.com'
        },
        {
          contactType: 'По вопросам сотрудничества',
          contactValue: 'eatmore@gmail.com'
        },
        {
          contactType: 'Телефон',
          contactValue: '899912345333'
        }
      ]
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$scrollTo('.contacts-container', 300, {
      container: 'body',
      easing: 'ease',
      offset: 0,
      force: true,
      cancelable: false,
      onStart: () => {
        next()
      }
      // onDone: () => {
      //   next()
      // }
    })
  },
  methods: {
    omMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/vars.scss';

.contacts-container {
  position: relative;
  min-height: 100vh;

  section {
    z-index: 30;
    background: linear-gradient(
        70.77deg,
        #1a5a38 1.04%,
        rgba(30, 114, 69, 0.87) 100%
      ),
      #1a5a38;
    height: 100%;

    .contact-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 16.4% 0 16.4% 0;
      @media screen and (max-width: $desktopLgWidth) {
        margin: 16.2% 0 16.2% 0;
      }
      @media screen and (max-width: $desktopWidth) {
        flex-direction: column;
        margin: 8.36% 0 12.9% 0;
      }
      @media screen and (max-width: $smDesktopWidth) {
        margin: 11.6% 0 8.9% 0;
      }

      @media screen and (max-width: $phoneWidth) {
        margin: 10.4% 0 9.3% 0;
      }
      .text-container {
        width: 32.2%;

        @media screen and (max-width: $desktopLgWidth) {
          width: 40.7%;
        }
        @media screen and (max-width: $desktopWidth) {
          width: 100%;
        }

        h2 {
          color: white;
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 500;
          font-size: 82px;
          line-height: 100%;

          @media screen and (max-width: $desktopLgWidth) {
            font-size: 56px;
          }
          @media screen and (max-width: $smDesktopWidth) {
            font-size: 48px;
          }

          @media screen and (max-width: $phoneWidth) {
            font-size: 42px;
          }
        }

        p {
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 600;
          font-size: 21px;
          line-height: 165%;
          color: #fff;
          padding: 80px 0 0 0;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 18px;
            line-height: 156%;
          }
          @media screen and (max-width: $desktopWidth) {
            font-size: 21px;
            padding: 38px 0 56px 0;
          }
          @media screen and (max-width: $smDesktopWidth) {
            font-size: 18px;
            padding: 38px 0 46px 0;
          }

          @media screen and (max-width: $phoneWidth) {
            padding: 38px 0 52px 0;
          }
        }
      }

      .contact-list-container {
        width: 45.7%;

        @media screen and (max-width: $desktopLgWidth) {
          width: 45.6%;
        }
        @media screen and (max-width: $desktopWidth) {
          width: 100%;
        }

        .contact-item {
          padding: 46px 0;

          @media screen and (max-width: $desktopLgWidth) {
            padding: 46px 0;
          }
          @media screen and (max-width: $desktopWidth) {
            padding: 38px 0;
          }

          &:first-child {
            padding-top: 0;
          }

          &:not(:last-child) {
            border-bottom: 2px solid white;
          }
        }
      }
    }
  }
}
</style>
