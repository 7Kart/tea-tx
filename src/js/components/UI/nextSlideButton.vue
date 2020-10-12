<template>
  <div @click="onNextSlide" class="next-slide-button">
    <p>О НАС</p>
    <svg
      width="16"
      height="37"
      viewBox="0 0 16 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.51588 27.1045L-3.00369e-07 28.6892L7.95005 37L16 28.5846L14.4842 27L9 32.733L9 -3.0598e-07L7 -3.93402e-07L7 32.8375L1.51588 27.1045Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    onNextSlide() {
      this.$scrollTo('#first-section', 800, {
        container: 'body',
        // duration: 500,
        easing: 'ease',
        offset: 0,
        force: true,
        cancelable: false,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.next-slide-button {
  border: 2px solid #30a667;
  width: 208px;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: border 0.2s ease;

  &:hover {
    border: 2px solid white;
    transition: border 0.2s ease;
  }
  @media screen and (max-width: $smDesktopWidth) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: $smTableWidth) {
    width: 130px;
    height: 130px;
    margin-top: 80px;
  }

  @media screen and (max-width: $phoneWidth) {
    margin-top: 50px;
  }

  svg {
    @media screen and (max-width: $smTableWidth) {
      height: 23px;
    }
  }

  p {
    color: white;
    margin: 15px 0;
    font-size: 24px !important;
    line-height: 138.2% !important;
    text-align: center;
    font-family: 'Raleway';
    font-weight: bold;
    letter-spacing:1px;
    @media screen and (max-width: $smTableWidth) {
      font-size: 15px !important;
      line-height: 138% !important;
    }
  }
}
</style>