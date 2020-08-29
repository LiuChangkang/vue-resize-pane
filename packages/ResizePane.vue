<template>
  <div
    :class="$style.wrap + (layout === 'col' ? ' ' + $style.column : '')"
    :style="wrapStyle"
    @mousemove="moving"
  >
    <div
      ref="first"
      :class="$style['first-slot']"
      :style="firstElStyle"
    >
      <slot name="first" />
    </div>
    <ResizePaneLine
      :layout="layout"
      :style="{ borderColor: lineColor, cursor: (layout === 'col' ? 'row' : 'col') + '-resize' }"
      @mousedown.native.stop="mouseDown"
    />
    <div
      ref="second"
      :class="$style['second-slot']"
      :style="secondElStyle"
    >
      <slot name="second" />
    </div>
  </div>
</template>

<script>
import ResizePaneLine from './ResizePaneLine'

export default {
  name: 'ResizePane',
  components: {
    ResizePaneLine
  },
  props: {
    layout: {
      validator(value) {
        return ['row', 'col'].indexOf(value) >= 0
      },
      default: 'row'
    },
    firstDefaultSize: {
      type: String,
      default: '50%'
    },
    firstMinSize: {
      type: String,
      default: '100px'
    },
    secondMinSize: {
      type: String,
      default: '100px'
    },
    lineColor: {
      type: String,
      default: '#999999'
    },
    overflow: {
      type: String,
      default: 'hidden'
    }
  },
  data() {
    return {
      currentFirstSize: '',
      lineActive: false
    }
  },
  computed: {
    wrapStyle() {
      if (this.lineActive) {
        const { width, height } = this.wrapComputedStyle
        return {
          width,
          height,
          cursor: (this.layout === 'col' ? 'row' : 'col') + '-resize',
          userSelect: 'none'
        }
      } else {
        return {}
      }
    },
    firstElStyle() {
      return {
        width: this.layout === 'row' ? this.currentFirstSize : '',
        height: this.layout === 'col' ? this.currentFirstSize : '',
        minWidth: this.layout === 'row' ? this.firstMinSize : '',
        minHeight: this.layout === 'col' ? this.firstMinSize : '',
        overflow: this.overflow
      }
    },
    secondElStyle() {
      return {
        minWidth: this.layout === 'row' ? this.secondMinSize : '',
        minHeight: this.layout === 'col' ? this.secondMinSize : '',
        overflow: this.overflow
      }
    }
  },
  watch: {
    layout() {
      this.resizeLayout()
    }
  },
  mounted() {
    document.body.addEventListener('mouseleave', this.mouseLeave)
    this.wrapComputedStyle = getComputedStyle(this.$el, null)
    this.firstComputedStyle = getComputedStyle(this.$refs.first, null)
    this.resizeLayout()
  },
  beforeDestroy() {
    document.body.removeEventListener('mouseleave', this.mouseLeave)
  },
  methods: {
    resizeLayout() {
      this.currentFirstSize = this.firstDefaultSize
      this.$nextTick(() => {
        this.currentFirstSize = this.layout === 'row' ? this.firstComputedStyle.width : this.firstComputedStyle.height
      })
    },
    mouseDown() {
      this.lineActive = true
    },
    moving(e) {
      if (e.buttons === 0 || e.which === 0) {
        this.lineActive = false
      }
      if (this.lineActive) {
        let offset = 0
        let target = e.currentTarget
        if (this.layout === 'row') {
          while (target) {
            offset += target.offsetLeft
            target = target.offsetParent
          }
        } else {
          while (target) {
            offset += target.offsetTop
            target = target.offsetParent
          }
        }
        const currentPage = this.layout === 'row' ? e.pageX : e.pageY
        this.currentFirstSize = currentPage - offset + 'px'
        this.$nextTick(() => {
          this.currentFirstSize = this.layout === 'row' ? this.firstComputedStyle.width : this.firstComputedStyle.height
        })
      }
    },
    mouseLeave() {
      this.lineActive = false
    }
  }
}
</script>

<style module>
.wrap{
  display: flex;
}
.column{
  flex-direction: column;
}
.second-slot{
  flex: 1;
}
</style>
