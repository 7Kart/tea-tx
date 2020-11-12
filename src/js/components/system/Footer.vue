
<template>
  <footer id="footer" ref="myRef">
    <container>
      <div class="footer-wrapper">
        <div>
          <footer-menu-logo
            bckgrnd-clr="#1a5a38"
            id-el="footer-logo"
            text-clr="#D4D7CC"
          />
        </div>
        <div class="list-container">
          <ul class="menu-list">
            <li><router-link to="/">О нас</router-link></li>
            <li><router-link to="/experience">Опыт</router-link></li>
            <li><router-link to="/projects">Партнеры</router-link></li>
            <li>
              <router-link to="/contacts">Контакты </router-link>
            </li>
            <li><a href="https://teawall.ru/" target="_blank">Блог</a></li>
          </ul>
          <ul class="social-link-list">
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
        <div class="bottom-contacts">
          <div class="cooperative-container">
            <p>© 2020 tea-tx company</p>
            <span>&#8226;</span>
            <p>All rights reserved</p>
          </div>
          <div class="address-block">
            <address-block text-color="#404040" />
          </div>
        </div>
      </div>
    </container>
  </footer>
</template>

<script>
import container from './Container.vue'
import addressBlock from './Address.vue'
import scrollObserver from '../../scripts/sectionIntersectionObserver.js'

import footerMenuLogo from '../svg/FooterMenuLogo.vue'

export default {
  components: {
    container,
    footerMenuLogo,
    addressBlock
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

footer {
  position: relative;
  z-index: 10;
  background-color: #d4d7cc;
  position: sticky;
  bottom: 0;
  left: 0;

  @media screen and (max-width: $phoneWidth) {
    height: 100vh;
  }

  .footer-wrapper {
    margin: 81px 0 25px 0;
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: $smTableWidth) {
      flex-direction: column;
      flex-wrap: nowrap;
      margin: 0;
      padding: 47px 0 25px 0;
    }
    @media screen and (max-width: $smPhoneWidth) {
         padding: 15px 0 10px 0;
    }
    & > div {
      &:first-child {
        width: calc((50%-65px) / 2);
        // display: flex;
        @media screen and (max-width: $desktopLgWidth) {
          width: calc((50%-50px) / 2+50px);
        }
        @media screen and (max-width: $desktopWidth) {
          width: calc((50%-38px) * 2 / 3);
        }
        @media screen and (max-width: $smTableWidth) {
          width: 50%;
          margin-bottom: 42px;
        }
        @media screen and (max-width: $phoneWidth) {
          width: 70%;
          margin-bottom: 0;
        }

        @media screen and(max-width:$smPhoneWidth) {
          width: 60%;
        }
      }
      &:nth-child(2) {
        display: flex;
        width: calc(50%-65px);
        @media screen and (max-width: $desktopLgWidth) {
          width: calc(50%-50px);
        }
        @media screen and (max-width: $desktopWidth) {
          width: calc(50%-38px);
        }
        @media screen and (max-width: $smTableWidth) {
          width: 65%;
        }
        @media screen and (max-width: $phoneWidth) {
          padding: 42px 0 42px 0;
        }
        @media screen and(max-width:$smPhoneWidth) {
          padding: 0;
        }
        ul {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 37px;
          color: $neutral-primary;
          cursor: pointer;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 22px;
            line-height: 33px;
          }
          @media screen and (max-width: $desktopWidth) {
            font-size: 24px;
            line-height: 37px;
          }

          @media screen and (max-width: $smDesktopWidth) {
            font-size: 22px;
            line-height: 33px;
          }
          @media screen and (max-width: $phoneWidth) {
            font-size: 5vw;
          }

          &:first-child {
            font-family: 'Spectral';
            margin-right: 90px;
            @media screen and (max-width: $desktopLgWidth) {
              margin-right: 48px;
            }
            @media screen and (max-width: $desktopWidth) {
              margin-right: 39px;
            }
            @media screen and (max-width: $smDesktopWidth) {
              margin-right: 31px;
            }
            @media screen and (max-width: $phoneWidth) {
              margin-right: 15px;
            }
          }

          &:nth-child(2) {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            @media screen and (max-width: $desktopLgWidth) {
              font-size: 18px;
              line-height: 33px;
            }
            @media screen and (max-width: $desktopWidth) {
              font-size: 20px;
              line-height: 37px;
            }

            @media screen and (max-width: $smDesktopWidth) {
              font-size: 18px;
              line-height: 33px;
            }
            @media screen and (max-width: $phoneWidth) {
              font-size: 5vw;
            }
          }

          li {
            &:not(:last-child) {
              margin-bottom: 26px;

              @media screen and (max-width: $phoneWidth) {
                margin-bottom: 10px;
              }
            }
          }

          a {
            color: $neutral-primary;
            transition: color 0.3s ease;
            &:hover {
              transition: color 0.3s ease;
              color: $hover-link;
            }
            &.router-link-exact-active {
              color: $main-theme;
            }
          }
        }
      }
    }
    .bottom-contacts {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 100px;

      @media screen and(max-width:$smTableWidth) {
        flex-direction: column-reverse;
        align-items: flex-start;
        margin-top: 50px;
      }

      @media screen and(max-width: $phoneWidth) {
        margin-top: 0px;
      }

      div {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        @media screen and(max-width:$smTableWidth) {
          width: 100%;
        }
        @media screen and(max-width: $desktopWidth) {
          font-size: 18px;
          line-height: 21px;
        }
        @media screen and(max-width: $phoneWidth) {
          font-size: 15px;
          line-height: 18px;
        }

        &.address-block {
          @media screen and(max-width: $smTableWidth) {
            margin: 0 0 17px 0;
          }
        }

        &.cooperative-container {
          display: flex;
          flex-wrap: wrap;
          @media screen and(max-width: $phoneWidth) {
            flex-wrap: nowrap;
          }
          @media screen and(max-width: $iPhoneWidthPlus) {
            font-size: 3vw;
          }
          p {
            white-space: nowrap;
            &:first-child {
              @media screen and(max-width: $smDesktopWidth) {
                width: 100%;
              }
              @media screen and(max-width: $smTableWidth) {
                width: auto;
              }
            }
          }

          span {
            font-size: 30px;
            color: $main-theme;
            margin: 0 21px;
            @media screen and(max-width: $smDesktopWidth) {
              margin: 0 11px 0 0;
            }
            @media screen and(max-width: $smTableWidth) {
              margin: 0 12px 0 12px;
            }
          }
        }
      }
    }
  }
}
</style>