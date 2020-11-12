<template>
  <transition name="menu-fade">
    <div id="site-menu">
      <container>
        <div class="menu-wrapper">
          <div class="close-bar">
            <div>
              <span class="close-icon-container" @click="closeMenu">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.188051 2.84227L3.04052 0L15 11.917L26.9595 0L29.8119 2.84227L17.8524 14.7593L18 14.9063L17.8524 15.0534L30 27.1578L27.1477 30L15 17.8957L2.85233 30L0 27.1578L12.1476 15.0534L12 14.9063L12.1476 14.7593L0.188051 2.84227Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="close-text" @click="closeMenu">ЗАКРЫТЬ</span>
            </div>
          </div>
          <div class="navigation-bar">
            <nav>
              <ul>
                <li>
                  <router-link to="/">О нас</router-link>
                </li>
                <li>
                  <router-link to="/experience">Опыт </router-link>
                </li>
                <li>
                  <router-link to="/projects">Партнёры </router-link>
                </li>
                <li>
                  <router-link to="/contacts">Контакты </router-link>
                </li>
              </ul>
            </nav>
            <div class="sub-logo">
              <footerMenuLogo idEl="menu-logo" />
            </div>
          </div>
          <hr class="footer-line" width="100%" />
          <div class="menu-footer">
            <div class="contacts-container">
              <ul>
                <li>
                  <a>VK</a>
                </li>
                <li>
                  <a>FACEBOOK</a>
                </li>
                <li>
                  <a>INSTAGRAM</a>
                </li>
                <li>
                  <a>WECHAT</a>
                </li>
              </ul>
            </div>
            <footerMenuLogo idEl="menu-mobile-logo" />
            <div class="address-wrapper">
              <address-block />
            </div>
          </div>
        </div>
      </container>
    </div>
  </transition>
</template>

<script>
import container from './Container.vue'
import footerMenuLogo from '../svg/FooterMenuLogo.vue'
import addressBlock from './Address.vue'

export default {
  components: {
    container,
    footerMenuLogo,
    addressBlock
  },

  methods: {
    closeMenu() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

#site-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  background-color: #47645f;
  width: 100%;

  .menu-wrapper {
    margin-top: 126px;
    margin-bottom: 36px;
    @media screen and (max-width: $desktopWidth) {
      margin-top: 90px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      margin-top: 86px;
    }
    @media screen and (max-width: $phoneWidth) {
      margin: 48px 0 90px 0;
    }
    display: flex;
    flex-direction: column;
    color: white;

    height: 100%;
    justify-content: space-between;
    .close-bar {
      svg {
        @media screen and (max-width: $phoneWidth) {
          width: 16px;
        }
      }

      .close-text {
        @media screen and (max-width: $phoneWidth) {
          font-size: 16px;
        }
      }

      div {
        display: flex;
        font-weight: bold;
        align-items: center;
        &:hover path,
        &:hover .close-text {
          fill: #e7e7e7;
          color: #e7e7e7;

          transition: fill, color, 0.3s ease;
        }
        path {
          transition: fill 0.3s ease;
        }
        span {
          cursor: pointer;
          display: flex;
          justify-content: center;

          &:first-child {
            margin-right: 36px;
            font-size: 30px;
            @media screen and (max-width: $phoneWidth) {
              margin-right: 16px;
            }
          }

          &.close-text {
            font-size: 24px;
            transition: color 0.3s ease;

            @media screen and (max-width: $smDesktopWidth) {
              font-size: 20px;
            }
            @media screen and (max-width: $phoneWidth) {
              font-size: 16px;
            }
          }
        }
      }
    }

    .navigation-bar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      nav {
        font-size: 82px;
        line-height: 100%;
        font-weight: 500;
        @media screen and (max-width: $desktopLgWidth) {
          font-size: 56px;
        }
        @media screen and (max-width: $smDesktopWidth) {
          font-size: 48px;
        }
        @media screen and (max-width: $phoneWidth) {
          font-size: 36px;
        }
        ul {
          li {
            cursor: pointer;
            transition: color 0.3s ease;
            a {
              &.router-link-exact-active {
                color: #ee5b5b;
              }
              color: white;
              &:hover {
                color: #ee5b5b;
                transition: color 0.3s ease;
              }
            }
          }
          li:not(:first-child) {
            margin-top: 54px;
            @media screen and (max-width: $desktopLgWidth) {
              margin-top: 52px;
            }
            @media screen and (max-width: $desktopWidth) {
              margin-top: 42px;
            }
            @media screen and (max-width: $desktopWidth) {
              margin-top: 42px;
            }
            @media screen and (max-width: $smDesktopWidth) {
              margin-top: 38px;
            }
            @media screen and (max-width: $phoneWidth) {
              margin-top: 24px;
            }
          }
        }
      }

      .sub-logo {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        svg {
          @media screen and (max-width: $desktopLgWidth) {
            height: 310px;
            width: 310px;
          }
          @media screen and (max-width: $desktopWidth) {
            height: 237px;
            width: 237px;
          }
          @media screen and (max-width: $smDesktopWidth) {
            height: 277px;
            width: 277px;
          }
          @media screen and (max-width: $tableWidth) {
            display: none;
          }
        }
      }
    }

    .footer-line {
      display: none;
      width: 100%;
      @media screen and (max-width: $tableWidth) {
        display: block;
      }
    }

    .menu-footer {
      font-family: 'Raleway';
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-top: 2px solid white;
      padding-top: 22px;
      @media screen and (max-width: $tableWidth) {
        border-top: none;
        padding-top: 0;
      }
      .address-wrapper {
        @media screen and (max-width: $tableWidth) {
          display: none;
        }
      }
      .contacts-container {
        font-size: 20px;
        line-height: 23px;
        font-weight: 600;
        width: 100%;
        margin-right: 542px;
        height: 100%;
        @media screen and (max-width: $desktopHDWidth) {
          margin-right: 450px;
        }
        @media screen and (max-width: $desktopLgWidth) {
          font-size: 18px;
          margin-right: 297px;
        }
        @media screen and (max-width: $desktopWidth) {
          font-size: 20px;
          margin-right: 106px;
        }
        @media screen and (max-width: $smDesktopWidth) {
          font-size: 18px;
          margin-right: 83px;
        }
        @media screen and (max-width: $phoneWidth) {
          font-size: 17px;
          margin-right: 0px;
        }
        ul {
          display: flex;
          height: 100%;
          justify-content: space-between;
          @media screen and (max-width: $tableWidth) {
            flex-direction: column;
          }
          li {
            cursor: pointer;
          }
        }
      }
      #menu-mobile-logo {
        display: none;
        @media screen and (max-width: $tableWidth) {
          display: block;
          height: 106px;
          width: 106px;
        }
      }
    }
  }
}

.menu-fade-enter-active {
  // transition: all 0.3s ease;
  transition: all 0.4s ease;
}
.menu-fade-leave-active {
  transition: all 0.4s ease;
}
.menu-fade-enter,
.menu-fade-leave-to {
  // transform: translateY(-100vh);
  opacity: 0;
  z-index: 1;
}
</style>