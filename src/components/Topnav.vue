<template>
  <div class="topnav">
    <div class="logo" @click="goToHome()">UI组件库</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
<!--    <span class="toggleAside" @click="toggleMenu">-->
    <svg t="1600941106683" @click="toggleMenu" class="icon toggleAside" :class="{'iconTrans':toggleMenu}"
         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2521" width="200" height="200">
      <path d="M166.3 602l51.4-85.7L512 692.8l294.3-176.5 51.4 85.7L512 809.4zM512 375.7l268.5-161.1 51.5 85.7-320 192-320-192 51.5-85.7z" p-id="2522" />
    </svg>
<!--    </span>-->

  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  data(){
    return {transIcon: !1}
  },
  setup(props, ctx) {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    console.log(ctx)
    const toggleMenu = function() {
      menuVisible.value = !menuVisible.value;
      // console.log(this.transIcon)
      console.log(menuVisible.value)
      // this.transIcon = !this.transIcon
    };
    // const goToHome = () => {
    // };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: lightseagreen;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    /*background: red;*/
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  > .toggleAside.iconTrans {
    transform: rotate(180deg);
    transition: transfrom 5s;
    top: 12px;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>