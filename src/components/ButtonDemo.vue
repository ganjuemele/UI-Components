<template>
  <div>Button 示例</div>
  <div style="color: #a3a3a3;font-size: 13px;margin-bottom: 15px;">常用的操作按钮.</div>

  <h3>一、Theme</h3>
  <div class="button-module">
    <Button @click="onClick">点我</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
    <div class="button-module-text">属性theme：默认为button</div>
  </div>

  <h3>二、Size</h3>
  <div class="button-module">
    <Button size="big">big</Button>
    <Button>Normal</Button>
    <Button size="small">small</Button>
    <div class="button-module-text">属性size：默认为normal</div>
  </div>

  <h3>三、Level</h3>
  <div class="button-module">
    <Button level="main">Main</Button>
    <Button level="info">Info</Button>
    <Button level="success">Success</Button>
    <Button level="danger">Danger</Button>
    <div class="button-module-text">theme: button<br/>属性level：默认为normal</div>
  </div>

  <div class="button-module">
    <Button theme="link" level="main">Main</Button>
    <Button theme="link" level="danger">Link</Button>
    <div class="button-module-text">theme: link<br/>属性level：默认为normal</div>
  </div>

  <div class="button-module">
    <Button theme="text" level="main">main</Button>
    <Button theme="text">normal</Button>
    <Button theme="text" level="success">success</Button>
    <Button theme="text" level="danger">danger</Button>
    <div class="button-module-text">theme: text<br/>属性level：默认为normal</div>
  </div>

  <h3>四、圆角</h3>
  <div class="button-module">
    <Button level="main" round>main</Button>
    <Button round>Normal</Button>
    <Button level="info" round>info</Button>
    <Button level="danger" round>danger</Button>
    <div class="button-module-text">theme: button<br/>属性round: 默认不带圆角，需要的加上round</div>
  </div>

  <h3>四、禁用</h3>
    <div class="button-module">
      <Button level="success" disabled>Disabled</Button>
      <Button level="main"  disabled>Disabled</Button>
      <Button level="danger" theme="button" disabled>Disabled</Button>
      <div class="button-module-text">属性disabled: 默认不带圆角，需要的加上disabled</div>
    </div>

  <h3>五、示例 5</h3>
    <div class="button-module">
      <Button loading>加载中</Button>
      <Button level="main" loading>加载中</Button>
      <div class="button-module-text">属性loading: 默认不带加载样式，需要的加上loading</div>
    </div>

</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },

  setup() {
    const onClick = () => {
      console.log('@click="onClick"')
    }
    return { onClick }
  }
}
</script>

<style lang="scss">
  .button-module {
    border: 1px solid grey;
    padding: 10px 5px;
    margin: 10px 3px 20px;
    & > button {
      margin: 4px 0;
    }
    & > .button-module-text {
      border-top: 1px solid grey;
      margin-top: 15px;
      padding-top: 10px;
      color: #6c6c6c;
      font-size: 13px;
    }
  }
</style>