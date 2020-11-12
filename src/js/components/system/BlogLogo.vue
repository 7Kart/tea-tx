<template>
  <div class="blog-logo-container">
    <div>
      <h2>
        TEA <br />
        WALL <br />
        BLOG
      </h2>
    </div>
    <img src="/assets/img/tea wall blog.png" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.blog-logo-container {
  position: relative;

  margin: 85px 0;

  @media screen and (max-width: $desktopWidth) {
    margin: 76px 0;
  }

  @media screen and(max-width:$smDesktopWidth) {
    width: 50%;
    margin: 60px auto;
  }

  @media screen and(max-width:$tableWidth) {
    width: 100%;
  }

  @media screen and (max-width: $phoneWidth) {
    margin: 52px 0;
  }

  img {
    width: 100% !important;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    background-color: $main-theme;
    border-radius: 50%;
    height: 36%;
    width: 36%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: white;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 138.2%;

      @media screen and (max-width: $desktopWidth) {
        font-size: 20px;
      }

      @media screen and (max-width: $smDesktopWidth) {
        font-size: 18px;
      }
    }
  }
}
</style>