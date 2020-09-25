<template>
    <div class="switch-module">
        <button @click="toggle" :class="[{checked:value, orange:value},
        {'switchShadow switchShadow-orange':evo==='Shadow'}
        ]">
            <span />
        </button>
        <hr />
        <div>{{evo}}: Orange</div>
    </div>

    <div class="switch-module">
        <button @click="toggle" :class="[{checked:value, green:value},
        evo==='Shadow'?'switchShadow switchShadow-green':''
        ]">
            <span />
        </button>
        <hr/>
        <div>{{evo}}: Green</div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Switch',
        props: { //接收父组件传来的值
            value: Boolean,
            evo: String,
        },
        data(){
            return
        },
        setup(props, context) {
            console.log(props.evo)
            const toggle= () => {
                context.emit('update:value', !props.value)
            };
            return { toggle }
        }
    };
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    $abcG: #00B893;
    $abcO: #FFA900;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background: #999;
        border-radius: $h/2;
        position: relative;
        margin: auto;
        &:focus {
            outline: none;
        }
        &.checked {
            & > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
        &.orange {
            background-color: $abcO;
        }
        &.green {
            background-color: $abcG;
        }
        &.switchShadow {
            box-shadow: 0 2px 3px #999;
        }
        &.switchShadow-green.checked {
            box-shadow: 0 2px 4px $abcG;
        }
        &.switchShadow-orange.checked {
            box-shadow: 0 2px 4px $abcO;
        }

    }
    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background:white;
        border-radius: $h2 / 2;
        transition: left 250ms;
    }
    .switch-module {
        display: inline-flex;
        width: 44vw;
        border: 1px solid grey;
        flex-direction: column;
        padding: 10px 5px;
        margin: 10px 3px;
        > hr {
            margin: 8px;
        }
    }

</style>