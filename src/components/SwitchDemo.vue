<template>
  <div v-for="(item, index) in evo" :item="item" >
    <Switch v-model:value="clickStatus" :evo="evo[index]" />
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import { ref } from 'vue'
  export default {
    components: {Switch},
    data(){
      return {
        evo: ["Normal", "Shadow", "Disabled", "Text"],
      }
    },
    setup(){
      const clickStatus = ref(!0);
      return { clickStatus }
    }
  }
</script>