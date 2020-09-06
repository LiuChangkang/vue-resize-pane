# vue-resize-pane
> Resizable split panes
> 可调整的分割布局插件

## Installation
```
npm install vue-resize-pane --save

yarn add vue-resize-pane
```

### Usage
```
import ResizePane from 'vue-resize-pane'
Vue.use(ResizePane)
```
### or
```
import ResizePane from 'vue-resize-pane'
new Vue({
    components: {
        ResizePane
    }
})
```

### Next
```
<ResizePane layout="row" first-min-size="300px" second-min-size="500px">
  <div slot="first"></div> 
  <div slot="second"></div>
</ResizePane> 
```

first和second为第一格和第二格slot的名称，插件可嵌套使用，嵌套时可以使用不同的布局方向

### Options
|  Property   | Description  | Type | Default |
|  ----  | ----  | ----  | ----  | 
| layout  | row为横向排列，col为垂直排列 | String | row |
| firstDefaultSize  | 第一格的默认尺寸，可带css单位 | String | 50% |
| firstMinSize | 第一格的最小尺寸，可带css单位 | String | 100px |
| secondMinSize | 第二格的最小尺寸，可带css单位 | String | 100px |
| lineColor | 中间线条的颜色值 | String | #999999 |
| overflow | 格子的overflow样式 | String | hidden |
