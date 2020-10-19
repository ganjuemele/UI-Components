<template>
  <div>Button 示例</div>
  <div style="color: #a3a3a3;font-size: 13px;margin-bottom: 15px;">常用的操作按钮.</div>

  <h3>一、基础用法</h3>
  <div class="button-module">
    <Button @click="onClick">你好</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
    <div class="button-module-text">属性theme：默认为button</div>
  </div>

  <h3>二、示例 2</h3>
  <div class="button-module">
    <Button size="big">big</Button>
    <Button>Normal</Button>
    <Button size="small">small</Button>
  </div>

  <h3>三、示例 3</h3>
  <div class="button-module">
    <Button level="main">main</Button>
    <Button>Normal</Button>
    <Button level="danger">danger</Button>
  </div>

  <div class="button-module">
    <Button theme="link" level="main">link</Button>
    <Button theme="link">Normal</Button>
    <Button theme="link" level="danger">link</Button>
  </div>

  <div class="button-module">
    <Button theme="text" level="main">main</Button>
    <Button theme="text">Normal</Button>
    <Button theme="text" level="danger">danger</Button>
  </div>

  <h3>四、示例 4</h3>
    <div class="button-module">
      <Button disabled>禁用按钮</Button>
      <Button theme="link">Normal</Button>
      <Button theme="text">危险按钮</Button>
    </div>

  <h3>五、示例 5</h3>
    <div class="button-module">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>

</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },

  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  }
}
</script>

<style lang="scss">
  .button-module {
    border: 1px solid grey;
    padding: 10px 5px;
    margin: 10px 3px;
    & > .button-module-text {
      border-top: 1px solid grey;
      margin-top: 15px;
      padding-top: 10px;
    }
  }
</style>