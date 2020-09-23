<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>ABC UI</h1>
            <h2>UI框架</h2>
            <p class="actions">
                <a href="">GitHub</a><br>
                <a href="">START</a>
            </p>
        </div>
    </div>

</template>

<script lang="ts">
    import Topnav from '../components/Topnav.vue';
    export default {
        name: 'Home.vue',
        components: {Topnav}
    };
</script>

<style lang="scss" scoped>

</style>