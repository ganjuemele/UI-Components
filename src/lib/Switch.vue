<template>
    <div class="">
        <button :class="{checked:value}" @click="toggle">
            <span />
        </button>
        <div>Normal: Orange</div>
    </div>

    <div class="">
        <button :class="{green:value}" @click="toggle">
            <span />
        </button>
        <div>Normal: Green</div>
    </div>

</template>

<script lang="ts">
    export default {
        name: 'Switch',
        props: { //接收父组件传来的值
            value: Boolean
        },
        setup(props, context) {
            const toggle= () => {
                context.emit('update:value', !props.value)
            };
            return {toggle}
        }
    };
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background: #999;
        border-radius: $h/2;
        position: relative;
        &.checked {
            background-color: #FFA900;
            & > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
        &:focus {
            outline: none;
        }
        &.green {
            background-color: #00B893;
            & > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
    }
    span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background:white;
        border-radius: $h2 / 2;
        transition: left 250ms;
    }
</style>