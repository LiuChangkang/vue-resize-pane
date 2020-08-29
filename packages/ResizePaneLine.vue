<template>
  <div
    class="out-line"
    :style="lineStyle"
  >
    <div
      class="line"
    />
  </div>
</template>

<script>
export default {
  name: 'ResizePaneLine',
  props: {
    layoput: {
      type: String,
      default: ''
    }
  },
  computed: {
    lineStyle() {
      return {
        width: this.layoput === 'row' ? '1px' : '',
        height: this.layoput === 'col' ? '1px' : ''
      }
    }
  }
}
</script>

<style scoped>
.out-line{
  position: relative;
  z-index: 1;
  padding: 3px;
  margin: -3px;
  align-self: stretch;
}
.line{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: inherit;
}
</style>
