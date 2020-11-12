<template>
  <div :style="compStyle" class="address-container">
    <svg
      width="42"
      height="31"
      viewBox="0 0 42 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 25.6667C42 28.2438 39.9105 30.3333 37.3333 30.3333H4.66667C2.0895 30.3333 0 28.2438 0 25.6667V4.66667C0 2.0895 2.0895 0 4.66667 0H37.3333C39.9105 0 42 2.0895 42 4.66667V25.6667Z"
        fill="#DE2910"
      />
      <path
        d="M12.9917 4.63977L13.8503 5.05511L14.5375 4.39478L14.408 5.33977L15.248 5.79011L14.31 5.95811L14.142 6.8961L13.6917 6.0561L12.7467 6.1856L13.407 5.49844L12.9917 4.63977ZM18.4341 8.07093L18.0188 8.92843L18.6791 9.61676L17.7353 9.4861L17.285 10.3273L17.117 9.3881L16.1778 9.2201L17.019 8.76977L16.8883 7.82593L17.5766 8.48627L18.4341 8.07093ZM17.3176 12.4798L17.6303 13.3804L18.5835 13.4003L17.824 13.9754L18.1005 14.8889L17.3176 14.3441L16.5348 14.8889L16.8102 13.9754L16.0507 13.4003L17.0038 13.3804L17.3176 12.4798ZM12.9917 16.3064L13.8503 16.7217L14.5375 16.0614L14.408 17.0064L15.248 17.4567L14.31 17.6247L14.142 18.5627L13.6917 17.7227L12.7467 17.8522L13.407 17.1651L12.9917 16.3064ZM8.16638 6.94277L9.25021 10.0589L12.5472 10.1266L9.9187 12.1193L10.8742 15.2763L8.16638 13.3921L5.45857 15.2763L6.41406 12.1193L3.78558 10.1266L7.08256 10.0589L8.16638 6.94277Z"
        fill="#FFDE02"
      />
    </svg>
    <div>
      <p>Guangzhou, China</p>
      <p>芳村茶叶市</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: '#FFF'
    }
  },
  computed: {
    compStyle() {
      return {
        'text-color': this.textColor
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.address-container {
  display: flex;

  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  p {
    white-space: nowrap;
    width: 100%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    // color: $neutral-primary;
    @media screen and(max-width:$desktopWidth) {
      font-size: 18px;
    }
    @media screen and(max-width:$smPhoneWidth) {
      font-size: 14px;
    }
  }
  svg {
    margin-right: 16px;
  }
}
</style>